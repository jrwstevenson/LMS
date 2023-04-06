export const schema = gql`
  type Contract {
    id: Int!
    name: String!
    notes: String
    startDate: DateTime
    endDate: DateTime
    amount: Float
    building: Building!
    categories: [Category]!
    job: [Job]!
    contacts: [Contact]!
    company: Company
    payments: [Payment]!
    buildingId: Int!
    companyId: Int
  }

  type Query {
    contracts: [Contract!]! @requireAuth
    contract(id: Int!): Contract @requireAuth
  }

  input CreateContractInput {
    name: String!
    notes: String
    startDate: DateTime
    endDate: DateTime
    amount: Float
    buildingId: Int!
    companyId: Int
  }

  input UpdateContractInput {
    name: String
    notes: String
    startDate: DateTime
    endDate: DateTime
    amount: Float
    buildingId: Int
    companyId: Int
  }

  type Mutation {
    createContract(input: CreateContractInput!): Contract! @requireAuth
    updateContract(id: Int!, input: UpdateContractInput!): Contract! @requireAuth
    deleteContract(id: Int!): Contract! @requireAuth
  }
`
