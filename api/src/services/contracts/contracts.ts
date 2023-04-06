import type { QueryResolvers, MutationResolvers, ContractRelationResolvers } from "types/graphql"

import { db } from "src/lib/db"

export const contracts: QueryResolvers["contracts"] = () => {
  return db.contract.findMany()
}

export const contract: QueryResolvers["contract"] = ({ id }) => {
  return db.contract.findUnique({
    where: { id },
  })
}

export const createContract: MutationResolvers["createContract"] = ({ input }) => {
  return db.contract.create({
    data: input,
  })
}

export const updateContract: MutationResolvers["updateContract"] = ({ id, input }) => {
  return db.contract.update({
    data: input,
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
  categories: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).categories()
  },
  job: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).job()
  },
  contacts: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).contacts()
  },
  company: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).company()
  },
  payments: (_obj, { root }) => {
    return db.contract.findUnique({ where: { id: root?.id } }).payments()
  },
}
