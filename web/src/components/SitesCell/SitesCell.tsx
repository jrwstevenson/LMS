import type { BuildingsQuery } from "types/graphql"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"

export const QUERY = gql`
  query BuildingsQuery {
    sites: buildings {
      id
      name
      description
      address
      createdAt
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
    <>
      {sites.map(site => (
        <article key={site.id}>
          <header>
            <h2>{site.name}</h2>
          </header>
          <p>{site.description}</p>
          <div>Posted at: {site.createdAt}</div>
          <div>Address: {site.address}</div>
        </article>
      ))}
    </>
  )
}
