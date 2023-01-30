import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    testUserPassword: process.env.TEST_USER_PASSWORD,
    //appSyncGraphQLEndpoint: awsConfig["aws_appsync_graphqlEndpoint"],
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    baseUrl: process.env.AWS_BRANCH ? `https://${process.env.AWS_BRANCH}.${process.env.AWS_APP_ID}.amplifyapp.com` : "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
