import React from 'react';

export default class CommentItem extends React.Component {

    click = () => {
        if(window.confirm(`delete ${this.props.comment.user} user comment?`)) {
            this.props.deleteComment(this.props.i)
        }
    }

    render() {
        return (
            <li>
                <div>
                    <p>
                        <span>
                            {this.props.comment.user}
                        </span>
                        <span>says:</span></p>
                        <p>
                        {this.props.comment.context}
                    </p>
                </div>
                <div>
                    <button onClick={this.click}>delete</button>
                </div>
            </li>
        )
    }
}