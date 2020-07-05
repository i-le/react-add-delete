import React from 'react';

export default class CommentAdd extends React.Component {

    state = {
        user: '',
        context: ''
    }

    submit = (e) => {
        e.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user:'',
            context:''
        })
    }

    change = (e) => {
        const user =  e.target.value
        this.setState({user})
    }

    changeT = (e) => {
        const context = e.target.value
        this.setState({context})
    }

    render() {
        return (
            <div className="ui segement">
                <form className="ui form">
                    <div className="ui field">
                    user name:
                    <input value={this.state.user} onChange={this.change} />
                    user comment:
                    <input value={this.state.context} onChange={this.changeT} />
                    <div>
                    <button className="ui primary loading button" onClick={this.submit}>submit</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}