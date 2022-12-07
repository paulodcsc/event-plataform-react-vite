import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/clbduxlkl2a6c01uj5cep7qc1/master",
  cache: new InMemoryCache(),
});
