import { Link, routes, navigate } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { timeTag } from "src/lib/formatters"

import type { DeleteContractMutationVariables, FindContractById } from "types/graphql"

const DELETE_CONTRACT_MUTATION = gql`
  mutation DeleteContractMutation($id: Int!) {
    deleteContract(id: $id) {
      id
    }
  }
`

interface Props {
  contract: NonNullable<FindContractById["contract"]>
}

const Contract = ({ contract }: Props) => {
  const [deleteContract] = useMutation(DELETE_CONTRACT_MUTATION, {
    onCompleted: () => {
      toast.success("Contract deleted")
      navigate(routes.contracts())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteContractMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete contract " + id + "?")) {
      deleteContract({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Contract {contract.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{contract.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{contract.name}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{contract.notes}</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>{timeTag(contract.startDate)}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(contract.endDate)}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{contract.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editContract({ id: contract.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(contract.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Contract
