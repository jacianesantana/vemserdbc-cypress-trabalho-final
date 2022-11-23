import { faker } from '@faker-js/faker';

const customer = {
  "name": faker.name.fullName(),
  "company": faker.company.name(),
  "address": faker.address.street(),
  "city": faker.address.cityName(),
  "phone": faker.phone.number(),
  "email": faker.internet.email()
}

const updatedCustomer = {
  "name": faker.name.fullName(),
  "company": faker.company.name(),
  "address": faker.address.street(),
  "city": faker.address.cityName(),
  "phone": faker.phone.number(),
  "email": faker.internet.email()
}

export { customer, updatedCustomer };