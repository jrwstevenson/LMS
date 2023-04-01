import type { Prisma, Building } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.BuildingCreateArgs>({
  building: {
    one: { data: { name: "String", description: "String", address: "String" } },
    two: { data: { name: "String", description: "String", address: "String" } },
  },
})

export type StandardScenario = ScenarioData<Building, "building">
