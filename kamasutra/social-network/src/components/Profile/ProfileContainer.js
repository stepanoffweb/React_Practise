import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import Profile from './profile'
import {SetUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {
  componentDidMount() {axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
        this.props.SetUserProfile(response.data)
// debugger
      })}

  render() {
    // debugger

    return (
      <Profile {...this.props} profile={this.props.profile} /> //если импортнули еще где-то и передали дополнительные ...props
    );
  }
}
// console.log('ProfileContainer: ' , new SetUserProfileileContainer());
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})



export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer)
