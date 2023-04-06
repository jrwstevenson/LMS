export const schema = gql`
  type Building {
    id: Int!
    name: String!
    notes: String
    description: String!
    address: String!
    createdAt: DateTime!
    Contract: [Contract]!
    Job: [Job]!
  }

  type Query {
    buildings: [Building!]! @skipAuth
    building(id: Int!): Building @skipAuth
  }

  input CreateBuildingInput {
    name: String!
    notes: String
    description: String!
    address: String!
  }

  input UpdateBuildingInput {
    name: String
    notes: String
    description: String
    address: String
  }

  type Mutation {
    createBuilding(input: CreateBuildingInput!): Building! @requireAuth
    updateBuilding(id: Int!, input: UpdateBuildingInput!): Building! @requireAuth
    deleteBuilding(id: Int!): Building! @requireAuth
  }
`
