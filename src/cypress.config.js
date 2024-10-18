const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
    screenshotsFolder: "../tests/cypress/screenshots",
    videosFolder: "../tests/cypress/videos",
    supportFile: false, // Disable default support file temporarily
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    video: true,
    specPattern: "../tests/cypress/**/*.cy.js", // Set path to e2e tests
  },
});
