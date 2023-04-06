import type { FindPayments } from "types/graphql"

import { Link, routes } from "@redwoodjs/router"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"

import Payments from "src/components/Payment/Payments"

export const QUERY = gql`
  query FindPayments {
    payments {
      id
      amount
      date
      note
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No payments yet. "}
      <Link to={routes.newPayment()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ payments }: CellSuccessProps<FindPayments>) => {
  return <Payments payments={payments} />
}
