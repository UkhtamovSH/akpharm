import { getNotAuthInstance } from "../helpers/httpClient"

export const setPartners = () => {
  return dispatch => {
    getNotAuthInstance().get('/api/v1/review-list/?lan=uz')
      .then(res => {
        dispatch({
          type: 'SET_PARTNERS',
          payload: res.data
        });
      })
      .catch(error => { })
  }
}