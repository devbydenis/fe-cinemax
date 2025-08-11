type Order = {
  orderId: string;
  userId: string;
  title: string;
  // date: string;
  // time: string;
  date_booking: string;
  time_booking: string;
  location: string;
  cinema: string;
  // seat: string[];
  seats: string[];
  totalPrice: number;
  payment: string;
  statusPayment: boolean;
};

interface OrderProps {
  order: Order;
  orders: Order[];
}

type OrderState = {
  order: {
    order: Order;
  };
  orders: Order[];
};

interface RootStateOrder {
  order: {
    order: Order;
  };
  orders: {
    orders: Order[];
  };
}
