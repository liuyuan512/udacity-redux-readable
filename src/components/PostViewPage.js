import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCommentsAsArr } from '../selectors'
import { fetchIdPost,fetchCommentsByPostId } from '../actions'
import PostVoteButtons from './PostVoteButtons'
import DeletePostBurron from './DeletePostBurron'
import CommentsListOrder from './CommentsListOrder'
import CommentsList from './CommentsList'
import EditPostButton from './EditPostButton'
import EditPostPage from './EditPostPage'

class PostViewPage extends Component{

    componentDidMount(){
        const {postId,getPostDetail,getComments} = this.props
        getPostDetail(postId)
        getComments(postId)
    }

    render(){
        const {post,comments,currentComment,currentPost} = this.props
        if(post===null){
            return <div>Please click HomeView first</div>
        }
        return(
            <div>
                <h1>这是PostViewPage页面</h1>
                <ul>
                    <li><h2> {post.title}</h2></li>
                    <li>Body: {post.body}</li>
                    <li>Author: {post.author}</li>
                    <li>timestamp:{post.timestamp}</li>
                    <li>category:{post.category}</li>
                    <li>Score: {post.voteScore}</li>
                    <li><PostVoteButtons postId={post.id} /></li>
                    <li><DeletePostBurron postId={post.id}/></li>
                    <li><EditPostButton postId={post.id}/></li>
                    {currentPost === post.id ? <li><EditPostPage post={post}/></li> : null}
                </ul>
                <h1>Comments:</h1>
                    <CommentsListOrder/>
                    <CommentsList comments={comments} postId={post.id} currentComment={currentComment}/>
            </div>

        )
    }
}

const mapStateToProps =(state,ownProps)=>({
    postId:ownProps.match.params.id,
    post:state.posts.posts? state.posts.posts[ownProps.match.params.id] : null,
    comments:state.comments? getCommentsAsArr(state) : null,
    currentComment:state.currentComment,
    currentPost: state.currentPost
})
const mapDispatchToProps = dispatch =>({
    getPostDetail:(id)=>dispatch(fetchIdPost(id)),
    getComments: id =>dispatch(fetchCommentsByPostId(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(PostViewPage)