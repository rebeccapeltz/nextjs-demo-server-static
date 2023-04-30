import { useEffect, useState } from 'react'
import UserRow from './components/UserRow';
import { User, Users } from './types/User';
import { GetServerSideProps, NextPage } from 'next'

type Props = {
  users: Users
};
export default function ServerSideProps({ users}: Props ): JSX.Element {
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={4} className='topnav'>Rendered By React JS | Server side rendered</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => <UserRow user={user}  key={user.id}/>)}
        </tbody>
      </table>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  debugger //never hits this in browser
  const users: Users = await data.json();
  console.log('Logging server response:',JSON.stringify(users,null,2));

  return { props: { users } }
}

