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

interface ITableBodyProps {
  messages: Message[] | null;
}

interface ITableMessageProps {
  firstName: string;
  lastName: string;
  male: boolean;
  phone: string;
  message: string;
  date: string;
  time: string;
  socialMedia: string;
}

interface ITableMessagePhoneProps {
  phone: string;
}
