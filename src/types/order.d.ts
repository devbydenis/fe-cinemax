type Order = {
  orderId: string;
  userId: string;
  title: string;
  date: string;
  time: string;
  location: string;
  cinema: string;
  seat: string[];
  totalPrice: number;
  payment: string;
  statusPayment: boolean;
};

interface OrderProps {
  Order: Order;
  Orders: Order[];
}
