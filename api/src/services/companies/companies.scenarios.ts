import type { Prisma, Company } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: { one: { data: { name: "String5034230" } }, two: { data: { name: "String1262052" } } },
})

export type StandardScenario = ScenarioData<Company, "company">
