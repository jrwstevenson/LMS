import type { FindContractById } from "types/graphql"

import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"

import Contract from "src/components/Contract/Contract"

export const QUERY = gql`
  query FindContractById($id: Int!) {
    contract: contract(id: $id) {
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

export const Empty = () => <div>Contract not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ contract }: CellSuccessProps<FindContractById>) => {
  return <Contract contract={contract} />
}
