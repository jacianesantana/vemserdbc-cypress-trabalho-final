import { faker } from '@faker-js/faker';

const cadastro = {
  "nome": faker.name.fullName(),
  "nomeInvalido": 123,
  "email": faker.internet.email(),
  "emailInvalido": "teste",
  "telefone": "71999999999",
  "telefoneInvalido": "1",
  "senha": "123456",
  "confirmaSenha": "123123"
}

const cep = {
  "cep": "49063106",
  "cepCampoUm": 49063,
  "cepCampoDois": 106,
  "cepCampoUmInvalido": "abcde",
  "cepCampoDoisInvalido": "fgh"
}

export { cadastro, cep };