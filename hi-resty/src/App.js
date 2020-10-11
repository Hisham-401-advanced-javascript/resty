import React from 'react';
import './Header.scss';
import './Footer.scss';
import './Main.scss';


const Header = () => {
  return (
    <header>
      <h1>RESTy</h1>
    </header>
  );
};
const ButtonOrder = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
  
const Spinner = () => (
  <img src="https://media1.tenor.com/images/85d269dc9595a7bcf87fd0fa4039dd9f/tenor.gif?itemid=8647480" class="zoom2" height="30" width = '30'/>
);
const Footer = () => <footer><p>&copy;2020 Code Fellows</p></footer>;

// Main 
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url:'www.google.com',
      methodurl : 'GET www.google.com',
      isPlacingOrder : false,
      firstSelect :true,
    };
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

    render() {
      return (
        <main>
          <div>
            <label>URL: <input onChange={this.handleUrl} value = {this.state.url}/></label>
            <ButtonOrder type="button" disabled={this.state.isPlacingOrder} onClick={this.handleClick}>
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
            <div>
              <textarea id="textarea" name="textarea" rows="10" cols="50"value={this.state.methodurl}></textarea>
            </div>
          </div>
        </main>
      );
    }
}

//class App
class App extends React.Component {
  render() {
    return (
    // I will add Header, Main, Footer
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;