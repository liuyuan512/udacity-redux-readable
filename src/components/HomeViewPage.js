import React, { Component } from 'react';
import PostsListPage from './PostsListPage'
import PostsListOrder from './PostsListOrder'

class HomeViewPage extends Component{
    render(){
        return(
            <div>
                <hr/>
                <PostsListOrder/>
                <PostsListPage/>
            </div>
        )
    }
}

export default HomeViewPage