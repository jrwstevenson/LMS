import type { Prisma, Contract } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.ContractCreateArgs>({
  contract: {
    one: {
      data: {
        id: 3988492,
        name: "String",
        building: {
          create: {
            id: 2523408,
            name: "String",
            description: "String",
            address: "String",
            createdAt: "2023-04-07T13:58:09.723Z",
          },
        },
      },
    },
    two: {
      data: {
        id: 6809852,
        name: "String",
        building: {
          create: {
            id: 4130309,
            name: "String",
            description: "String",
            address: "String",
            createdAt: "2023-04-07T13:58:09.723Z",
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contract, "contract">
