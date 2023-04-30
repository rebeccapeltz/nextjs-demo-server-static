import { useEffect, useState } from 'react'
import UserRow from './components/UserRow';
import { User, Users } from './types/User';
import { GetServerSideProps, NextPage } from 'next'

type Props = {
  user: User,
  users: Users
};
export default function Home({ users}: Props ): JSX.Element {
  const [reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        // debugger
        setReactData(data);  
      }).catch((e) => { console.log(e) });
  }, []);

  return (
    <>


      <table>
        <thead>
          <tr>
            <th colSpan={3} className='topnav'>Rendered By Next JS | Client side rendered</th>
          </tr>
        </thead>
        <tbody>
          {reactData.map((user,idx) => <UserRow  key={idx}  user={user} />)}
        </tbody>

      </table>

      <br />
      <table>
        <thead>
          <tr>
            <th colSpan={3} className='topnav'>Rendered By React JS | Server side rendered</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => <UserRow key="{user.id}" user={user} />)}
        </tbody>
      </table>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
 
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  // debugger
  const users: Users = await data.json();
  console.log('Logging : ', users);
  return { props: { users } }
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users:Users = await response.json();
// return {
//   props: {
//     users,
//   },
// }
// }
