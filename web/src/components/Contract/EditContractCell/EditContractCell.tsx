import type { EditContractById, UpdateContractInput } from "types/graphql"

import { navigate, routes } from "@redwoodjs/router"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import ContractForm from "src/components/Contract/ContractForm"

export const QUERY = gql`
  query EditContractById($id: Int!) {
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
const UPDATE_CONTRACT_MUTATION = gql`
  mutation UpdateContractMutation($id: Int!, $input: UpdateContractInput!) {
    updateContract(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ contract }: CellSuccessProps<EditContractById>) => {
  const [updateContract, { loading, error }] = useMutation(UPDATE_CONTRACT_MUTATION, {
    onCompleted: () => {
      toast.success("Contract updated")
      navigate(routes.contracts())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateContractInput, id: EditContractById["contract"]["id"]) => {
    updateContract({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Contract {contract?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <ContractForm contract={contract} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
