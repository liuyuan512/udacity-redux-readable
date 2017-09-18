import React from 'react'
import { fetchDeleteComment } from '../actions'
import { connect } from 'react-redux'

const DeleteCommentButton = ({deleteCommentVote,commentId}) =>{
    return(
        <div>
            <button onClick={()=>deleteCommentVote(commentId)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    deleteCommentVote: (id) =>dispatch(fetchDeleteComment(id))
})

export default connect(null,mapDispatchToProps)(DeleteCommentButton)