import { createSelector } from "reselect"

export const usersSelectors = {
    getUsers(state) {
        return state.usersPage.users
    },
    getPageSize(state) {
        return state.usersPage.pageSize
    },
    getTotalUsersCount(state) {
        return state.usersPage.totalUsersCount
    },
    getCurrentPage(state) {
        return state.usersPage.currentPage
    },
    getIsFetching(state) {
        return state.usersPage.isFetching
    },
    getCurrentFollowedUser(state) {
        return state.usersPage.currentFollowedUser
    },
}

export const getUsersSuper = createSelector(usersSelectors.getUsers, (users) => {
    return users.filter(user => true)
})