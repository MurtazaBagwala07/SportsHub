export const isFollowing = (arr, username) => {
    return arr?.some((ele) => ele.username === username)
}