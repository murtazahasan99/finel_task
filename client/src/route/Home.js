import React, { Component } from 'react';
import '../App.css';


class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => this.setState({data}, () => console.log('data fetched...', data)));
  }
  render() {
    return (
      <div >
      {this.state.data.map(re=>{
       return <div className="card cc" >
        <img src="http://localhost:5000/f36ad320-0a95-11e9-8c2b-e9849754d770.png" class="card-img-top imgcard" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{re.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      })}
      </div>
    );
  }
}

export default Home;