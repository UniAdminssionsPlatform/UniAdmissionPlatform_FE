import bookmarkReducer from './bookmarks/bookmarksSlice';
import commentLikesReducer from './commentLikes/commentLikes';
import darkmodeReducer from './darkmode/darkmode';
import mediaRunningReducer from './mediaRunning/mediaRunning';
import pagesReducer from './pages/pages';
import postLikesReducer from './postLikes/postLikes';

const rootReducers = {
  bookmark: bookmarkReducer,
  postLike: postLikesReducer,
  darkmode: darkmodeReducer,
  commentLikes: commentLikesReducer,
  pages: pagesReducer,
  mediaRunning: mediaRunningReducer
};

export default rootReducers;
