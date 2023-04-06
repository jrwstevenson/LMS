import type { QueryResolvers, MutationResolvers, BuildingRelationResolvers } from "types/graphql"

import { db } from "src/lib/db"

export const buildings: QueryResolvers["buildings"] = () => {
  return db.building.findMany()
}

export const building: QueryResolvers["building"] = ({ id }) => {
  return db.building.findUnique({
    where: { id },
  })
}

export const createBuilding: MutationResolvers["createBuilding"] = ({ input }) => {
  return db.building.create({
    data: input,
  })
}

export const updateBuilding: MutationResolvers["updateBuilding"] = ({ id, input }) => {
  return db.building.update({
    data: input,
    where: { id },
  })
}

export const deleteBuilding: MutationResolvers["deleteBuilding"] = ({ id }) => {
  return db.building.delete({
    where: { id },
  })
}

export const Building: BuildingRelationResolvers = {
  Contract: (_obj, { root }) => {
    return db.building.findUnique({ where: { id: root?.id } }).Contract()
  },
  Job: (_obj, { root }) => {
    return db.building.findUnique({ where: { id: root?.id } }).Job()
  },
}
