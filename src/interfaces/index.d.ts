export interface IFormValue {
  name: string;
  email: string;
  phone: string;
  address: string;
  cpf: string;
  _id: string;
}

export interface IListRandomUsers {
  fullname: string;
  email: string;
  username: string
  age: number;
  thumbnail: string;
  id: string;
}

export interface IUserFilterVariables {
  busca: string;
}

interface DogImages {
  fileSizeBytes: number;
  url: string;
}

export type User = {
  username: string;
  password: string;
}