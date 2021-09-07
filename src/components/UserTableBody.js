import React from 'react'

const UserTableBody = ({ data }) => {

    return data.map(user => {
        return (
            <tr key={user.id} onClick={() => console.log(user.id)}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.company.name}</td>
            </tr>
        )
    })

}

export default UserTableBody
