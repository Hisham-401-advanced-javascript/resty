import React from 'react';
import Header from './components/header/header';

import Footer from './components/footer/footer';

import Routes from './components/routes';

// import Main from './components/form/form.js';



//class App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key and value pairs
      headers: [],
    };
  }

  // // Make a spinner
  // toggleLoading = () => {
  //   console.log('this.state.loading: ',this.state.loading);
  //   this.setState({ loading: !this.state.loading });
  // }
  // // method to be passed to form
  // handleForm = (count, results,headers,item) => {
  //   this.setState({count, results,headers,item});
  //   // {count: count , results:results}
  // }

  render() {
    return (
      // I will add Header, Main, Footer
      <React.Fragment>
        {/* <link >history</link> */}
        <Header />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;