import React, { Component } from 'react';


class Add extends Component {
  constructor(){
    super()
    // this.state={
    //   data:{
    //     title:'',
    //     author:'',
    //     publish:'',
    //     imageUrl :'',
    //     PdfUrl:''
    //   }
    // }
  }
  render() {
    return (
      <div className="container">
      <form  enctype="multipart/form-data" action="http://localhost:5000/api/books/add" method="post">
  <div class="form-group">
    <label for="exampleInputEmail1">Book Titel</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter titel" name="title"/>
  </div>
  <div class="form-group">
    <label for="auther">Auther</label>
    <input type="text" class="form-control" id="auther" aria-describedby="emailHelp" placeholder="Enter Auther" name="author"  />
  </div>
  <div class="form-group">
    <label for="publish">publish</label>
    <input type="date" class="form-control" id="publish" aria-describedby="emailHelp" placeholder="Enter publish" name="publish"  />
  </div>
  <div class="form-group">
    <label for="Image">Image</label>
    <input type="file" class="form-control" id="Image" aria-describedby="emailHelp" placeholder="Enter Image" name="img"  />
  </div>
  <div class="form-group">
    <label for="Book">Book</label>
    <input type="file" class="form-control" id="Book" aria-describedby="emailHelp" placeholder="Enter Book" name="pdf" />
  </div>


 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    );
  }
}

export default Add;