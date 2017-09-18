import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import * as Status from '../status'
import { getHandledPosts } from '../selectors'
import { Link } from 'react-router-dom'
import PostVoteButtons from './PostVoteButtons'
import DeletePostBurron from './DeletePostBurron'

class PostsListPage extends Component{
    componentDidMount(){
        this.props.getPosts()
    }

    render(){

        const {status,posts} = this.props
        switch(status){
            case Status.LODAING:
                return <div>posts information from server is loading</div>
            case Status.SUCCESS:
                return (
                    <ol>
                        {posts.map(post => (
                            <li key={post.id}>
                                <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
                                <ul>
                                    <li>Score: {post.voteScore}</li>
                                    <li><PostVoteButtons postId={post.id} /></li>
                                    <li><DeletePostBurron postId={post.id}/></li>
                                </ul>
                            </li>
                        ))}
                    </ol>
                );
            case Status.FAILURE:
                return <div> posts information from server loads fails</div>
            default:
                throw new Error('unexpected status' + status)
        }

    }
}

const mapStateToProps = (state)=>({
    status:state.posts.status,
    posts: state.posts.posts? getHandledPosts(state) : null,
})

const mapDispatchToProps = (dispatch) =>({
    getPosts:()=>dispatch(fetchPost())
})

export default connect(mapStateToProps,mapDispatchToProps)(PostsListPage)

