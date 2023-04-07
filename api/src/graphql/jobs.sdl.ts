export const schema = gql`
  type Job {
    id: Int!
    name: String!
    notes: String
    date: DateTime
    amount: Float
    building: Building
    buildingId: Int
    company: Company
    companyId: Int
    contract: Contract
    contractId: Int
    categories: [Category]!
    contacts: [Contact]!
    payments: [Payment]!
  }

  type Query {
    jobs: [Job!]! @requireAuth
    job(id: Int!): Job @requireAuth
  }

  input CreateJobInput {
    name: String!
    notes: String
    date: DateTime
    amount: Float
    buildingId: Int
    companyId: Int
    contractId: Int
  }

  input UpdateJobInput {
    name: String
    notes: String
    date: DateTime
    amount: Float
    buildingId: Int
    companyId: Int
    contractId: Int
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
