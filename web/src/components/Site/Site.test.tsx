import { render } from "@redwoodjs/testing/web"

import Site from "./Site"

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("Site", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Site />)
    }).not.toThrow()
  })
})
