import type { FindSiteQuery, FindSiteQueryVariables } from "types/graphql"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"
import Site from "../Site/Site"

export const QUERY = gql`
  query FindSiteQuery($id: Int!) {
    site: building(id: $id) {
      id
      name
      address
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindSiteQueryVariables>) => (
  <div style={{ color: "red" }}>Error: {error?.message}</div>
)

export const Success = ({ site }: CellSuccessProps<FindSiteQuery, FindSiteQueryVariables>) => {
  return <Site site={site} />
}
