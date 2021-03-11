import React, {Component} from 'react'


import UsersHeaders from "../components/UsersHeaders";
import UserItem from "../components/UserItem";


import fetchRequest from '../utils/request'
// fetchRequest = async (url, method='GET', data={}){}


class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersHeaders: []
        }
    }


    componentDidMount() {
        console.log('componentDidMount')
        this.setState(() => {
            const users = fetchRequest('http://127.0.0.1:8000/api/authors');
            console.log(users)
            const usersHeaders = Object.keys(users[0]);
            console.log(usersHeaders)
            return {
                users: users,
                usersHeaders: usersHeaders
            }
        })
    }


    render() {
        return (
            <table>
                <UsersHeaders fields={this.state.usersHeaders}/>
                {this.state.users.map(user => {
                    <UserItem user={user} />
                })}
            </table>
        );
    }
}

export default UsersTable