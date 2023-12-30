// jest.config.js
export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    moduleFileExtensions: ['js'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/{!(app),}.js'],
    coverageReporters: ["lcov", "text"],
  };
  