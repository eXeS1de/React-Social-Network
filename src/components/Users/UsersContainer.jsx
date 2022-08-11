import { connect } from "react-redux"
import { followThunk, getUsers, setCurrentPage, setUsers, setUsersCount, toggleIsFetching, unfollowThunk } from "../../redux/reducers/usersReducer"
import Users from "./Users"
import { useEffect } from "react";
import Preloader from "../common/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { usersSelectors } from "../../redux/selectors/usersSelectors";

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
        users: usersSelectors.getUsers(state),
        pageSize: usersSelectors.getPageSize(state),
        totalUsersCount: usersSelectors.getTotalUsersCount(state),
        currentPage: usersSelectors.getCurrentPage(state),
        isFetching: usersSelectors.getIsFetching(state),
        currentFollowedUser: usersSelectors.getCurrentFollowedUser(state),
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
