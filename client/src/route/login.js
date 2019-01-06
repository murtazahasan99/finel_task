import React, { Component } from 'react';


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }

  }
  changeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  changePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  Login(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    this.postData(`http://localhost:5000/api/user/login`, data)
      .then(data => {
        //



      }) // JSON-string from `response.json()` call
      .catch(error => console.error(error));
  }

  postData(url = ``, data = {}) {
    // Default options are marked with *
    return fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then(response => {
        if (response.status == 200) {
          
          this.props.history.push("/")
        }
        else {
          alert("some thing is error")
        }

      }); // parses response to JSON
  }
  render() {
    return (
      <div className="container">
        <form enctype="multipart/form-data" onSubmit={this.Login.bind(this)} method="POST">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} />
          </div>


          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;