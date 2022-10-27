import React from 'react'
import { MoreDays } from '../../container'
import { useStateContext } from '../../contexts/ContextProvider';
import {Hourly} from '../../container/Hourly/Hourly'

import { useLocation } from 'react-router-dom';

const MoreDaysPage = () => {

  const location = useLocation()
  const data = location.state

  return (
    <>
      {data && <MoreDays data={data}/>}
    </>
  )
}

export default MoreDaysPage