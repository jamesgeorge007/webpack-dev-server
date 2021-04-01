'use strict';

module.exports = {
  testURL: 'http://localhost/',
  collectCoverage: false,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/test/',
    '<rootDir>/client/',
  ],
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/test/**/*.test.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
  globalSetup: '<rootDir>/globalSetupTest.js',
  testRunner: 'jest-circus/runner',
  testSequencer: '<rootDir>/test/testSequencer.js',
};
