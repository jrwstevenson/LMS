import type { FindContracts } from "types/graphql"

import { Link, routes } from "@redwoodjs/router"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"

import Contracts from "src/components/Contract/Contracts"

export const QUERY = gql`
  query FindContracts {
    contracts {
      id
      name
      notes
      startDate
      endDate
      amount
      buildingId
      companyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No contracts yet. "}
      <Link to={routes.newContract()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ contracts }: CellSuccessProps<FindContracts>) => {
  return <Contracts contracts={contracts} />
}
