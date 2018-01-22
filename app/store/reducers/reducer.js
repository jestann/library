// initial reducer function
// import * as types from './actionTypes';

const initialState = {
  state: 'idle',
  library: {
    alpha: { name: 'alpha' },
    beta: { name: 'beta' }
  },
  currentBook: 'alpha',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'PICK_BOOK':
      console.log("You chose a book!")
      return { ...state, currentBook: action.book }
    case 'SHELVE_BOOK':
      console.log("You put back your book.")
      return { ...state, currentBook: null }
    default:
      return state
  }
}

/* example below ... two methods of state return

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.ARTICLES_FETCHED:
      return {
        ...state, 
        articlesById: action.articlesById
      };
    case types.OTHER:
      return Object.assign({}, state, {
        angular: state.angular + 1
      };
    default:
      return state;
  }
}

*/