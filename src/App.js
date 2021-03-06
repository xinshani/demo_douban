import React from "react";
import './App.css';
import IndexHead from './components/indexhead.js';
import config from "./config/config";
import { Link} from 'react-router';
class App extends React.Component {
  constructor (props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        {
          config.subjects.map(function(data,index){
            return(
              <Link to={'/list/'+data.id} key={index}>
                <div className="list" > 
                  <div className="left_div"><img src={data.images.medium} /></div>
                  <ul className="right_ul">
                    <li>{data.title}</li>
                    <li>评分:{data.rating.average}</li>
                    <li>导演:{data.directors[0].name}</li>
                    <li>主演:{data.casts[0].name}</li>
                  </ul>
                </div>
              </Link>
            )
          })

        }
      <IndexHead title={this.props.data}/>
      </div>
    );
  }
}
App.defaultProps={
    data:"豆瓣电影Top",
  }
export default App;
