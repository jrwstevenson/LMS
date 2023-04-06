import type { Contract } from "@prisma/client"

import { contracts, contract, createContract, updateContract, deleteContract } from "./contracts"
import type { StandardScenario } from "./contracts.scenarios"

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe("contracts", () => {
  scenario("returns all contracts", async (scenario: StandardScenario) => {
    const result = await contracts()

    expect(result.length).toEqual(Object.keys(scenario.contract).length)
  })

  scenario("returns a single contract", async (scenario: StandardScenario) => {
    const result = await contract({ id: scenario.contract.one.id })

    expect(result).toEqual(scenario.contract.one)
  })

  scenario("creates a contract", async (scenario: StandardScenario) => {
    const result = await createContract({
      input: { name: "String", buildingId: scenario.contract.two.buildingId },
    })

    expect(result.name).toEqual("String")
    expect(result.buildingId).toEqual(scenario.contract.two.buildingId)
  })

  scenario("updates a contract", async (scenario: StandardScenario) => {
    const original = (await contract({ id: scenario.contract.one.id })) as Contract
    const result = await updateContract({
      id: original.id,
      input: { name: "String2" },
    })

    expect(result.name).toEqual("String2")
  })

  scenario("deletes a contract", async (scenario: StandardScenario) => {
    const original = (await deleteContract({ id: scenario.contract.one.id })) as Contract
    const result = await contract({ id: original.id })

    expect(result).toEqual(null)
  })
})
