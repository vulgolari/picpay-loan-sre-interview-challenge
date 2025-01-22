import { faker } from '@faker-js/faker';

export const generateTestData = () => ({
  cpf: faker.string.numeric(11), // Gera um CPF fictício com 11 dígitos
  name: faker.person.fullName(), // Nome completo gerado
  email: faker.internet.email(), // Gera um e-mail fictício
  birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toISOString().split('T')[0] // Data de nascimento
});
