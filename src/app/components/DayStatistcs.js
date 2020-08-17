import React from 'react'
import PropTypes from 'prop-types'

const DayStatistics = ({ date, active, deaths, confirmed, recovered }) => {
  return (
    <div className='day-stat'>
      <div className='day-stat__date'>{date}</div>
      <div className='day-stat__metrics-container'>
        <div className='day-stat__metrics'>
          Active <span>{active}</span>
        </div>
        <div className='day-stat__metrics'>
          Deaths <span>{deaths}</span>
        </div>
        <div className='day-stat__metrics'>
          Confirmed <span>{confirmed}</span>
        </div>
        <div className='day-stat__metrics'>
          Recovered <span>{recovered}</span>
        </div>
      </div>
    </div>
  )
}

DayStatistics.propTypes = {
  date: PropTypes.string.isRequired,
  active: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired
}

export default DayStatistics
