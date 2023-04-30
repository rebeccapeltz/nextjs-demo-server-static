export default interface User {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  export interface Users extends Array<User>{}