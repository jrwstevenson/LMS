export const schema = gql`
  type Payment {
    id: Int!
    amount: Float
    date: DateTime
    note: String
    contract: Contract
    job: Job
    contact: Contact
    company: Company
    contractId: Int
    jobId: Int
    contactId: Int
    companyId: Int
  }

  type Query {
    payments: [Payment!]! @requireAuth
    payment(id: Int!): Payment @requireAuth
  }

  input CreatePaymentInput {
    amount: Float
    date: DateTime
    note: String
    contractId: Int
    jobId: Int
    contactId: Int
    companyId: Int
  }

  input UpdatePaymentInput {
    amount: Float
    date: DateTime
    note: String
    contractId: Int
    jobId: Int
    contactId: Int
    companyId: Int
  }

  type Mutation {
    createPayment(input: CreatePaymentInput!): Payment! @requireAuth
    updatePayment(id: Int!, input: UpdatePaymentInput!): Payment! @requireAuth
    deletePayment(id: Int!): Payment! @requireAuth
  }
`
