/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json"
      }
    ],
  },
  moduleNameMapper: {
    '^src/(.*)$': './src/$1',
    // '^@types/(.*)$': './types/$1',
  },
  // @see https://jestjs.io/docs/configuration#modulefileextensions-arraystring
  moduleFileExtensions: ['ts', 'tsx', 'js']
};