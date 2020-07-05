import React from 'react';
import ReactDom from 'react-dom';
import CommentAdd from './CommentAdd';
import CommentList from './CommnetList'


export default class App extends React.Component {
    state = {
        comments: [
            {user: 'tom', context: 'react good'},
            {user: 'wahaha', context: 'react bad'}
        ]
}

    addComment = (e) => {
        this.state.comments.unshift(e)
        this.setState({e})
    }

    deleteComment = (index) => {
        this.state.comments.splice(index, 1)
        this.setState({index})
    }

    render() {
        return (
            <div>
                <div className="ui huge header">
                    Comment your say something ...
                </div>
                <CommentAdd addComment={this.addComment} />
                <div>
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment} />
                </div>
            </div>
        )
    }
}