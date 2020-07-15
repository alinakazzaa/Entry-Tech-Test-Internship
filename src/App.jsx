import React, { Component } from 'react';
import './App.css';
import data from './resources/follower-suggestions.json';

/* terminal - npx create-react-app influencers
            - cd influencers => npm start    
*/
// User component

class User extends Component {

  render() {
    return (
      <li className="user">
        <div className="image"><img src={this.props.userRef.profilePicture} alt={"Profile from" + {this.props.userRef.username}} /></div>
        <div className="username">{"@" + {this.props.userRef.username}}<br/>
        <div className="name">{this.props.userRef.name}</div>
        </div>
        <div className="butBox"><button className="button"
            onClick={this.props.unfollowUserRef.bind(null, this.props.indexRef)}>
            <i className="icon"></i>Follow</button>
        </div>
      </li>
      );
  }
}

// here the array state is creates and assigned data from json
class App extends Component {
  constructor(props) {
    super(props);
      this.state = {'users': data}
  }
  render() {
    // unfollowUser method is inside a variable
    const unfollowUser = function(index) {
      let currentUsers = this.state.users;
      // remove from currentUsers in position index, 1 element
      currentUsers.splice(index,1);
      this.setState({
        // re-set the state to reflect the changes
        users: currentUsers
      });
    }.bind(this);
    // give access to this.state outside of the App component

    return (
      <div className="App">
        <div className="container">
        <ul className="list">
          {this.state.users.map(function(user,index) {
            // map over array and return user object with reference to the unfollowUser method and an index reference
            return <User userRef={user} unfollowUserRef={unfollowUser} indexRef={index} />
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
