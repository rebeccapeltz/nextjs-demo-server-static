export interface User {
    name: string;
    username: string;
    email: string;
  }
  export interface Users extends Array<User>{}