import React from 'react'
import { fetchDeletePost } from '../actions'
import { connect } from 'react-redux'

const DeletePostBurron = ({deletePostVote,postId}) =>{
    return(
        <div>
            <button onClick={()=>deletePostVote(postId)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    deletePostVote: (id) =>dispatch(fetchDeletePost(id))
})

export default connect(null,mapDispatchToProps)(DeletePostBurron)