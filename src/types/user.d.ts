type History = {
  id: string,
  title: string,
  date: string,
  time: string,
  location: string,
  cinema: string,
  seat: string[],
  totalPrice: number
} 

interface User {
  id: string;
  email: string;
  password: string;
  createdAt?: string;
  isLogin?: boolean
  history?: History[]
}
interface Users {
  users: {
    users: User[]
  };
}

