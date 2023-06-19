import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:7262/graphql",
  documents: ["graphql/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "typings/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
