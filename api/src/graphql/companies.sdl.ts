export const schema = gql`
  type Company {
    id: Int!
    name: String!
    notes: String
    contacts: [Contact]!
    contracts: [Contract]!
    jobs: [Job]!
  }

  type Query {
    companies: [Company!]! @requireAuth
    company(id: Int!): Company @requireAuth
  }

  input CreateCompanyInput {
    name: String!
    notes: String
  }

  input UpdateCompanyInput {
    name: String
    notes: String
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company! @requireAuth
    updateCompany(id: Int!, input: UpdateCompanyInput!): Company! @requireAuth
    deleteCompany(id: Int!): Company! @requireAuth
  }
`
