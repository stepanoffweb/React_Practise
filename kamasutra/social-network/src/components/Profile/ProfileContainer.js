import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import Profile from './profile'
import {getUserProfile} from '../../redux/profile-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
  // alert(this.props);

  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId)
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} /> //если импортнули еще где-то и передали дополнительные ...props
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
  )(ProfileContainer)
