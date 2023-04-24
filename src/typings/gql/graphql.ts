/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type LoginInputTypeInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationResolver = {
  __typename?: 'MutationResolver';
  login: TokenResponseModel;
  register: Scalars['String'];
  revodeToken: Scalars['String'];
};


export type MutationResolverLoginArgs = {
  loginInput: LoginInputTypeInput;
};


export type MutationResolverRegisterArgs = {
  registerInput: RegisterInputTypeInput;
};

export type QueryResolver = {
  __typename?: 'QueryResolver';
  refreshToken: TokenResponseModel;
  userData: TLoginInfoModel;
  welcome: Scalars['String'];
};

export type RegisterInputTypeInput = {
  account: Scalars['String'];
  confirmPassword: Scalars['String'];
  emailAddress: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type TLoginInfoModel = {
  __typename?: 'TLoginInfoModel';
  cOMPANY_NO?: Maybe<Scalars['String']>;
  cOM_NAME?: Maybe<Scalars['String']>;
  eND_DATE?: Maybe<Scalars['String']>;
  gROUP_NAME?: Maybe<Scalars['String']>;
  gROUP_NO?: Maybe<Scalars['String']>;
  iNVOICE_NO?: Maybe<Scalars['String']>;
  sTA_DATE?: Maybe<Scalars['String']>;
  uSER_NAME?: Maybe<Scalars['String']>;
  uSER_NO?: Maybe<Scalars['String']>;
};

export type TokenResponseModel = {
  __typename?: 'TokenResponseModel';
  accessToken: Scalars['String'];
  message: Scalars['String'];
};

export type UserLoginMutationVariables = Exact<{
  loginInput: LoginInputTypeInput;
}>;


export type UserLoginMutation = { __typename?: 'MutationResolver', login: { __typename?: 'TokenResponseModel', accessToken: string, message: string } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'QueryResolver', userData: { __typename?: 'TLoginInfoModel', cOMPANY_NO?: string | null, cOM_NAME?: string | null, eND_DATE?: string | null, gROUP_NAME?: string | null, gROUP_NO?: string | null, iNVOICE_NO?: string | null, sTA_DATE?: string | null, uSER_NAME?: string | null, uSER_NO?: string | null } };


export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInputTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cOMPANY_NO"}},{"kind":"Field","name":{"kind":"Name","value":"cOM_NAME"}},{"kind":"Field","name":{"kind":"Name","value":"eND_DATE"}},{"kind":"Field","name":{"kind":"Name","value":"gROUP_NAME"}},{"kind":"Field","name":{"kind":"Name","value":"gROUP_NO"}},{"kind":"Field","name":{"kind":"Name","value":"iNVOICE_NO"}},{"kind":"Field","name":{"kind":"Name","value":"sTA_DATE"}},{"kind":"Field","name":{"kind":"Name","value":"uSER_NAME"}},{"kind":"Field","name":{"kind":"Name","value":"uSER_NO"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;