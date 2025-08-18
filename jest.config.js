/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/jestDomImport.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.svg$': '<rootDir>/__mocks__/svgMock.js'
    },
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test|Test).[jt]s?(x)"
    ],
    rootDir: '.'
};

module.exports = config;