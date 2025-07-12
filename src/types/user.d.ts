type History = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  cinema: string;
  seat: string[];
  totalPrice: number;
  statusPayment?: boolean;
};

interface User {  
  id: string;
  token: string;
  email: string;
  password: string;
  createdAt?: string;
  isLogin?: boolean;
  history?: History[];
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

interface UserState {
  user: User;
}

interface UsersState {
  users: User;
}

interface Users {
  users: User[];
}

interface RootState {
  users: UsersState;
  user: UserState;
}

interface UserLoginRequest {
  email: string;
  password: string;
}

// interface UserLoginResponse {
//   token: string;
//   email: string;
//   createdAt: string;
//   isLogin: boolean;
//   history: History[];
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
// }

interface UserLoginResponse {
  id: string;
  token: string
}
