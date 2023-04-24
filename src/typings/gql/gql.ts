/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation UserLogin($loginInput: LoginInputTypeInput!) {\n    login(loginInput: $loginInput) {\n      accessToken\n      message\n    }\n  }\n": types.UserLoginDocument,
    "\n  query User {\n    userData {\n      cOMPANY_NO\n      cOM_NAME\n      eND_DATE\n      gROUP_NAME\n      gROUP_NO\n      iNVOICE_NO\n      sTA_DATE\n      uSER_NAME\n      uSER_NO\n    }\n  }\n": types.UserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserLogin($loginInput: LoginInputTypeInput!) {\n    login(loginInput: $loginInput) {\n      accessToken\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation UserLogin($loginInput: LoginInputTypeInput!) {\n    login(loginInput: $loginInput) {\n      accessToken\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User {\n    userData {\n      cOMPANY_NO\n      cOM_NAME\n      eND_DATE\n      gROUP_NAME\n      gROUP_NO\n      iNVOICE_NO\n      sTA_DATE\n      uSER_NAME\n      uSER_NO\n    }\n  }\n"): (typeof documents)["\n  query User {\n    userData {\n      cOMPANY_NO\n      cOM_NAME\n      eND_DATE\n      gROUP_NAME\n      gROUP_NO\n      iNVOICE_NO\n      sTA_DATE\n      uSER_NAME\n      uSER_NO\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;