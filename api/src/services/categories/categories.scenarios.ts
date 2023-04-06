import type { Prisma, Category } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: { one: { data: { name: "String11885" } }, two: { data: { name: "String6473450" } } },
})

export type StandardScenario = ScenarioData<Category, "category">
