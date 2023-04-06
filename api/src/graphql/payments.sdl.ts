export const schema = gql`
  type Payment {
    id: Int!
    amount: Float
    date: DateTime
    note: String
  }

  type Query {
    payments: [Payment!]! @requireAuth
    payment(id: Int!): Payment @requireAuth
  }

  input CreatePaymentInput {
    amount: Float
    date: DateTime
    note: String
  }

  input UpdatePaymentInput {
    amount: Float
    date: DateTime
    note: String
  }

  type Mutation {
    createPayment(input: CreatePaymentInput!): Payment! @requireAuth
    updatePayment(id: Int!, input: UpdatePaymentInput!): Payment! @requireAuth
    deletePayment(id: Int!): Payment! @requireAuth
  }
`
