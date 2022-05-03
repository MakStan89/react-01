import { connect } from 'react-redux';
import { follow,  unfollow, setCurrentPage, getUsers } from '../../redux/users-reducer';
import Users from './Users';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
			{this.props.isLoading ? <Preloader /> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			unfollow={this.props.unfollow}
			follow={this.props.follow}
			users={this.props.users}
			onPageChanged={this.onPageChanged} 
			isFollowing={this.props.isFollowing}
			/>
			</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isLoading: state.usersPage.isLoading,
		isFollowing: state.usersPage.isFollowing
	}
}

export default compose(
	connect(mapStateToProps, { follow, unfollow, getUsers, setCurrentPage }),
	withAuthRedirect
)(UsersContainer)