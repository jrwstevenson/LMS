import { Link, routes } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { QUERY } from "src/components/Payment/PaymentsCell"
import { timeTag, truncate } from "src/lib/formatters"

import type { DeletePaymentMutationVariables, FindPayments } from "types/graphql"

const DELETE_PAYMENT_MUTATION = gql`
  mutation DeletePaymentMutation($id: Int!) {
    deletePayment(id: $id) {
      id
    }
  }
`

const PaymentsList = ({ payments }: FindPayments) => {
  const [deletePayment] = useMutation(DELETE_PAYMENT_MUTATION, {
    onCompleted: () => {
      toast.success("Payment deleted")
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

  const onDeleteClick = (id: DeletePaymentMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete payment " + id + "?")) {
      deletePayment({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Contract id</th>
            <th>Job id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{truncate(payment.id)}</td>
              <td>{truncate(payment.amount)}</td>
              <td>{timeTag(payment.date)}</td>
              <td>{truncate(payment.notes)}</td>
              <td>{truncate(payment.contractId)}</td>
              <td>{truncate(payment.jobId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.payment({ id: payment.id })}
                    title={"Show payment " + payment.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPayment({ id: payment.id })}
                    title={"Edit payment " + payment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={"Delete payment " + payment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(payment.id)}
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

export default PaymentsList
