import React from 'react';
import {Route} from 'react-router-dom';
// import Home from './home.js';
import History from './history/history.js';
import Main from './form/form';
import Results from './results/results';

class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key and value pairs
      count: 0,
      results: [],
      item:[],
      loading:false,
      all:[],
      searchItemUrl: '',
      searchItemMethod:'',
      searchItemBody:'',
    };
  }
  
  componentWillMount(){
    let items1 = localStorage.getItem('item');
    let item2=JSON.parse(items1)||[];
    let all =  item2;
    this.setState({all:all});
  }

  // Make a spinner
  toggleLoading = () => {
    console.log('this.state.loading: ',this.state.loading);
    this.setState({ loading: !this.state.loading });
  }
  // method to be passed to form
  handleForm = (count, results,headers,item) => {
    this.setState({count, results,headers,item});
    // {count: count , results:results}
  }

  handleHistory = (searchItemUrl, searchItemMethod,searchItemBody) => {
    this.setState({searchItemUrl, searchItemMethod,searchItemBody});
  }   

  render(){
    return (
      <div>
        <Route path="/home" exact>
          <Main handler={this.handleForm} toggleLoading={this.toggleLoading} searchItemUrl={this.state.searchItemUrl} searchItemMethod={this.state.searchItemMethod} searchItemBody={this.state.searchItemBody} />
          <Results loading={this.state.loading} count={this.state.count} results={this.state.results} headers={this.state.headers} />
        </Route> 
        <Route path="/history">
          <History handler={this.handleHistory} all = {this.state.all} />
        </Route> 

      </div>
    );}
}


export default Routes;