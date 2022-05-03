import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : 23086;
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}
	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status
	}
};

const MatchUrlProfileContainer = (props) => {
	const match = useMatch('/profile/:userId/');
	return <ProfileContainer {...props} match={match} />;
};

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
)(MatchUrlProfileContainer);
