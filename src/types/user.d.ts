interface User {
  id: string;
  email: string;
  password: string;
  createdAt?: string;
  isLogin?: boolean
}
interface Users {
  users: {
    users: User[]
  };
}

