import * as Status from '../status'
import {
    FETCH_POST_STARTED,
    FETCH_POST_SUCCESS,
    FETCH_POST_FAILURE,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_STARTED,
    FETCH_CATEGORY_FAILURE,
    CHANGE_POSTS_ORDER,
    UP_VOTE_BUTTONS,
    DOWN_VOTE_BUTTONS,
    DELETE_POST,
    GET_CATEGORY_POSTS,
    GET_POST_ID,
    GET_COMMENTS_BY_POST_ID,
    CHANGE_COMMENTS_ORDER,
    UP_COMMENT_VOTE_BUTTONS,
    DOWN_COMMENT_VOTE_BUTTONS,
    DELETE_COMMENT,
    EDIT_COMMENT,
    UPDATE_COMMENT,
    EDIT_POST,
} from '../actions'

import { arrToObj } from '../utils/helper'

import { combineReducers } from 'redux'

const categories = (state={status:Status.LODAING},action) =>{
    switch (action.type){
        case FETCH_CATEGORY_STARTED:
            return{
                status:Status.LODAING
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                status:Status.SUCCESS,
                categories:action.categories
            }
        case FETCH_CATEGORY_FAILURE:
            return{
                status:Status.FAILURE
            }
        default:
            return state
    }
}

const posts = (state= {status: Status.LODAING},action) => {

    switch(action.type){
        case FETCH_POST_STARTED:
            return {
                status: Status.LODAING
            }
        case FETCH_POST_SUCCESS:
            return {
                status: Status.SUCCESS,
                posts: arrToObj(action.posts)
            }
        case FETCH_POST_FAILURE:
            return{
                status: Status.FAILURE
            }
        case UP_VOTE_BUTTONS:
            return {
                ...state,
                posts:{
                    ...state.posts,
                    [action.id]:{
                        ...state.posts[action.id],
                        voteScore:state.posts[action.id].voteScore+1
                    }
                }
            }
        case DOWN_VOTE_BUTTONS:
            return {
                ...state,
                posts:{
                    ...state.posts,
                    [action.id]:{
                        ...state.posts[action.id],
                        voteScore:state.posts[action.id].voteScore-1
                    }
                }
            }
        case DELETE_POST:
            return {
                ...state,
                posts:{
                    ...state.posts,
                    [action.id]:{
                        ...state.posts[action.id],
                        deleted:true
                    }
                }
            }
        case GET_POST_ID:
            return{
                ...state,
                posts:{
                    ...state.posts,
                    [action.post.id]:action.post
                    }
                }

        default:
            return state
    }
}

const postsOrder = (state='voteScore',action) =>{
    switch(action.type){
        case CHANGE_POSTS_ORDER:
            return action.order
        default:
            return state
    }
}

const comments = (state={},action)=>{
    switch(action.type){
        case GET_COMMENTS_BY_POST_ID:
            return arrToObj(action.comments)
        case UP_COMMENT_VOTE_BUTTONS:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    voteScore:state[action.id].voteScore+1
                }
            }
        case DOWN_COMMENT_VOTE_BUTTONS:
            return{
                ...state,
                [action.id]:{
                    ...state[action.id],
                    voteScore:state[action.id].voteScore - 1
                }
            }
        case DELETE_COMMENT:
            return{
                ...state,
                [action.id]: {
                    ...state[action.id],
                    deleted: true
                }
            }
        case UPDATE_COMMENT:
            return{
                ...state,
                [action.comment.id]:action.comment
            }
        default:
            return state
    }
}

const commentsOrder = (state='voteScore',action) =>{
    switch(action.type){
        case CHANGE_COMMENTS_ORDER:
            return action.order
        default:
            return state
    }
}
const categoryPosts = (state={},action) => {
    switch(action.type){
        case GET_CATEGORY_POSTS:
            return action.posts
        default:
            return state
    }
}

const currentComment = (state={},action) =>{
    switch(action.type){
        case EDIT_COMMENT:
            return action.id
        default:
            return state
    }
}

const currentPost = (state={},action) =>{
    switch(action.type){
        case EDIT_POST:
            return action.id
        default:
            return state
    }
}




export default combineReducers({
    categories,
    posts,
    postsOrder,
    categoryPosts,
    comments,
    commentsOrder,
    currentPost,
    currentComment
})