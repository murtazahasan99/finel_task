import React, { Component } from 'react';
class Register extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      age: null,
    };
  }

  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  
  changePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  
  changeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }
  
  changeName(e) {
    this.setState({
      name: e.target.value,
    });
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
      .then(response => response); // parses response to JSON
  }
  

  register(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      age: Number(this.state.age)
    }
    console.log(data);
    this.postData(`http://localhost:5000/api/user/register`, data)
    .then(data => {
      //
      this.props.history.push("/")


    }) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
    // your api post code here
    // after complete navigate router to your route

   
  }

  render() {
    return (
      <div className="container">
        <form enctype="multipart/form-data" onSubmit={this.register.bind(this)} method="POST">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} />
          </div>
          <div className="form-group">
            <label for="username">Name</label>
            <input type="text" class="form-control" id="username" placeholder="name" name="name" value={this.state.name} onChange={this.changeName.bind(this)} />
          </div>
          <div className="form-group">
            <label for="userage">Age</label>
            <input type="text" class="form-control" id="userage" placeholder="Age" name="age" value={this.state.age} onChange={this.changeAge.bind(this)} />
          </div>


          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Register;