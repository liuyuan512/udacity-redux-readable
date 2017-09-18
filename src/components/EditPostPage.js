import React from 'react'
import {fetchUpdatePost } from '../actions'
import { connect } from 'react-redux'

const EditPostPage = ({post,onUpdatePost}) =>{
    let inputBody,inputTitle
    return(
        <form
            onSubmit={
                event=> {
                    event.preventDefault()
                    onUpdatePost(post.id,{
                        title:inputTitle.value,
                        body:inputBody.value
                    })
                }
            }
        >

            <sapn>TiTle:</sapn>
            <textarea rows="3" ref={input => inputTitle = input} defaultValue={post.title}></textarea>

            <sapn>Body:</sapn>
            <textarea rows="5" ref={input => inputBody = input} defaultValue={post.body}></textarea>

            <span>------</span>
            <input type="submit" value="Update Post" />
        </form>
    )
}

const mapDispatchToProps = (dispatch) =>({
    onUpdatePost:(id,post)=>dispatch(fetchUpdatePost(id,post))
})

export default connect(null,mapDispatchToProps)(EditPostPage)