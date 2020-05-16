import {connect} from 'react-redux'
import MyPosts from './MyPosts'

import {createActionAddPost, createActionShowLetters, createActionAddLike} from '../../../redux/profile-reducer'


  const mapStateToProps = (state) => {
    return {
      newPostText: state.profilePage.newPostText,
      posts: state.profilePage.posts
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      callDispatchShowLetters: (text) => dispatch(createActionShowLetters(text)),
      callDispatchAddPost: (id) => dispatch(createActionAddPost(id)),
      callDispatchAddLike: (id, likeCount) => dispatch(createActionAddLike(id, likeCount))
    }
  }

const MyPostsContainer =  connect(mapStateToProps, mapDispatchToProps)(MyPosts)
// console.log(MyPostsContainer);
export default MyPostsContainer
