/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  preset: 'ts-jest',

  testEnvironment: 'node',

  setupFilesAfterEnv: ['./__tests__/jest.setup.ts'],

  testMatch: ['**/__tests__/**/*.test.ts?(x)'],

  coveragePathIgnorePatterns: ['./src/infra/migrations/*']
};
