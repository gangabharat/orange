export class Contact {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  Number: PhoneNumber[];
  note: string;
  address: Address[];
}

interface PhoneNumber {
  type: ContactType;
  number: string;
}

interface Address {
  type: ContactType;
  street: string;
  city: string;
  state: string;
  pincode: string;
}

enum ContactType {
  Main,
  Primary,
  Secondary,
  Home,
  Work,
  Other,
}
