import type { Prisma, Contact } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: { one: { data: { name: "String9132653" } }, two: { data: { name: "String298882" } } },
})

export type StandardScenario = ScenarioData<Contact, "contact">
