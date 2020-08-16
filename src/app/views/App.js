import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAvailableCountries } from '../../redux/modules/availableCountries/actions'
import { getTotalCountryStatistics } from '../../redux/modules/countryStatistics/actions'

import DayStatistcs from '../components/DayStatistcs'
import TopRecoveredCases from '../components/TopRecoveredCases'
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component {
  state = {
    activeCountry: 'kyrgyzstan'
  }

  componentDidMount() {
    const { activeCountry } = this.state
    const { getAvailableCountries, getTotalCountryStatistics } = this.props
    getAvailableCountries()
    getTotalCountryStatistics(activeCountry)
  }

  changeActiveCountry(event) {
    const { getTotalCountryStatistics } = this.props
    const activeCountry = event.target.value
    this.setState({ activeCountry }, () => {
      getTotalCountryStatistics(activeCountry)
    })
  }

  render() {
    const { activeCountry } = this.state
    const { availableCountries, statisticsByDays } = this.props

    return (
      <ErrorBoundary>
        <div className='container app'>
          <select
            className='change-country'
            value={activeCountry}
            onChange={event => this.changeActiveCountry(event)}
          >
            {availableCountries.map(country => {
              return (
                <option key={country} value={country}>
                  {country}
                </option>
              )
            })}
          </select>

          {statisticsByDays.length ? (
            <div className='content'>
              <div>
                {statisticsByDays
                  .slice(-5)
                  .reverse()
                  .map(({ Active, Confirmed, Deaths, Recovered, Date: date }) => {
                    const formattedDate = new Intl.DateTimeFormat('en-US', {
                      month: 'long',
                      day: 'numeric'
                    }).format(new Date(date))

                    return (
                      <DayStatistcs
                        key={date}
                        date={formattedDate}
                        active={Active}
                        deaths={Deaths}
                        confirmed={Confirmed}
                        recovered={Recovered}
                      />
                    )
                  })}
              </div>

              <TopRecoveredCases statisticsByDays={statisticsByDays} />
            </div>
          ) : (
            <h1 class='no-stat'>No statistics for this country</h1>
          )}
        </div>
      </ErrorBoundary>
    )
  }
}

const mapStateToProps = state => ({
  availableCountries: state.availableCountries.countries,
  statisticsByDays: state.countryStatistics.days
})

const mapDispatchToProps = dispatch => ({
  getAvailableCountries: () => dispatch(getAvailableCountries()),
  getTotalCountryStatistics: country => dispatch(getTotalCountryStatistics(country))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
