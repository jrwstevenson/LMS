import type { Building } from "@prisma/client"

import { buildings, building, createBuilding, updateBuilding, deleteBuilding } from "./buildings"
import type { StandardScenario } from "./buildings.scenarios"

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("buildings", () => {
  scenario("returns all buildings", async (scenario: StandardScenario) => {
    const result = await buildings()

    expect(result.length).toEqual(Object.keys(scenario.building).length)
  })

  scenario("returns a single building", async (scenario: StandardScenario) => {
    const result = await building({ id: scenario.building.one.id })

    expect(result).toEqual(scenario.building.one)
  })

  scenario("creates a building", async () => {
    const result = await createBuilding({
      input: { name: "String" },
    })

    expect(result.name).toEqual("String")
  })

  scenario("updates a building", async (scenario: StandardScenario) => {
    const original = (await building({ id: scenario.building.one.id })) as Building
    const result = await updateBuilding({
      id: original.id,
      input: { name: "String2" },
    })

    expect(result.name).toEqual("String2")
  })

  scenario("deletes a building", async (scenario: StandardScenario) => {
    const original = (await deleteBuilding({ id: scenario.building.one.id })) as Building
    const result = await building({ id: original.id })

    expect(result).toEqual(null)
  })
})
