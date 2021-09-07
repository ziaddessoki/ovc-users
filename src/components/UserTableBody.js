import React from 'react'
import { connect } from 'react-redux'
import { getUserId } from '../redux/userPosts/userPostsActions'

const UserTableBody = ({ data, userId }) => {

    return data.map(user => {
        return (
            <tr key={user.id} onClick={() => userId(user.id)}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.company.name}</td>
            </tr>
        )
    })

}

const mapDispatchToProps = dispatch => ({
    userId: id => dispatch(getUserId(id))
})

export default connect(null, mapDispatchToProps)(UserTableBody)
