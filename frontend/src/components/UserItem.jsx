import React from 'react'

const UserItem = (user) => {
    console.log(user)
    const keys = Object.keys(user);
    const fields = [];

    for (let key in keys) {
        fields.push(user[key])
    }
    console.log(fields)
    return (
        <tr>
            {fields.map(e => {
                <td>e</td>
            })}
        </tr>
    );
}

export default UserItem