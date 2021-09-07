import React from 'react'
import UserTableBody from './UserTableBody';
import PostsTableBody from './PostsTableBody';

const Table = ({ headers, data, customClass }) => {
    return (
        <div>
            <table className={customClass}>
                <thead className="headBg">
                    <tr>
                        {headers.map(header => {
                            return (
                                <th key={header}> {header} </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {customClass === "userTable" ? <UserTableBody data={data} /> : <PostsTableBody data={data} />}
                </tbody>
            </table>
        </div >
    )
}

export default Table
