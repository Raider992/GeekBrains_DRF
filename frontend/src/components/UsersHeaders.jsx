

const UsersHeaders = fields => {

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