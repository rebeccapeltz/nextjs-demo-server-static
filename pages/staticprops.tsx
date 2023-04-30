import { useEffect, useState } from 'react'
import UserRow from './components/UserRow';
import { User, Users } from './types/User';

type Props = {
    users: Users
};
export default function StaticProps({ users }: Props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={4} className='topnav'>Rendered By Next JS | Client side rendered</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <UserRow key={user.id} user={user} />)}
                </tbody>

            </table>
        </div>
    )
}

export const getStaticProps = async () => {
    // debugger
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: Users = await response.json();
    return {
        props: { users },
    }
}
