import React, { Component } from 'react';
import { changePostsOrder } from '../actions'
import { connect } from 'react-redux'


class PostsListOrder extends Component{
    render(){
        const {postsOrder,handleChangeOrder} =this.props
        return(
            <select value={postsOrder} onChange={(event) =>handleChangeOrder(event.target.value)}>
                <option value='voteScore'>ByVoteScore</option>
                <option value='timestamp'>ByDate</option>
            </select>
        )
    }
}
const mapStateToProps = (state) =>({
    postsOrder: state.postsOrder
})

const mapDispatchToProps = dispatch =>({
    handleChangeOrder: (order) =>dispatch(changePostsOrder(order))
})

export default connect(mapStateToProps,mapDispatchToProps)(PostsListOrder)