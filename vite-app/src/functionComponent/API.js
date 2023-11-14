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
export const updateIsWatchedApi = PROXY + "mylist/update/watch";
export const deleteListApi = PROXY + "mylist/delete";

//genres api
export const getGenreByMovieIdApi = PROXY + "genres/get";
export const getMoviesByGenresApi = PROXY + "genres/getSimilar";

// tokens api
export const addTokenApi = PROXY + "tokens/add";

// profile api
export const updateProfileApi = PROXY + "profile/update";

// movies api
export const getAllMovieApi = PROXY + "movies/get";
export const addMoviesApi = PROXY + "movies/add";
export const getMovieByTitleApi = PROXY + "movies/getTitle";
export const getMovieByIdApi = PROXY + "movies/getId";

// cast api
export const getActorsByMovieApi = PROXY + "cast/getByMovieId";

//auth api
export const loginApi = PROXY + "auth/login";
export const generateHashPasswordApi = PROXY + "auth/generate";
export const getUserByIdApi = PROXY + "auth/get";
export const createNewuserApi = PROXY + "auth/create";

// community api
export const getDiscussionApi = PROXY + "community/discussion/get";
export const reviewsFormApi = PROXY + "community/discussion/form/reviews";
export const deleteDiscussionApi = PROXY + "community/discussion/delete";
export const getReviewsByMovieIdApi =
  PROXY + "community/discussion/getByMovieId";
export const getReviewsByIdApi = PROXY + "community/discussion/getReviewById";
export const getCommentsApi = PROXY + "community/discussion/get-comment";
export const addCommentReviewsApi = PROXY + "community/discussion/add-comment";
export const updateIsReplyOpenApi = PROXY + "community/discussion/isReplyOpen";
export const deleteCommentApi = PROXY + "community/discussion/comment/delete";
