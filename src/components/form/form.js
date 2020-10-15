import React from 'react';
import './Main.scss';
import superagent from 'superagent';
const ButtonOrder = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
  
const Spinner = () => (
  <img src="https://media1.tenor.com/images/85d269dc9595a7bcf87fd0fa4039dd9f/tenor.gif?itemid=8647480" alt="Hello" class="zoom2" height="30" width = '30'/>
);


// Main 
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url:'https://swapi.dev/api/people/',
      body:{},
      item:[],
      bofyJson:{},
      methodurl : 'GET https://swapi.dev/api/people/',
      Count:0,
      Results:[],
      isPlacingOrder : false,
      firstSelect :true,
    };
  }

  componentWillMount(){
    if(!this.state.firstSelect){
      this.setState(
        {
          url: this.props.searchItemUrl || 'https://swapi.dev/api/people/',
          method: this.props.searchItemMethod || 'GET',
          body : this.props.searchItemBody || {},
        });
      this.handleSubmit();
    }
  }
    handleClick = e => {
      e.preventDefault();
      this.setState(
        {
          isPlacingOrder: true,
        },
        () => {
          setTimeout(() => {
            let methodurl = `${this.state.method} ${this.state.url}`;
            this.setState({methodurl}); // re-render 
            this.setState({
              isPlacingOrder: false,
            });
          }, 1000);
        },
      );

    }

    handleUrl = e => {
      let url = e.target.value;
      this.setState({url}); // re-render 
    }

    handleMethod = e => {       
      let method = e.target.value;
      this.setState({method:method,firstSelect:false}); // re-render 
    }

    
    handleBody = e => {       
      let body = e.target.value;
      this.setState({body:body}); // re-render 
    }


    handleSubmit = async e => {
      // fetch data form API 
      e.preventDefault();
      
      const requestOptions = {
        method: this.state.method,
        headers: { 'Content-Type': 'application/json' },
      };
      if (this.state.method !== 'GET'){
        requestOptions.body = this.state.body;
      }
      this.props.toggleLoading();
      let data =await fetch(this.state.url, requestOptions)
        .then(response => response.json());
      let headers = await superagent.get(this.state.url);
      console.log(`raw.headers`,data.headers);
      console.log(`headers`,headers);
      console.log(data);

      let item = localStorage.getItem('item') || '[]';
      item = JSON.parse(item);
      item.push({method:this.state.method,url:this.state.url,body:this.state.body,historyData:data,historyHeaders:headers.headers });
      localStorage.setItem('item',JSON.stringify(item));
      // let headers=raw.headers;
      if (data.count){
        let Count = data.count;
        this.props.handler(Count, data,headers.headers);

      }
      else
      {
        let Count=Object.keys(data).length;
        this.props.handler(Count, data,headers.headers);

      }
      this.props.toggleLoading();
    }


    render() {
      return (
        <main>
          <div>
            <label>URL: <input onChange={this.handleUrl} value = {this.state.url}/></label>
            <label>Body: <input onChange={this.handleBody} value = {this.state.body}/></label>
            <ButtonOrder type="button" disabled={this.state.isPlacingOrder} onClick={this.handleSubmit}>
              {this.state.isPlacingOrder ? <Spinner /> : 'Go'}
            </ButtonOrder>
            <div class="checkRadioContainer">
              {this.state.firstSelect ?  
                <label>
                  <input type="radio" name="radioGroup" value="GET" onChange={this.handleMethod}  checked = 'checked'/>
                  <i class="fa fa-check fa-2x"></i>
                  <span>GET</span>
                </label> :
                <label>
                  <input type="radio" name="radioGroup" value="GET" onChange={this.handleMethod}/>
                  <i class="fa fa-check fa-2x"></i>
                  <span>GET</span>
                </label>
              }
                      
              <label> 
                <input type="radio" name="radioGroup" value="POST" onChange={this.handleMethod}/>
                <i class="fa fa-check fa-2x"></i>
                <span>POST</span>
              </label>
              <label>
                <input type="radio" name="radioGroup" value="PUT" onChange={this.handleMethod}/>
                <i class="fa fa-check fa-2x"></i>
                <span>PUT</span>
              </label>
              <label>
                <input type="radio" name="radioGroup" value="DELETE" onChange={this.handleMethod}/>
                <i class="fa fa-check fa-2x"></i>
                <span>DELETE</span>
              </label>
            </div>
            {/* <div>
              <textarea id="textarea" name="textarea" rows="10" cols="50"value={this.state.methodurl}></textarea>
            </div> */}
          </div>
        </main>
      );
    }
}

export default Main;