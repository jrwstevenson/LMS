import type { Prisma, Company } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: { one: { data: { name: "String2979022" } }, two: { data: { name: "String2272707" } } },
})

export type StandardScenario = ScenarioData<Company, "company">
