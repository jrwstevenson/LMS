import { render } from "@redwoodjs/testing/web"

import Site from "./Site"

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe("Site", () => {
  it("renders successfully", () => {
    expect(() => {
      render(
        <Site
          site={{
            id: 1,
            name: "string",
            description: "string",
            address: "string",
            createdAt: "2021-05-05T20:00:00.000Z",
          }}
        />,
      )
    }).not.toThrow()
  })
})
