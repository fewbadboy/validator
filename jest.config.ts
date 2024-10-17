/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^@/(.*)$': './src/$1',
    '^@types/(.*)$': './types/$1',
  },
  testMatch: [
    '**/tests/**/*.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js']
};