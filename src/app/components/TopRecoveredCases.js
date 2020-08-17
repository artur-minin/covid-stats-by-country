import React from 'react'
import PropTypes from 'prop-types'

const TopRecoveredCases = ({ statisticsByDays }) => {
  const topRecoveredCases = statisticsByDays.reduce(
    (max, { Date, Recovered }, index) => {
      if (index > 0) {
        if (Recovered > max.Recovered) {
          max = { Date, Recovered }
        }
      }

      return max
    },
    { Date: statisticsByDays[0].Date, Recovered: statisticsByDays[0].Recovered }
  )

  return (
    <div className='top-recovered-cases'>
      <h3 className='top-recovered-cases__title'>Top Recovered Cases</h3>
      <div className='top-recovered-cases__quantity'>{topRecoveredCases.Recovered}</div>
      <div className='top-recovered-cases__date'>{topRecoveredCases.Date}</div>
    </div>
  )
}

TopRecoveredCases.propTypes = {
  statisticsByDays: PropTypes.array.isRequired
}

export default TopRecoveredCases
