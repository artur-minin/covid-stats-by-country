import React from 'react'

const DayStatistics = ({ date, active, deaths, confirmed, recovered }) => {
  return (
    <div>
      <div>{date}</div>
      <div>
        Active <span>{active}</span>
      </div>
      <div>
        Deaths <span>{deaths}</span>
      </div>
      <div>
        Confirmed <span>{confirmed}</span>
      </div>
      <div>
        Recovered <span>{recovered}</span>
      </div>
      <hr />
    </div>
  )
}

export default DayStatistics
