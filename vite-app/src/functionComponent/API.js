export function getAllUserAPI() {
  const API = "http://127.0.0.1:5000/user/getAllUser";
  return API;
}

//proxy
const PROXY = "http://127.0.0.1:5000/api/";

// home api
export const getLatestInMyListApi = PROXY + "home/newest-movies-in-list";
export const getRandomMoviesApi = PROXY + "home/random-movies";

// mylist api
export const getAllListApi = PROXY + "mylist/get";
export const updateStatusMyListApi = PROXY + "mylist/updateStatus";
export const addListAPi = PROXY + "mylist/add";
export const deleteListApi = PROXY + "mylist/delete";
export const viewListApi = PROXY + "mylist/get/byId";
export const updateRatingApi = PROXY + "mylist/update_rating";
export const getRatingApi = PROXY + "mylist/get_rating";
export const updateMovieStatusMyListApi = PROXY + "mylist/updateStatus";
export const getStatusMoveMylistApi = PROXY + "mylist/getStatus";
export const getTotalMyListApi = PROXY + "mylist/total";

//genres api
export const getGenreByMovieIdApi = PROXY + "genres/get";
export const getMoviesByGenresApi = PROXY + "genres/getSimilar";

// tokens api
export const addTokenApi = PROXY + "tokens/add";
export const getTokensById = PROXY + "tokens/getById";
export const getTokens = PROXY + "tokens/get";

// profile api
export const updateProfileApi = PROXY + "profile/update";
export const getCountDataInListApi = PROXY + "profile/total";
export const getTotalRatingApi = PROXY + "profile/total_rating";

// movies api
export const getAllMovieApi = PROXY + "movies/get";
export const addMoviesApi = PROXY + "movies/add";
export const getMovieByTitleApi = PROXY + "movies/getTitle";
export const getMovieByIdApi = PROXY + "movies/getId";

// cast api
export const getActorsByMovieApi = PROXY + "cast/getByMovieId";

// status api
export const getALlStatusApi = PROXY + "status/get";

//auth api
export const loginApi = PROXY + "auth/login";
export const generateHashPasswordApi = PROXY + "auth/generate";
export const getUserByIdApi = PROXY + "auth/get";
export const createNewuserApi = PROXY + "auth/create";

// friends api
export const getRequestFriendsApi = PROXY + "friends/get-request";
export const getSingleFriendApi = PROXY + "friends/getSingle";
export const getAllFriendsApi = PROXY + "friends/get-all";
export const sendInviteFriendsApi = PROXY + "friends/request-friend";
export const checkInvitesApi = PROXY + "friends/check-friends";
export const acceptInvitesApi = PROXY + "friends/accept-request";

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
export const getRecentApi = PROXY + "community/discussion/get-recent";
export const getTotalCommentsApi =
  PROXY + "community/discussion/get-total-comments";
