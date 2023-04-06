import type { Prisma, Category } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: { one: { data: { name: "String1861653" } }, two: { data: { name: "String3124338" } } },
})

export type StandardScenario = ScenarioData<Category, "category">
