import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class ErrorBoundary extends Component {
  render() {
    const { availableCountriesError, statisticsByDaysError } = this.props
    const hasError = availableCountriesError || statisticsByDaysError

    const errorIndicator = (
      <div className='error-boundary'>
        <p className='error-boundary__text'>Something went wrong :(</p>
      </div>
    )

    if (hasError) {
      return errorIndicator
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  availableCountriesError: PropTypes.string,
  statisticsByDaysError: PropTypes.string
}

const mapStateToProps = state => ({
  availableCountriesError: state.availableCountries.error,
  statisticsByDaysError: state.countryStatistics.error
})

export default connect(mapStateToProps, null)(ErrorBoundary)
