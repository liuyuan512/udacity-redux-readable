import React from 'react'
import {fetchUpdateComment } from '../actions'
import { connect } from 'react-redux'

const EditComments = ({comment,onUpdateComment}) =>{
    let inputBody
    return(
        <form
            onSubmit={
                event=> {
                    event.preventDefault()
                    onUpdateComment(comment.id,{body:inputBody.value})
                }
            }
        >
            <sapn>Body:</sapn>
            <textarea rows="5" ref={input => inputBody = input} defaultValue={comment.body}></textarea>

            <span>------</span>
            <input type="submit" value="Update Comment" />
        </form>
    )
}

const mapDispatchToProps = (dispatch) =>({
    onUpdateComment:(id,comment)=>dispatch(fetchUpdateComment(id,comment))
})

export default connect(null,mapDispatchToProps)(EditComments)