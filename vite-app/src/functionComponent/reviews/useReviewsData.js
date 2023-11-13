import { useEffect, useRef, useState } from "react";
import { userIdCookie } from "../../Cookies";
import getReviewsNewestByMovieId from "./getReviewsByMovieId";
import { useParams } from "react-router-dom";
import getReviewsById from "./getReviewsById";
import addCommentsReviews from "./addCommentsReviews";
import getCommentReviews from "./getCommentReviews";
import updateIsReplyOpen from "./updateIsReplyOpen";
import deleteComment from "./deleteComment";

function useReviewsData() {
  const [comments, setComments] = useState([]);

  const [form, setForm] = useState({});
  const [commentForm, setCommentForm] = useState({});
  const [visible, setVisible] = useState(false);
  const toastRefDelete = useRef(null);
  const toastRefSuccess = useRef(null);

  function showDeleteToast() {
    toastRefDelete.current.show({
      severity: "error",
      summary: "Info",
      detail: "Comment Deleted!",
    });
  }
  function showSuccessToast() {
    toastRefSuccess.current.show({
      severity: "success",
      summary: "Info",
      detail: "Comment Added!",
    });
  }

  function HandleForm(e, movie_id) {
    const user_id = userIdCookie;
    setForm(() => ({
      ...form,
      [e.target.name]: e.target.value,
      movie_id: movie_id,
      user_id: user_id,
    }));
    console.log(form);
  }

  function GetReviewsNewestByMovieId(movie_id) {
    const [newest, setNewest] = useState();
    useEffect(() => {
      getReviewsNewestByMovieId(movie_id).then((data) => {
        setNewest(data);
      });
    }, []);

    return newest;
  }

  function GetReviewsById(id) {
    const [reviews, setReviews] = useState({});
    useEffect(() => {
      getReviewsById(id).then((data) => {
        setReviews(data);
      });
    }, []);
    return reviews;
  }

  // comment function
  function GetComment(review_id) {
    useEffect(() => {
      getCommentReviews(review_id).then((data) => {
        setComments(data);
      });
    }, []);
    return comments;
  }

  function AddComment(body, review_id, user_id) {
    addCommentsReviews(body, review_id, user_id).then((data) => {
      console.log(data);
      setVisible(false);
      getCommentReviews(review_id).then((data) => {
        setComments(data);
        showSuccessToast();
      });
    });
  }

  function openReply(id, isReplyOpen, review_id) {
    updateIsReplyOpen(id, isReplyOpen).then((data) => {
      console.log(data);
      getCommentReviews(review_id).then((data) => {
        setComments(data);
      });
    });
  }

  function handleComment(e) {
    setCommentForm(() => ({ ...form, [e.target.name]: e.target.value }));
    console.log(commentForm);
  }

  function deleteCommentHandler(id, review_id) {
    deleteComment(id).then((data) => {
      console.log(data);
      getCommentReviews(review_id).then((data) => {
        setComments(data);
        showDeleteToast();
      });
    });
  }

  return {
    HandleForm,
    form,
    GetReviewsNewestByMovieId,
    GetReviewsById,
    AddComment,
    GetComment,
    handleComment,
    commentForm,
    openReply,
    visible,
    setVisible,
    toastRefDelete,
    toastRefSuccess,
    showDeleteToast,
    showSuccessToast,
    deleteCommentHandler,
  };
}

export default useReviewsData;
