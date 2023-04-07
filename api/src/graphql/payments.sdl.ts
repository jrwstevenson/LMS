export const schema = gql`
  type Payment {
    id: Int!
    amount: Float
    date: DateTime
    notes: String
    contract: Contract
    contractId: Int
    job: Job
    jobId: Int
  }

  type Query {
    payments: [Payment!]! @requireAuth
    payment(id: Int!): Payment @requireAuth
  }

  input CreatePaymentInput {
    amount: Float
    date: DateTime
    notes: String
    contractId: Int
    jobId: Int
  }

  input UpdatePaymentInput {
    amount: Float
    date: DateTime
    notes: String
    contractId: Int
    jobId: Int
  }

  type Mutation {
    createPayment(input: CreatePaymentInput!): Payment! @requireAuth
    updatePayment(id: Int!, input: UpdatePaymentInput!): Payment! @requireAuth
    deletePayment(id: Int!): Payment! @requireAuth
  }
`
