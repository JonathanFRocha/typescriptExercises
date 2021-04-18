import faker from "faker";
import { Mappable } from "./CustomMap";
export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  content(): string {
    return `company name is ${this.companyName}, and its catchphrase is ${this.catchPhrase}`;
  }
}
