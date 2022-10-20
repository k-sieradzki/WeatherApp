import React from 'react'
import { MoreDays } from '../../container'
import { useStateContext } from '../../contexts/ContextProvider';

const MoreDaysPage = ({data}) => {

  const {actualPage, setActualPage} = useStateContext()
	setActualPage('MoreDaysPage')
  return (
    <>
      {data && <MoreDays data={data}/>}
    </>
  )
}

export default MoreDaysPage