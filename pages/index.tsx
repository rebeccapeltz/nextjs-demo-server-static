import { useEffect, useState } from 'react'
import UserRow from './components/UserRow';
import { User, Users } from './types/User';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'


export default function Home({ users }): JSX.Element {
  const [reactData, setReactData] = useState([]);
  useEffect(() => {
    debugger
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
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
          {reactData.map(user => <UserRow  key="{id}"  user={user} />)}
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
          {users.map((user: User) => <UserRow key="{user}" user={user} />)}
        </tbody>
      </table>
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  debugger
  console.log('Logging : ' + context.res);
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: Users = await data.json();
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
