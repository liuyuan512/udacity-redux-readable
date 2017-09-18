import React from 'react'
import CommentVoteButtons from './CommentVoteButton'
import DeleteCommentButton from './DeleteCommentButton'
import CreateCommentPage from './CreateCommentPage'
import EditComments  from './EditComments'
import EditCommentButton from './EditCommentButton'

const CommentsList = ({comments,postId,currentComment})=>{
    if(comments === null)
        return <div> Therea are no comments</div>
    return(
        <div>
            <ol>
                {comments.map(comment =>
                    <li key={comment.id}>
                        <ul>
                            <li>author:{comment.author}</li>
                            <li>time:{comment.timestamp}</li>
                            <li>body:{comment.body}</li>
                            <li>voteScore:{comment.voteScore}</li>
                            <li><CommentVoteButtons commentId={comment.id}/></li>
                            <li><DeleteCommentButton commentId={comment.id}/></li>
                            <li><EditCommentButton commentId={comment.id}/></li>
                            {currentComment === comment.id ? <EditComments comment={comment}/> : null}
                        </ul>
                    </li>
                )}
            </ol>
            <hr/>
            <CreateCommentPage commentParentId={postId}/>
        </div>
    )
}

export default CommentsList