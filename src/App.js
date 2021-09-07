import './App.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'

import Table from './components/Table';

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
  }, [])


  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField))

  // const userPost = async (id) => {
  //   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  //   const posts = await res.json()
  //   return posts
  // }


  return (
    <div className="App">
      <input type="Search" placeholder="Search Name" onChange={e => setSearchField(e.target.value)} />
      <Table headers={["Name", "Email", "City", "Company"]} data={filteredUsers} customClass={'userTable'} />
      <Table headers={['Title', 'Body']} data={filteredUsers} customClass={'postsTable'} />
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
