export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String
    phone: String
    notes: String
    Contract: Contract
    contractId: Int
    Job: Job
    jobId: Int
    Company: Company
    companyId: Int
    Payment: [Payment]!
  }

  type Query {
    contacts: [Contact!]! @requireAuth
    contact(id: Int!): Contact @requireAuth
  }

  input CreateContactInput {
    name: String!
    email: String
    phone: String
    notes: String
    contractId: Int
    jobId: Int
    companyId: Int
  }

  input UpdateContactInput {
    name: String
    email: String
    phone: String
    notes: String
    contractId: Int
    jobId: Int
    companyId: Int
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`
