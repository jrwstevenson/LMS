import { Link, routes } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { QUERY } from "src/components/Contract/ContractsCell"
import { timeTag, truncate } from "src/lib/formatters"

import type { DeleteContractMutationVariables, FindContracts } from "types/graphql"

const DELETE_CONTRACT_MUTATION = gql`
  mutation DeleteContractMutation($id: Int!) {
    deleteContract(id: $id) {
      id
    }
  }
`

const ContractsList = ({ contracts }: FindContracts) => {
  const [deleteContract] = useMutation(DELETE_CONTRACT_MUTATION, {
    onCompleted: () => {
      toast.success("Contract deleted")
    },
    onError: error => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteContractMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete contract " + id + "?")) {
      deleteContract({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Notes</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Amount</th>
            <th>Building id</th>
            <th>Company id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(contract => (
            <tr key={contract.id}>
              <td>{truncate(contract.id)}</td>
              <td>{truncate(contract.name)}</td>
              <td>{truncate(contract.notes)}</td>
              <td>{timeTag(contract.startDate)}</td>
              <td>{timeTag(contract.endDate)}</td>
              <td>{truncate(contract.amount)}</td>
              <td>{truncate(contract.buildingId)}</td>
              <td>{truncate(contract.companyId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.contract({ id: contract.id })}
                    title={"Show contract " + contract.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editContract({ id: contract.id })}
                    title={"Edit contract " + contract.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={"Delete contract " + contract.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(contract.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContractsList
