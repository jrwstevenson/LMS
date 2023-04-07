import type { Prisma, Contact } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: { one: { data: { name: "String4037138" } }, two: { data: { name: "String3337435" } } },
})

export type StandardScenario = ScenarioData<Contact, "contact">
