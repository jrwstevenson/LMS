export const schema = gql`
  type Category {
    id: Int!
    name: String!
    notes: String
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    notes: String
  }

  input UpdateCategoryInput {
    name: String
    notes: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category! @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
