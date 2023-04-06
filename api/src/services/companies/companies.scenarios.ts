import type { Prisma, Company } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: { one: { data: { name: "String6846624" } }, two: { data: { name: "String973520" } } },
})

export type StandardScenario = ScenarioData<Company, "company">
