import formatDate from './formatDate'

const formatStatistictsByDays = statisticsByDays => {
  return statisticsByDays.map(({ Active, Confirmed, Deaths, Recovered, Date }, index) => {
    Date = formatDate(Date, {
      month: 'long',
      day: 'numeric'
    })

    if (index > 0) {
      const previousDay = statisticsByDays[index - 1]
      Confirmed = Confirmed - previousDay.Confirmed
      Deaths = Deaths - previousDay.Deaths
      Recovered = Recovered - previousDay.Recovered
    }

    return { Date, Active, Confirmed, Deaths, Recovered }
  })
}

export default formatStatistictsByDays
