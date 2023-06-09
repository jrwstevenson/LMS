import type { QueryResolvers, MutationResolvers, ContractRelationResolvers } from "types/graphql"

import { db } from "src/lib/db"

export const contracts: QueryResolvers["contracts"] = () => {
  return db.contract.findMany({
    include: {
      building: true,
      categories: true,
    },
  })
}

export const contract: QueryResolvers["contract"] = ({ id }) => {
  return db.contract.findUnique({
    where: { id },
    include: {
      building: true,
      categories: true,
    },
  })
}

export const createContract: MutationResolvers["createContract"] = ({ input }) => {
  return db.contract.create({
    data: input,
  })
}

export const updateContract: MutationResolvers["updateContract"] = ({ id, input }) => {
  return db.contract.update({
    data: { ...input, categories: { set: input.categories.map(id => ({ id })) } },
    where: { id },
  })
}

export const deleteContract: MutationResolvers["deleteContract"] = ({ id }) => {
  return db.contract.delete({
    where: { id },
  })
}

export const Contract: ContractRelationResolvers = {
  building: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).building()
  },
  company: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).company()
  },
  categories: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).categories()
  },
  contacts: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).contacts()
  },
  jobs: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).jobs()
  },
  payments: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).payments()
  },
}
