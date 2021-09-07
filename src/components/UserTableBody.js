import React from 'react'
import { connect } from 'react-redux'
import { getUserId, getUserPosts, showPostsTable } from '../redux/userPosts/userPostsActions'

const UserTableBody = ({ data, userId, userPosts, showPosts }) => {
    const userPost = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        const posts = await res.json()
        userPosts(posts)
    }

    return data.map(user => {
        return (
            <tr key={user.id} onClick={() => {
                showPosts();
                userId(user.id);
                userPost(user.id)
            }}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.company.name}</td>
            </tr>
        )
    })




}

const mapDispatchToProps = dispatch => ({
    userId: id => dispatch(getUserId(id)),
    userPosts: posts => dispatch(getUserPosts(posts)),
    showPosts: () => dispatch(showPostsTable())
})

export default connect(null, mapDispatchToProps)(UserTableBody)
