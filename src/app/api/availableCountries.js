import { queryGet } from './apiConfig'

export default {
  getCountries() {
    return queryGet('/countries')
  }
}
