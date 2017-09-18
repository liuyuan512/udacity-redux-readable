import React from 'react'
import { fetchIncreasePostVote,fetchDecreasePostVote } from '../actions'
import { connect } from 'react-redux'

const PostVoteButtons = ({increasePostVote,decreasePostVote,postId}) =>{
    return(
        <div>
            <button onClick={()=>increasePostVote(postId)}>Up</button>
            <button onClick={()=>decreasePostVote(postId)}>Down</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    increasePostVote: (id) =>dispatch(fetchIncreasePostVote(id)),
    decreasePostVote: (id) =>dispatch(fetchDecreasePostVote(id))
})

export default connect(null,mapDispatchToProps)(PostVoteButtons)