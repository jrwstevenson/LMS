export const schema = gql`
  type Building {
    id: Int!
    name: String!
    notes: String
    address: String
    contacts: [Contact]!
    contracts: [Contract]!
    jobs: [Job]!
  }

  type Query {
    buildings: [Building!]! @requireAuth
    building(id: Int!): Building @requireAuth
  }

  input CreateBuildingInput {
    name: String!
    notes: String
    address: String
  }

  input UpdateBuildingInput {
    name: String
    notes: String
    address: String
  }

  type Mutation {
    createBuilding(input: CreateBuildingInput!): Building! @requireAuth
    updateBuilding(id: Int!, input: UpdateBuildingInput!): Building! @requireAuth
    deleteBuilding(id: Int!): Building! @requireAuth
  }
`
