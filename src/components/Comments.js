import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
      page: "",
      sucessMessage: "",
      success: false,
      errorMessage: "",
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      page: this.props.page,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);

    const { comment: message } = this.state;
    const raw = JSON.stringify({
      email: "anonymous@unespic.org",
      subject: "Comments",
      fullname: "anonymous",
      message,
      referrer: "",
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://unespic.herokuapp.com/api/v1/auth/sendcomments",
      requestOptions
    )
      .then((res) => {
        this.setState({
          comment: "",
          page: "",
        });
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then((response) => {
        // response = {status: 'success', message: "message sent successfully"
        const { message } = response;
        this.setState({
            success: true,
          sucessMessage: message,
        });
        setTimeout(() => {
          this.setState({
            sucessMessage: "",
          });
        }, 2000);
      })
      .catch((err) => {
        this.setState({
            error: true,
            errorMessage: 'Oops!! Error occurred while submiting your form. Please try again!'
          });
          setTimeout(() => {
            this.setState({
              errorMessage: "",
            });
          }, 2000);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comments">
        <div>
          <h5 className="comments-title">Leave a comment below</h5>
        </div>
            {
                this.state.success && <div className="submit-success">{this.state.sucessMessage}</div>
            }
            {
                this.state.error && <div className="submit-error">{this.state.errorMessage}</div>
            }
        <div className="form-row">
          <textarea name="comment" id="comment" cols="30" rows="4" className="form-control" placeholder="Comment here" required value={this.state.comment} onChange={this.handleChange}></textarea>
        </div>
        <div className="submit">
            <button type="submit" className="btn btn-outline-success">POST A COMMENT</button>
        </div>
      </form>
    );
  }
}

export default Comments;
