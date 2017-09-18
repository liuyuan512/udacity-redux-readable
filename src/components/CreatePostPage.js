import React from 'react'
import { connect } from 'react-redux'
import {fetchAddPost } from '../actions'
import uuid from 'uuid/v4';


const CreatePostPage = (props) => {
    let inputTitle, inputAuthor, inputBody, inputCategory
    return (
        <form onSubmit={(event)=>{
            event.preventDefault()
            props.createPost({
                title:inputTitle.value,
                body:inputBody.value,
                author:inputAuthor.value,
                category:inputCategory.value,
                id:uuid(),
                timestamp:Date.now()
            })
            console.log('createPostPage的props================',props)
        }}>
            <span>title</span>
            <input type='text' ref={input => inputTitle = input}/>

            <span>author</span>
            <input type='text' ref={input => inputAuthor = input}/>

            <span>category</span>
            <select ref={input => inputCategory = input}>
                {props.categories && props.categories.map(category => <option key={category.name}>{category.name}</option>)}
            </select>

            <span>body</span>
            <input type='text' ref={input => inputBody = input}/>

            <hr/>
            <input type='submit' value='Create Post'/>
        </form>
    )
}

const mapStateToProps = (state) =>({
    categories:state.categories.categories
})

const mapDispatchToProps = (dispatch) => ({
    createPost:(data) => dispatch(fetchAddPost(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(CreatePostPage)
