import type { Prisma, Job } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: {
    one: { data: { id: 3878781, name: "String" } },
    two: { data: { id: 810814, name: "String" } },
  },
})

export type StandardScenario = ScenarioData<Job, "job">
