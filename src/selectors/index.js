export const getHandledPosts = state => Object.values(state.posts.posts)
    .filter(post => post.deleted === false)
    .sort((a, b) => a[state.postsOrder] < b[state.postsOrder])

export const getPostsByCategory = (state,category) =>getHandledPosts(state)
    .filter(post => post.category === category)

export const getCommentsAsArr = state =>Object.values(state.comments)
    .filter(comment => comment.parentDeleted === false)
    .filter(comment => comment.deleted === false)
    .sort((a, b) => a[state.commentsOrder] < b[state.commentsOrder])