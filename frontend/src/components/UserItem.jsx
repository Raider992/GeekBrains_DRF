const UserItem = (user) => {
    const keys = Object.keys(user);
    const fields = [];

    for (let key in keys) {
        fields.push(user[key])
    }
    return (
        <tr>
            {fields.map(e => {
                <td>e</td>
            })}
        </tr>
    );
}

export default UserItem