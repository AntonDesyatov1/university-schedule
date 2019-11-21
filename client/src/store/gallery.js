import { ACTIONS } from "../constants/constants";
import { fetchGalleryImagesRequest, postCommentRequest } from "../api";
import { setLoadingFalseAction, setLoadingTrueAction } from "./main";
const initialState = {
  images: null,
  comments: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTIONS.FETCH_IMAGES_FOR_GALLERY:
      return {
        ...state,
        images: action.payload.data
      };

    case ACTIONS.FETCH_COMMENTS_FOR_GALLERY:
      return {
        ...state,
        images: {
          comments: action.payload.data
        }
      };
  }
  return state;
}

export const setGalleryImagesAction = data => ({
  type: ACTIONS.FETCH_IMAGES_FOR_GALLERY,
  payload: {
    data
  }
});

export const fetchGalleryImagesAction = () => async dispatch => {
  dispatch(setLoadingTrueAction());
  try {
    const data = await fetchGalleryImagesRequest();
    dispatch(setGalleryImagesAction(data));
    dispatch(setLoadingFalseAction());
  } catch (e) {}
};

export const postCommentAction = (comment, name) => async dispatch => {
  dispatch(setLoadingTrueAction());
  try {
    const data = await postCommentRequest(comment, name);
    dispatch(setGalleryImagesAction(data));
    dispatch(setLoadingFalseAction());
  } catch (e) {}
};
