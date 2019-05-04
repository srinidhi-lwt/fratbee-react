export const SearchCollegeReducer = (data = '', action) => {
  switch(action.type) {

    case "USER_SUCCESS" :
      return action.data

    default: return data;
  }
}

   