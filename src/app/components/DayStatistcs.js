import React from 'react'

const DayStatistics = ({ date, active, deaths, confirmed, recovered }) => {
  return (
    <div className='block'>
      <div className='block__day'>{date}</div>
      <div className='block__stat'>
        <div className='block__element'>
          Active <span>{active}</span>
        </div>
        <div className='block__element'>
          Deaths <span>{deaths}</span>
        </div>
        <div className='block__element'>
          Confirmed <span>{confirmed}</span>
        </div>
        <div className='block__element'>
          Recovered <span>{recovered}</span>
        </div>
      </div>
    </div>
  )
}

export default DayStatistics
