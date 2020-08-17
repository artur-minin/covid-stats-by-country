import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAvailableCountries } from '../../redux/modules/availableCountries/actions'
import { getTotalCountryStatistics } from '../../redux/modules/countryStatistics/actions'

import { formatStatistictsByDays } from '../utils'

import DayStatistcs from '../components/DayStatistcs'
import TopRecoveredCases from '../components/TopRecoveredCases'

class App extends Component {
  state = {
    activeCountry: 'kyrgyzstan'
  }

  componentDidMount() {
    const { activeCountry } = this.state
    const { getAvailableCountries, getTotalCountryStatistics } = this.props

    getAvailableCountries()

    const localActiveCountry = JSON.parse(localStorage.getItem('activeCountry'))
    if (localActiveCountry) {
      this.setState({ activeCountry: localActiveCountry })
      getTotalCountryStatistics(localActiveCountry)
    } else {
      getTotalCountryStatistics(activeCountry)
    }
  }

  changeActiveCountry(event) {
    const { getTotalCountryStatistics } = this.props
    const activeCountry = event.target.value

    this.setState({ activeCountry })
    getTotalCountryStatistics(activeCountry)
    localStorage.setItem('activeCountry', JSON.stringify(activeCountry))
  }

  render() {
    const { activeCountry } = this.state
    const { availableCountries, statisticsByDays } = this.props
    const formattedStatisticsByDays = formatStatistictsByDays(statisticsByDays)

    return (
      <div className='main-container'>
        <select
          className='change-country'
          value={activeCountry}
          onChange={event => this.changeActiveCountry(event)}
        >
          {availableCountries.map(({ Country, Slug }) => {
            return (
              <option key={Country} value={Slug}>
                {Country}
              </option>
            )
          })}
        </select>

        {formattedStatisticsByDays.length ? (
          <div className='content'>
            <div className='days-stat'>
              {formattedStatisticsByDays
                .slice(-5)
                .reverse()
                .map(({ Active, Confirmed, Deaths, Recovered, Date }) => {
                  return (
                    <DayStatistcs
                      key={Date}
                      date={Date}
                      active={Active}
                      deaths={Deaths}
                      confirmed={Confirmed}
                      recovered={Recovered}
                    />
                  )
                })}
            </div>

            <TopRecoveredCases statisticsByDays={formattedStatisticsByDays} />
          </div>
        ) : (
          <h2 className='no-stat'>No statistics for this country</h2>
        )}
      </div>
    )
  }
}

App.propTypes = {
  availableCountries: PropTypes.array.isRequired,
  statisticsByDays: PropTypes.array.isRequired,
  getAvailableCountries: PropTypes.func.isRequired,
  getTotalCountryStatistics: PropTypes.func.isRequired
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
