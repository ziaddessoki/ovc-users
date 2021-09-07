import './App.css';
import { useState, useEffect } from 'react';

import Table from './components/Table';



function App() {

  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      setUsers(users)
    };
    fetchUsers()
  }, [])
  console.log(users)

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField))

  return (
    <div className="App">
      <input type="Search" placeholder="Search Name" onChange={e => setSearchField(e.target.value)} />
      <Table headers={["Name", "Email", "City", "Company"]} data={filteredUsers} customClass={'userTable'} />
    </div>
  );
}

export default App;
