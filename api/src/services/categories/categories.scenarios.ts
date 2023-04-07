import type { Prisma, Category } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: {
    one: { data: { id: 5714199, name: "String7330673" } },
    two: { data: { id: 1094199, name: "String8501151" } },
  },
})

export type StandardScenario = ScenarioData<Category, "category">
