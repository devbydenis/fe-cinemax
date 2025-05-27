interface User {
  id: string;
  email: string;
  password: string;
  createdAt?: string;
}
interface Users {
  users: {
    users: User[]
  };
}

