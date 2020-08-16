import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAvailableCountries } from '../../redux/modules/availableCountries/actions'
import { getTotalCountryStatistics } from '../../redux/modules/countryStatistics/actions'

import DayStatistcs from '../components/DayStatistcs'
import TopRecoveredCases from '../components/TopRecoveredCases'

class App extends Component {
  state = {
    activeCountry: 'kyrgyzstan'
  }

  componentDidMount() {
    this.props.getAvailableCountries()
    this.props.getTotalCountryStatistics('kyrgyzstan')
  }

  changeActiveCountry(event) {
    this.setState({ activeCountry: event.target.value })
  }

  render() {
    return (
      <div>
        <select
          value={this.state.activeCountry}
          onChange={event => this.changeActiveCountry(event)}
        >
          {this.props.availableCountries.map(country => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            )
          })}
        </select>

        {this.props.statisticsByDays
          .slice(-5)
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

        {this.props.statisticsByDays.length && (
          <TopRecoveredCases statisticsByDays={this.props.statisticsByDays} />
        )}
      </div>
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
