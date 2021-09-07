import './App.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Table from './components/Table';
import Posts from './components/Posts';

import { getUsers } from './redux/users/usersActions'



function App({ getUsers, users }) {


  const [searchField, setSearchField] = useState('')


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      getUsers(users)
    };
    fetchUsers()
  }, [getUsers])


  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField))




  return (
    <div className="App">
      <input className="SearchField" type="Search" placeholder="Search Name" onChange={e => setSearchField(e.target.value)} />
      <Table headers={["Name", "Email", "City", "Company"]} data={filteredUsers} customClass={'userTable'} />
      <Posts />
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users.users
})


const mapDispatchToProps = dispatch => ({
  getUsers: users => dispatch(getUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
