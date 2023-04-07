import type { QueryResolvers, MutationResolvers, ContactRelationResolvers } from "types/graphql"

import { db } from "src/lib/db"

export const contacts: QueryResolvers["contacts"] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers["contact"] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers["createContact"] = ({ input }) => {
  return db.contact.create({
    data: input,
  })
}

export const updateContact: MutationResolvers["updateContact"] = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact: MutationResolvers["deleteContact"] = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}

export const Contact: ContactRelationResolvers = {
  building: (_obj, { root }) => {
    return db.contact.findUnique({ where: { id: root?.id } }).building()
  },
  company: (_obj, { root }) => {
    return db.contact.findUnique({ where: { id: root?.id } }).company()
  },
  contract: (_obj, { root }) => {
    return db.contact.findUnique({ where: { id: root?.id } }).contract()
  },
  job: (_obj, { root }) => {
    return db.contact.findUnique({ where: { id: root?.id } }).job()
  },
}
