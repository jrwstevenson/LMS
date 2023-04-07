import type { Prisma, Building } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.BuildingCreateArgs>({
  building: {
    one: {
      data: {
        id: 3296157,
        name: "String",
        description: "String",
        address: "String",
        createdAt: "2023-04-07T13:57:03.423Z",
      },
    },
    two: {
      data: {
        id: 805474,
        name: "String",
        description: "String",
        address: "String",
        createdAt: "2023-04-07T13:57:03.423Z",
      },
    },
  },
})

export type StandardScenario = ScenarioData<Building, "building">
