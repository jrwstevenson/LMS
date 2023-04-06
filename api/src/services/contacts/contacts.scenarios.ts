import type { Prisma, Contact } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: { one: { data: { name: "String8092831" } }, two: { data: { name: "String4219587" } } },
})

export type StandardScenario = ScenarioData<Contact, "contact">
