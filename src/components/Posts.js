import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'

const Posts = ({ posts, showPostTable }) => {
    return (
        <div>
            {showPostTable ? <Table headers={['Title', 'Body']} customClass={'postsTable'} data={posts} /> : ''}
        </div>
    )
}

const mapStateToProps = state => ({
    showPostTable: state.posts.hideTable,
    posts: state.posts.posts

})
export default connect(mapStateToProps)(Posts)
