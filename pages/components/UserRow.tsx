import React from 'react'
import {User} from '../types/User'
interface IProps {
    user: User
 }
// deconstructed props
export default function UserRow({user}:IProps) {

  return (
        <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
  )
}
