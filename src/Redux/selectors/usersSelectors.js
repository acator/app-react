
export const getUsers = (state) => {
    return state.navigation.friend
}
export const getPageSize = (state) => {
    return state.navigation.pageSize
}
export const getTotalCount = (state) => {
    return state.navigation.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.navigation.currentPage
}
export const getIsFetching = (state) => {
    return state.navigation.isFetching
}
export const getToggleFollowing = (state) => {
    return state.navigation.toggleFollowing
}
