import React, { useEffect, useReducer } from 'react'
import Profile from './Profile'
import { initialState, reducer } from './ProfileStateDefine'

//preluare date
import { gql } from '@apollo/client'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
const USER_DATA_QUERY = gql`
  query getProfileData($userEmail: String!) {
    getProfileData(userEmail: $userEmail) {
      Id
      Nume
      Prenume
      Email
      Parola
      DataAngajarii
      DataNasterii
      Cnp
      SeriaNumarBuletin
      Numartelefon
      Poza
      Functia
      ManagerId
      Salariu
      EsteAngajatCuActeInRegula
      IdEchipa
    }
  }
`

//preluare date din cache apollo
import { useApolloClient } from '@apollo/client'

//state management
function ProfileState() {
  const [state, dispatch] = useReducer(reducer, initialState)

  //preluare date din cache apollo
  const client = useApolloClient()
  let date = client.readQuery({
    query: gql`
      query userData {
        userData {
          id
          isAdmin
          isManager
          email
        }
      }
    `
  })

  //const oidc = useContext(AuthenticationContext) posibila alternativa

  //query
  useQueryWithErrorHandling(USER_DATA_QUERY, {
    variables: { userEmail:  date?.userData?.email },
    skip: !date?.userData?.email,
    onCompleted: data => {
      if (data != undefined || data != null) {
        dispatch({ inputName: 'allObject', inputValue: data.getProfileData, inputType: 'allObject' })
      }
    }
  })

  //useEffect(()=>{dispatch()})

  return (
    <div>
      <Profile stare={state}></Profile>
    </div>
  )
}

export default ProfileState
