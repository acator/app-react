import navigationReduce, { toggleIsFetching } from "./navigationRaduce"

let state = { friend: [
],
    totalUsersCount: 0,
        pageSize: 5,
            currentPage: 1,
                isFetching: false,
                    toggleFollowing: []
}
it("User enter", () => {

    let action = toggleIsFetching(true)
    let statePost = navigationReduce(state, action)

    expect(statePost.isFetching).toBe(true)

})