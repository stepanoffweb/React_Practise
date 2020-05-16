import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Profile from './profile'
import {getUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {
  // alert(this.props);

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId)
    // let userId = this.props.match.params.userId
    // if(!userId) {userId = 2}
    // this.props.getUserProfile(userId = 2).then(response => {
    //     this.props.SetUserProfile(response.data)
    //   })
  }

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

export default connect(mapStateToProps, {getUserProfile})(ComponentWithRouter)
