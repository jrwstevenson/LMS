import type { Prisma, Contract } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.ContractCreateArgs>({
  contract: {
    one: {
      data: {
        name: "String",
        building: {
          create: {
            name: "String",
            description: "String",
            address: "String",
            createdAt: "2023-04-06T17:09:16.435Z",
          },
        },
      },
    },
    two: {
      data: {
        name: "String",
        building: {
          create: {
            name: "String",
            description: "String",
            address: "String",
            createdAt: "2023-04-06T17:09:16.435Z",
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contract, "contract">
