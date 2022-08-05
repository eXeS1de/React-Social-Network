import { connect } from "react-redux"
import { followThunk, getUsers, setCurrentPage, setUsers, setUsersCount, toggleIsFetching, unfollowThunk } from "../../redux/reducers/usersReducer"
import Users from "./Users"
import { useEffect } from "react";
import Preloader from "../common/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    },[props.currentPage])

    return <>
        {props.isFetching 
            ? <Preloader/>
            : <Users {...props} />
        }
    </>
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        currentFollowedUser: state.usersPage.currentFollowedUser,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setUsersCount: (totalCount) => {
//             dispatch(setUsersCountAC(totalCount))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {followThunk,unfollowThunk,setUsers,setUsersCount,setCurrentPage,toggleIsFetching,getUsers}),
    withAuthRedirect
)(UsersContainer)
