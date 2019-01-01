import React, { Component } from 'react';


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
        return <img src={re.imageUrl} alt="" />
      })}
      </div>
    );
  }
}

export default Home;