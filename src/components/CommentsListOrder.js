import React, { Component } from 'react';
import { changeCommentsOrder } from '../actions'
import { connect } from 'react-redux'


class CommentsListOrder extends Component{
    render(){
        const {commentsOrder,handleChangeOrder} =this.props
        return(
            <select value={commentsOrder} onChange={(event) =>handleChangeOrder(event.target.value)}>
                <option value='voteScore'>ByVoteScore</option>
                <option value='timestamp'>ByDate</option>
            </select>
        )
    }
}
const mapStateToProps = (state) =>({
    commentsOrder: state.commentsOrder
})

const mapDispatchToProps = dispatch =>({
    handleChangeOrder: (order) =>dispatch(changeCommentsOrder(order))
})

export default connect(mapStateToProps,mapDispatchToProps)(CommentsListOrder)