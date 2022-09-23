import React, { useReducer } from 'react'
import ProfileEdit from './ProfileEdit'
import { initialState, reducer } from '../ProfileStateDefine'

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
function ProfileEditState() {
  const [state, dispatch] = useReducer(reducer, initialState)

  //preluare date din cache apollo
  const client = useApolloClient()

  const date = client.readQuery({
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
  
  //query
  useQueryWithErrorHandling(USER_DATA_QUERY, {
    variables: { userEmail: date?.userData?.email },
    skip: !date?.userData?.email,
    onCompleted: data => {
      if (data != undefined || data != null) {
        dispatch({ inputName: 'allObject', inputValue: data.getProfileData, inputType: 'allObject' })
        //refacere data
        let an = data.getProfileData.DataNasterii.substring(0, 4)
        let luna = data.getProfileData.DataNasterii.substring(5, 7)
        let zi = data.getProfileData.DataNasterii.substring(8, 10)
        let dataNastereFormatata = an + '-' + luna + '-' + zi
        dispatch({ inputName: 'DataNasterii', inputValue: dataNastereFormatata, inputType: 'field' })
        let an1 = data.getProfileData.DataNasterii.substring(0, 4)
        let luna1 = data.getProfileData.DataNasterii.substring(5, 7)
        let zi1 = data.getProfileData.DataNasterii.substring(8, 10)
        let dataAngajareFormatata = an1 + '-' + luna1 + '-' + zi1
        dispatch({ inputName: 'DataAngajarii', inputValue: dataAngajareFormatata, inputType: 'field' })
      }
    }
  })
  function modifyDataProfile(inputName1, inputValue1) {
    dispatch({ inputName: inputName1, inputValue: inputValue1, inputType: 'field' })
  }

  return (
    <div onMouseMove={()=>{dispatch()}}>
      <ProfileEdit stare={state} modifyDataProfile={modifyDataProfile}></ProfileEdit>
    </div>
  )
}

export default ProfileEditState
