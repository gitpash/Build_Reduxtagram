function postComments(state = [], action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case "REMOVE_COMMENT":
      return [
        // from start to the deleted one
        ...state.slice(0, action.i),
        // then add everyting after deleted to the end
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state,
      // overwrite this post with the new one
      [action.postId]: postComments(state[action.postId], action)
    };
  }

  return state;
}

export default comments;
