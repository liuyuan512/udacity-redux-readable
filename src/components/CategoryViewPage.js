import React, { Component } from 'react';
import { fetchGetCatoryPosts } from '../actions'
import { connect } from 'react-redux'
import { getPostsByCategory } from '../selectors'
import PostVoteButtons from './PostVoteButtons'
import DeletePostBurron from './DeletePostBurron'
import { Link } from 'react-router-dom'
import PostsListOrder from './PostsListOrder'



class CategoryViewPage extends Component{

    componentDidMount(){
        const { category,getCategoryPosts } = this.props

        getCategoryPosts(category)
    }

    render(){
        const { category,posts } = this.props
        console.log('CategoryViewPage的POSTS================',posts)
        return(
            <div>
                <h1>这是{category}页面</h1>
                <PostsListOrder/>
                <ol>
                    {posts &&posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
                            <ul>
                                <li>Body: {post.body}</li>
                                <li>Author: {post.author}</li>
                                <li>timestamp:{post.timestamp}</li>
                                <li>category:{category}</li>
                                <li>Score: {post.voteScore}</li>
                                <li><PostVoteButtons postId={post.id} /></li>
                                <li><DeletePostBurron postId={post.id}/></li>
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>({
    posts:state.posts.posts?getPostsByCategory(state,ownProps.match.params.category):null,
    category:ownProps.match.params.category
})

const mapDispatchToProps = dispatch =>({
    getCategoryPosts: (category)=>dispatch(fetchGetCatoryPosts(category))
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryViewPage)