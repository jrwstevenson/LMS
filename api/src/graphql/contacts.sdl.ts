export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String
    phone: String
    notes: String
    building: Building
    buildingId: Int
    company: Company
    companyId: Int
    contract: Contract
    contractId: Int
    job: Job
    jobId: Int
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
    buildingId: Int
    companyId: Int
    contractId: Int
    jobId: Int
  }

  input UpdateContactInput {
    name: String
    email: String
    phone: String
    notes: String
    buildingId: Int
    companyId: Int
    contractId: Int
    jobId: Int
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @requireAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @requireAuth
    deleteContact(id: Int!): Contact! @requireAuth
  }
`
