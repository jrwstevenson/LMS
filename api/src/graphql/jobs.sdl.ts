export const schema = gql`
  type Job {
    id: Int!
    name: String!
    notes: String
    date: DateTime
    amount: Float
    payments: [Payment]!
    contract: Contract
    contacts: [Contact]!
    company: Company
    building: Building
    categories: [Category]!
    contractId: Int
    companyId: Int
    buildingId: Int
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
    contractId: Int
    companyId: Int
    buildingId: Int
  }

  input UpdateJobInput {
    name: String
    notes: String
    date: DateTime
    amount: Float
    contractId: Int
    companyId: Int
    buildingId: Int
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
