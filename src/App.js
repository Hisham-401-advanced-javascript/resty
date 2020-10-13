import React from 'react';
// import Header from './components/header/header';
// import Main from './components/form/form';
// import Footer from './components/footer/footer';
// import Results from '/components/results/results';

//class App
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // key and value pairs
      count: 0,
      results: [],
      headers: [],
    };
  }

  // method to be passed to form
  handleForm = (count, results, headers) => {
    this.setState({ count, results, headers });
    // {count: count , results:results}
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Main /> */}
        <Footer />
        <Main handler={this.handleForm} />
        <Results
          count={this.state.count}
          results={this.state.results}
          headers={this.state.headers}
        />
      </React.Fragment>
    );
  }
}

export default App;
