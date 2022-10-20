import React from 'react'
import { MoreDays } from '../../container'

const MoreDaysPage = ({data}) => {
  return (
    <>
      {data && <MoreDays data={data}/>}
    </>
  )
}

export default MoreDaysPage