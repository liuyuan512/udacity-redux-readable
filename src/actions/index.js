import * as API from '../utils/api'


export const CHANGE_POSTS_ORDER = 'CHANGE_POSTS_ORDER'
export const FETCH_CATEGORY_STARTED = 'FETCH_CATEGORY_STARTED'
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS'
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE'
export const FETCH_POST_STARTED = 'FETCH_POST_STARTED'
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS'
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE'
export const UP_VOTE_BUTTONS = 'UP_VOTE_BUTTONS'
export const DOWN_VOTE_BUTTONS = 'DOWN_VOTE_BUTTONS'
export const CREATE_POST = 'CREATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POST'
export const GET_POST_ID = 'GET_POST_ID'
export const GET_COMMENTS_BY_POST_ID = 'GET_COMMENTS_BY_POST_ID'
export const CHANGE_COMMENTS_ORDER = 'CHANGE_COMMENTS_ORDER'
export const UP_COMMENT_VOTE_BUTTONS = 'UP_COMMENT_VOTE_BUTTONS'
export const DOWN_COMMENT_VOTE_BUTTONS = 'DOWN_COMMENT_VOTE_BUTTONS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const EDIT_POST = 'EDIT_POST'

//getCategories action

export const fetchCategoryStarted = () =>({
    type: FETCH_CATEGORY_STARTED,
})

export const fetchCategorySuccess = (categories) =>({
    type:FETCH_CATEGORY_SUCCESS,
    categories
})

export const fetchCategoryFailure = (error) =>({
    type: FETCH_CATEGORY_FAILURE,
    error
})
export const getFetchCategories = () =>dispatch=>{
    dispatch(fetchCategoryStarted)

    API.fetchCategories().then(response=>{

        if (response.status !== 200) {
            throw new Error(`Fail to get Catogries response with status ${response.status}`)
        }

        response.json().then(responseJson=>{
            dispatch(fetchCategorySuccess(responseJson.categories))
        }).catch((error) =>{
            throw new Error(`Invalid Catogries json response: ${error}`)
        })
    }).catch((error) =>{
        dispatch(fetchCategoryFailure(error))
    })

}

// fetch Post from server async
export const fetchPostStarted = () =>({
    type: FETCH_POST_STARTED,
})

export const fetchPostSuccess = (posts) =>({
    type: FETCH_POST_SUCCESS,
    posts
})

export const fetchPostFailure = (error) =>({
    type: FETCH_POST_FAILURE,
    error
})

export const fetchPost = () => dispatch => {

    dispatch(fetchPostStarted())

    API.fetchPost().then((response) => {
        if (response.status !== 200) {
            throw new Error(`Fail to get response with status ${response.status}`)
        }
        response.json().then((responseJson) => {
            dispatch(fetchPostSuccess(responseJson))
        }).catch((error) => {
            throw new Error(`Invalid json response: ${error}`)
        })
    }).catch((error) => {
        dispatch(fetchPostFailure(error))
    })
}


//change postsOrder action

export const changePostsOrder = (order) =>({
    type: CHANGE_POSTS_ORDER,
    order
})

// changePostVote actions

export const increasePostVote = (id) =>({
    type:UP_VOTE_BUTTONS,
    id
})

export const fetchIncreasePostVote = id =>dispatch =>{
    API.fetchUpPostVote(id).then(response=>response.json().then(
        responseJson => {

            dispatch(increasePostVote(responseJson.id))
        }
        )
    )
}

export const decreasePostVote = (id) =>({
    type:DOWN_VOTE_BUTTONS,
    id
})

export const fetchDecreasePostVote = id =>dispatch =>{
    API.fetchDownPostVote(id).then(response=>response.json().then(
        responseJson => dispatch(decreasePostVote(responseJson.id))
        )
    )
}
// deletePost actions

export const deletePost = (id) =>({
    type:DELETE_POST,
    id
})

export const fetchDeletePost = id => dispatch =>{
    API.fetchDeletePost(id).then(response=>dispatch(deletePost(id)) )
}

//GET catoryPosts actions

export const getCategoryPosts = posts =>({
    type:GET_CATEGORY_POSTS,
    posts
})

export const fetchGetCatoryPosts = category =>dispatch =>{
    API.fetchGetCategoryPosts(category).then(response=>response.json().then(
        responseJson=>dispatch(getCategoryPosts(responseJson))
    ))
}

// add post actions


export const fetchAddPost = (post) =>dispatch =>{
    API.fetchAddPost(post).then(respone =>respone.json().then(
        responeJson=>{
            dispatch(fetchPost())
        }
    ))
}

// get ID post detail actions

export const getPostById = (post) =>({
    type:GET_POST_ID,
    post
})

export const fetchIdPost = (id)=>dispacth=>{
    API.fetchGetPostByID(id).then(respone =>respone.json().then(
        responeJson=>{
            dispacth(getPostById(responeJson))
        }
    ))
}

// edite post actions

export const editPost = (id) =>({
    type:EDIT_POST,
    id
})

export const fetchUpdatePost = (id,post) =>dispatch =>{
    API.fetchUpdatePost(id,post).then(response => response.json().then(
        responseJson =>{
            dispatch(fetchIdPost(id))
        }
    ))
}




//comments actions
//get comments by id actions

export const getCommentByPostId = comments => ({
    type:GET_COMMENTS_BY_POST_ID,
    comments
})

export const fetchCommentsByPostId = id =>dispatch => {
    API.fetchPostCommentById(id).then(response =>response.json().then(
        responseJson => {
            dispatch(getCommentByPostId(responseJson))
        }
    ))
}

// change comments order actions

export const changeCommentsOrder = order =>({
    type:CHANGE_COMMENTS_ORDER,
    order
})

//change comment vote actions
export const increaseCommentVote = id =>({
    type:UP_COMMENT_VOTE_BUTTONS,
    id
})

export const fetchAddCommentVote = (id) =>dispatch=>{
    API.fetchUpCommentVote(id).then((response) => response.json().then(
        responseJson =>{
            dispatch(increaseCommentVote(responseJson.id))
        }
    ))
}

export const decreaseCommentVote = id =>({
    type:DOWN_COMMENT_VOTE_BUTTONS,
    id
})

export const fetchDecreaseCommentVote = (id) =>dispatch=>{
    API.fetchDownCommentVote(id).then(response =>response.json().then(
        responseJson=>{
            dispatch(decreaseCommentVote(responseJson.id))
        }
    ))
}

// deletePost actions

export const deleteComment = (id) =>({
    type:DELETE_COMMENT,
    id
})

export const fetchDeleteComment = id => dispatch =>{
    API.fetchDeleteComment(id).then(response=>dispatch(deleteComment(id)) )
}


// add comment actions


export const fetchAddComment = (comment) =>dispatch =>{
    API.fetchAddComment(comment).then(respone =>respone.json().then(
        responeJson=>{
            dispatch(fetchCommentsByPostId(comment.parentId))
        }
    ))
}

// Edit comment actions

export const editComment = (id) =>({
    type:EDIT_COMMENT,
    id
})

export const updateComment = (comment) =>({
    type:UPDATE_COMMENT,
    comment
})

export const getUpdateComment = (id) =>dispatch =>{
    API.getUpdateComment(id).then(response => response.json().then(
        responseJson => {
            dispatch(updateComment(responseJson))
        }
    ))
}

export const fetchUpdateComment = (id,comment) =>dispatch => {
    API.fetchUpdateComment(id,comment).then(reponse => reponse.json().then(reponseJson=>{
        dispatch(getUpdateComment(id))
    }))
}

