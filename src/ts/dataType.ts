export interface TodoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoRespond {
  data: TodoData[];
  headers: any;
}

export interface IUserDate {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
