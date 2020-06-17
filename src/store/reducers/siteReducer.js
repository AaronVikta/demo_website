const defaultState ={
  posts:[],
  postCount: 0,
  post:{}
}

const site = (state = defaultState, action) => {
    switch(action.type){
      case 'GOT_SITE_POST':
        return {
          ...state,
          posts:action.skip?
          state.posts.concat(action.payload)
          :action.payload
        }

        case 'GOT_POST_COUNT':
        return {
          ...state,
          postCount: action.payload
        }
        case 'SET_DEFAULT_POST_DATA':
          return {
            ...state,
            post:action.payload
          }
          case 'SET_FULL_POST_DATA':
          return {
            ...state,
            post: {
              ...state.post,
              ...action.payload
            }
          }
      default:
        return state
    }
}

export default site;
