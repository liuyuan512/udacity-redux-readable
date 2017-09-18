import React from 'react'
import { editPost } from '../actions'
import { connect } from 'react-redux'

const EditPostButton = ({onEditPost,postId}) =>{
    return(
        <div>
            <button onClick={()=>onEditPost(postId)}>Edit</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    onEditPost: (id) =>dispatch(editPost(id))
})

export default connect(null,mapDispatchToProps)(EditPostButton)