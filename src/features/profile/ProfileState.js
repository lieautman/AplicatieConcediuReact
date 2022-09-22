import React, { useEffect, useReducer} from 'react'
import Profile from './Profile'
import {initialState, reducer} from './ProfileStateDefine'

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
//state management
function ProfileState() {
  const [state,dispatch] = useReducer(reducer, initialState);
  
  // useEffect(()=>{
   // if(!loading&&data){
   // dispatch({type:'allObject', inputValue:data.getProfileData, inputName:'allObject'})
   //}
  // },[])
  useQueryWithErrorHandling(USER_DATA_QUERY, { variables: { userEmail:"a"}, onCompleted:(data)=>{ 
    if(data!=undefined||data!=null){
      dispatch({ inputName:'allObject', inputValue:data.getProfileData, inputType:'allObject'})
    }
  }})

  return (
    <>
      <Profile
        stare={state}
      ></Profile>
    </>
  )
}

export default ProfileState
