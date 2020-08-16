import React, { Component } from 'react'
import { connect } from 'react-redux'

class ErrorBoundary extends Component {
  render() {
    const { availableCountriesError, statisticsByDaysError } = this.props
    const hasError = availableCountriesError || statisticsByDaysError

    const errorIndicator = (
      <div className='error-boundary'>
        <div className='error-boundary__text'>Something went wrong :(</div>
      </div>
    )

    if (hasError) {
      return errorIndicator
    }

    return this.props.children
  }
}

const mapStateToProps = state => ({
  availableCountriesError: state.availableCountries.error,
  statisticsByDaysError: state.countryStatistics.error
})

export default connect(mapStateToProps, null)(ErrorBoundary)
