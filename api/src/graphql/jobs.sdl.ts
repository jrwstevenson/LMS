export const schema = gql`
  type Job {
    id: Int!
    name: String!
    notes: String
    date: DateTime
    amount: Float
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
  }

  input UpdateJobInput {
    name: String
    notes: String
    date: DateTime
    amount: Float
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @requireAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @requireAuth
    deleteJob(id: Int!): Job! @requireAuth
  }
`
