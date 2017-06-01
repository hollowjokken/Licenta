import React,{Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render(){
    return(
      <div className="jumbotron">
        <h1>Program Administration</h1>
        <p>asd</p>
        <Link to="about" ClassName="btn btn-primary btn-lg"> Something </Link>
      </div>
    );
  }
}
export default HomePage;
