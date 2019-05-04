import axios from 'axios'

export const getCollegeThunk = (searchString) => {
  return(dispatch) => {
    dispatch(userLoading());

    searchString.length >= 2 ?
      axios.get('http://localhost:3001/api/v1/colleges/search/' + searchString)
      .then((response) => {
          console.log(response)
          dispatch(userSuccess(response))
      })
      .catch((err) => {
        console.log(err)
          dispatch(userError(err))
      })
    : dispatch(userSuccess(''))
  }
}

const userSuccess = (data) => {
  return {
      type: "USER_SUCCESS",
      data: data
  }
}

const userError = (err) => {
  return {
      type: "USER_ERROR",
      err: err
  }
}

const userLoading = () => {
  return {
    type: "USER_LOADING"
  }
}