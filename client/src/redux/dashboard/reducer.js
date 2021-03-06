import initialState from "./state";
import {
  SET_TRACKS_INFO,
  SET_PLAYLISTS_INFO,
  SET_ALBUMS_INFO,
  SET_TRACKS_BY_USER,
} from "./types";

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS_INFO:
      return {
        ...state,
        tracks: action.payload,
      };
    case SET_PLAYLISTS_INFO:
      return {
        ...state,
        playlists: action.payload,
      };
    case SET_ALBUMS_INFO:
      return {
        ...state,
        albums: action.payload,
      };
    case SET_TRACKS_BY_USER:
      return {
        ...state,
        tracksByUser: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
