import React from 'react'
import { editComment } from '../actions'
import { connect } from 'react-redux'

const EditCommentButton = ({onEditComment,commentId}) =>{
    return(
        <div>
            <button onClick={()=>onEditComment(commentId)}>Edit</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    onEditComment: (id) =>dispatch(editComment(id))
})

export default connect(null,mapDispatchToProps)(EditCommentButton)