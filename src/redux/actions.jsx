import { getNotAuthInstance } from "../helpers/httpClient"
import { getLanguage } from "../helpers/language"

export const setPartners = () => {
  const lan = getLanguage()
  return dispatch => {
    getNotAuthInstance().get(`/api/v1/review-list/?lan=${lan}`)
      .then(res => {
        dispatch({
          type: 'SET_PARTNERS',
          payload: res.data
        });
      })
      .catch(error => { })
  }
}