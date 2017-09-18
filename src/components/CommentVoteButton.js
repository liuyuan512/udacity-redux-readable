import React from 'react'
import { fetchAddCommentVote,fetchDecreaseCommentVote } from '../actions'
import { connect } from 'react-redux'

const CommentVoteButtons = ({increaseCommentVote,decreaseCommentVote,commentId}) =>{
    return(
        <div>
            <button onClick={()=>increaseCommentVote(commentId)}>Up</button>
            <button onClick={()=>decreaseCommentVote(commentId)}>Down</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    increaseCommentVote: (id) =>dispatch(fetchAddCommentVote(id)),
    decreaseCommentVote: (id) =>dispatch(fetchDecreaseCommentVote(id))
})

export default connect(null,mapDispatchToProps)(CommentVoteButtons)