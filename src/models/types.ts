interface Message {
  firstName: string;
  lastName: string;
  male: boolean;
  phone: string;
  message: string;
  date: string;
  time: string;
  socialMedia: string;
}

interface ITableProps {
  messages: Message[] | null;
}
