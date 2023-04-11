import type { BuildingsQuery } from "types/graphql"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"
import { Link, routes } from "@redwoodjs/router"
import Site from "../Site/Site"

export const QUERY = gql`
  query BuildingsQuery {
    sites: buildings {
      id
      name
      address
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: "red" }}>Error: {error?.message}</div>
)

export const Success = ({ sites }: CellSuccessProps<BuildingsQuery>) => {
  return (
    <div className="space-y-10">
      {sites.map(site => (
        <Site key={site.id} site={site} />
      ))}
    </div>
  )
}
