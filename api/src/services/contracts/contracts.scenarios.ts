import type { Prisma, Contract } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.ContractCreateArgs>({
  contract: { one: { data: { name: "String" } }, two: { data: { name: "String" } } },
})

export type StandardScenario = ScenarioData<Contract, "contract">
