import type { QueryResolvers, MutationResolvers, JobRelationResolvers } from "types/graphql"

import { db } from "src/lib/db"

export const jobs: QueryResolvers["jobs"] = () => {
  return db.job.findMany()
}

export const job: QueryResolvers["job"] = ({ id }) => {
  return db.job.findUnique({
    where: { id },
  })
}

export const createJob: MutationResolvers["createJob"] = ({ input }) => {
  return db.job.create({
    data: input,
  })
}

export const updateJob: MutationResolvers["updateJob"] = ({ id, input }) => {
  return db.job.update({
    data: input,
    where: { id },
  })
}

export const deleteJob: MutationResolvers["deleteJob"] = ({ id }) => {
  return db.job.delete({
    where: { id },
  })
}

export const Job: JobRelationResolvers = {
  building: (_obj, { root }) => {
    return db.job.findUnique({ where: { id: root?.id } }).building()
  },
  company: (_obj, { root }) => {
    return db.job.findUnique({ where: { id: root?.id } }).company()
  },
  contract: (_obj, { root }) => {
    return db.job.findUnique({ where: { id: root?.id } }).contract()
  },
  categories: (_obj, { root }) => {
    return db.job.findUnique({ where: { id: root?.id } }).categories()
  },
  contacts: (_obj, { root }) => {
    return db.job.findUnique({ where: { id: root?.id } }).contacts()
  },
  payments: (_obj, { root }) => {
    return db.job.findUnique({ where: { id: root?.id } }).payments()
  },
}
