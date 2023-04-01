import type { BuildingsQuery } from "types/graphql"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"

export const QUERY = gql`
  query BuildingsQuery {
    buildings {
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

export const Success = ({ buildings }: CellSuccessProps<BuildingsQuery>) => {
  return (
    <>
      {buildings.map(building => (
        <article key={building.id}>
          <header>
            <h2>{building.name}</h2>
          </header>
          <p>{building.description}</p>
          <p>{building.address}</p>
          <div>Posted at: {building.createdAt}</div>
        </article>
      ))}
    </>
  )
}
