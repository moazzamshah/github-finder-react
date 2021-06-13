import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './users/Users';
import axios from 'axios'; // fetching the data
import Search from './users/Search';
export class App extends Component {
  state = {
    // defining our state here
    users: [],
    loading: false, // loading at first is false
  };
  // async componentDidMount() {
  //   // first time this function will run when app will start
  //   this.setState({ loading: true }); // changing the state to true before fetching from api

  //   const res = await axios.get(
  //     //storing the value in a variable called res and awaiting the result
  //     `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false }); //changing state again to false after fetching the data
  // }

  // Search github users
  searchUsers = async text => {
    this.setState({loading: true})
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({users: res.data.items, loading: false})
  }

  // Clear Users function

  clearUsers = () => this.setState({users: [], loading: false})



  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search searchUsers = {this.searchUsers} clearUsers={this.clearUsers}
        showClear={this.state.users.length > 0 ? true : false} />
        <div className='container'>
        {/* here we are passing loading and users props into our user component  */}
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
