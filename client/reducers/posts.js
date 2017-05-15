// reducer takes in 2 things:
// 1. the action(information about what happend)
// 2. copy of current state

// ES6 default parameters allow us to set arg inside function
function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log("incr likes!")
    const i = action.index;
    return [
      ...state.slice(0,i), // before the one we are updating
      { ...state[i], likes: state[i].likes + 1}, 
      ...state.slice(i+1) // after we update
    ]
    default: 
      return state;
  }
}

export default posts;