import React from 'react';
import {connect} from 'react-redux'
import * as axios from 'axios'
import {withRouter} from 'react-router-dom'
import Profile from './profile'
import {SetUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {
  // alert(this.props);

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId) {userId = 2}
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
        this.props.SetUserProfile(response.data)
      })}

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} /> //если импортнули еще где-то и передали дополнительные ...props
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

const ComponentWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {SetUserProfile})(ComponentWithRouter)
