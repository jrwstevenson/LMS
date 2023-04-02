import { render } from "@redwoodjs/testing/web"

import SitePage from "./SitePage"

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("SitePage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<SitePage />)
    }).not.toThrow()
  })
})
