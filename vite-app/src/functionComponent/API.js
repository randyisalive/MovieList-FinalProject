export function getAllUserAPI() {
  const API = "http://127.0.0.1:5000/user/getAllUser";
  return API;
}

//proxy
const PROXY = "http://127.0.0.1:5000/api/";

// mylist api
export const getAllListApi = PROXY + "mylist/get";
export const updateStatusMyListApi = PROXY + "mylist/updateStatus";
export const addListAPi = PROXY + "mylist/add";
export const deleteListApi = PROXY + "mylist/delete";

// tokens api
export const addTokenApi = PROXY + "tokens/add";

// movies api
export const getAllMovieApi = PROXY + "movies/get";
export const addMoviesApi = PROXY + "movies/add";
export const getMovieByTitleApi = PROXY + "movies/getTitle";

//auth api
export const loginApi = PROXY + "auth/login";
export const generateHashPasswordApi = PROXY + "auth/generate";
