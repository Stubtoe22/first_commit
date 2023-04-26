/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  "testEnvironment": "jsdom",
  "transform": {},
  "moduleFileExtensions": [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": "C:/Users/peter/OneDrive/Desktop/4_19_23/my-react-app/tsconfig.json"
    }
  },
  "moduleNameMapper": {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  "testMatch": [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transformIgnorePatterns": [
    "/node_modules/"
  ],
  "preset": "ts-jest"
}
