import React from 'react'
import { connect } from 'react-redux'
import {fetchAddComment } from '../actions'
import uuid from 'uuid/v4';


const CreateCommentPage = (props) => {
    let  inputBody,inputAuthor
    const {commentParentId,createComment } = props
    return (
        <form onSubmit={(event)=>{
            event.preventDefault()
            createComment({
                author:inputAuthor.value,
                body:inputBody.value,
                parentId:commentParentId,
                id:uuid(),
                timestamp:Date.now()
            })
            console.log('createCommentPage的props!!!!!!!!!!!!!!!!!!================',commentParentId)
        }}>

            <span>author</span>
            <input type='text' ref={input => inputAuthor = input}/>

            <span>body</span>
            <input type='text' ref={input => inputBody = input}/>

            <input type='submit' value='Create Comment'/>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => ({
    createComment:(data) => dispatch(fetchAddComment(data))
})

export default connect(null,mapDispatchToProps)(CreateCommentPage)
