import React, { Component } from 'react'

class Comments extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             comment: '',
             page:''
        }
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value,
            page: this.props.page
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state);

        this.setState({
            comment: '',
            page: ''
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="comments">
                <div>
                    <h5 className="comments-title">Leave a comment below</h5>
                </div>
                <div className="form-row">
                    <textarea name="comment" id="comment" cols="30" rows="10" className="form-control" placeholder="Comment here" required value={this.state.comment} onChange={this.handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-outline-success">POST A COMMENT</button>
            </form>
        )
    }
}

export default Comments
