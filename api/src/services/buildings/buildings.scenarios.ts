import type { Prisma, Building } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.BuildingCreateArgs>({
  building: {
    one: {
      data: {
        name: "String",
        description: "String",
        address: "String",
        createdAt: "2023-04-06T16:52:16.383Z",
      },
    },
    two: {
      data: {
        name: "String",
        description: "String",
        address: "String",
        createdAt: "2023-04-06T16:52:16.383Z",
      },
    },
  },
})

export type StandardScenario = ScenarioData<Building, "building">
