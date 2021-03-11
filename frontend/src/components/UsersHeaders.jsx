import React from 'react'

const UsersHeaders = fields => {
    console.log(fields)
    return (
        <tr>
            {fields.map(field => {
                <th>
                    { field }
                </th>
            })}
        </tr>
    )
}

export default UsersHeaders