import type { Prisma, Job } from "@prisma/client"
import type { ScenarioData } from "@redwoodjs/testing/api"

export const standard = defineScenario<Prisma.JobCreateArgs>({
  job: { one: { data: { name: "String" } }, two: { data: { name: "String" } } },
})

export type StandardScenario = ScenarioData<Job, "job">
