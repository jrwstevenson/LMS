export const schema = gql`
  type Category {
    id: Int!
    name: String!
    notes: String
    Contract: Contract
    contractId: Int
    Job: Job
    jobId: Int
  }

  type Query {
    categories: [Category!]! @skipAuth
    category(id: Int!): Category @skipAuth
  }

  input CreateCategoryInput {
    name: String!
    notes: String
    contractId: Int
    jobId: Int
  }

  input UpdateCategoryInput {
    name: String
    notes: String
    contractId: Int
    jobId: Int
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category! @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
