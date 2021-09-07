import React from 'react'
import UserTableBody from './UserTableBody';

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
                    <UserTableBody data={data} />
                </tbody>
            </table>
        </div >
    )
}

export default Table
