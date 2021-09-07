import React from 'react'

const PostsTableBody = ({ data }) => {
    return data.map(post => {
        return (
            <tr key={post.id} >
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        )
    })
}

export default PostsTableBody
