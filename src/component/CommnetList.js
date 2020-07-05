import React from 'react';
import CommentItem from './CommentItem';

export default class CommentList extends React.Component {
    


    render() {
        const display = this.props.comments.length === 0 ? 'block' : 'none'
        return (
            <div>
                <h1>Comments:</h1>
                <h2 style={{display}}>no comments</h2>
                <ul>{
                    this.props.comments.map((v, i) => {
                        return <CommentItem key={i} comment={v} i={i} deleteComment={this.props.deleteComment}/>
                    })
                }
                </ul>
            </div>
        )
    }
}