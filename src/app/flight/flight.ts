export class Flight {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  dob: Date;
  gender: string;
  pickup: string;
  pdate: Date;
  drop:string;
  seat:string;
  insurance:string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}