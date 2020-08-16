import React from 'react'

const DayStatistics = ({ statisticsByDays }) => {
  const topRecoveredCases = statisticsByDays.reduce(
    (max, day, index) => {
      if (index > 0) {
        const previousDay = statisticsByDays[index - 1]
        const recovered = day.Recovered - previousDay.Recovered

        const formattedDate = new Intl.DateTimeFormat('en-US', {
          month: 'long',
          day: 'numeric'
        }).format(new Date(day.Date))

        if (recovered > max.recovered) {
          max = { date: formattedDate, recovered }
        }
      }

      return max
    },
    { date: statisticsByDays[0].Date, recovered: statisticsByDays[0].Recovered }
  )

  return (
    <div>
      <h2>Top Recovered Cases</h2>
      <div>{topRecoveredCases.recovered}</div>
      <div>{topRecoveredCases.date}</div>
    </div>
  )
}

export default DayStatistics
