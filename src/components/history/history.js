import React from 'react';
import ReactJson from 'react-json-view';
import {Link} from 'react-router-dom';

// import Home from './home.js';
import './history.scss';

class History extends React.Component {
  ShowDelails = e => {  
    e.preventDefault();
    let item = document.getElementById(e.target.name) ;
    if (item.style.display === 'block') {
      console.log('none');
      item.style.display = 'none';
      e.target.value = 'Hide Delails' ;
    } else {
      console.log('show');
      item.style.display = 'block';
      e.target.value = 'Show Delails'; 
    }
  }
  newSearch = e => {     
    e.preventDefault();
    let i = Number(e.target.name) ;
    let searchItemUrl = this.props.all[i].url;
    let searchItemMethod = this.props.all[i].method;
    let searchItemBody = this.props.all[i].body;

    this.props.handler(searchItemUrl, searchItemMethod,searchItemBody);
  }

  render() {
    return (
      <span>
        <ul className="list">
          {this.props.all.map((item, index) => (
            <li key={index}>
              {item.method+' '+ item.url}
              <button name={index} onClick ={this.ShowDelails}>Show Delails</button>
              <button name={index} onClick ={this.newSearch}>
                <Link to="/home">New Search</Link>
              </button>
              <div class="textarea" id = {index} >
              Header:{               
                  <ReactJson src={item.historyData} />
                }

              Results:{
                  <ReactJson src={item.historyData} />
                }
              </div>
            </li>
          ))}
        </ul>
      </span>
    );
  }
}

export default History;