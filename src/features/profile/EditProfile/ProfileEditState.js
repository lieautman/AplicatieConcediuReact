import React, { Fragment, useReducer}from 'react'
import {initialState, reducer} from '../ProfileStateDefine'

import ProfileEdit from './ProfileEdit'

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

//css

function ProfileEditState() {
  const [state,dispatch] = useReducer(reducer, initialState);
  
  useQueryWithErrorHandling(USER_DATA_QUERY, { variables: { userEmail:"a"}, onCompleted:(data)=>{ 
    if(data!=undefined||data!=null){
      dispatch({inputType:'allObject', inputValue:data.getProfileData, inputName:'allObject'})
    }
  }})

  function modifyDataProfile(inputName1, inputValue1){
    dispatch({ inputName:inputName1, inputValue:inputValue1 , inputType:'field'})//
  }
  
  return (
    <>
    <ProfileEdit
      stare={state}
      modifyDataProfile= {modifyDataProfile}
    ></ProfileEdit>
  </>
  )
}


export default ProfileEditState