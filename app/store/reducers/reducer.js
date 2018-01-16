/* reducer function example

// e.g. below

const initialState = {
  angular: 0,
  react: 0,
  vuejs: 0
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE_ANGULAR':
      console.log("Your choice is Angular!")
      return Object.assign({}, state, {
        angular: state.angular + 1
      })
    case 'VOTE_REACT':
      console.log("Your choice is React!")
      return Object.assign({}, state, {
        react: state.react + 1
      })
    case 'VOTE_VUEJS':
      console.log("Your choice is Vue.js")
      return Object.assign({}, state, {
        vuejs: state.vuejs + 1
      })
    default:
      return state
  }
}

// or below ...

import * as types from './actionTypes';

const initialState = {
  articlesById: undefined,
}

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return {
        ...state, 
        articlesById: action.articlesById
      };
    default:
      return state;
  }
}


*/