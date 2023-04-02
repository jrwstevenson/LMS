import type { ComponentMeta } from "@storybook/react"

import SitePage from "./SitePage"

export const generated = () => {
  return <SitePage />
}

export default {
  title: "Pages/SitePage",
  component: SitePage,
} as ComponentMeta<typeof SitePage>
