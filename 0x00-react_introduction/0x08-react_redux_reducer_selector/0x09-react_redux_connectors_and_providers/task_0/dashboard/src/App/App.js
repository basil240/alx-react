
import React from 'react';
import { connect } from 'react-redux'; 
import { yourActionCreator } from './path-to-your-actions'; 

class App extends React.Component {

  render() {
    // Render your component
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.uiReducer.isLoggedIn,
    // Add other properties from your state or modify as needed
  };
};

// Connect the mapStateToProps to the component
export default connect(mapStateToProps, { yourActionCreator })(App);