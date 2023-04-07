import { Link, routes, navigate } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { timeTag } from "src/lib/formatters"

import type { DeletePaymentMutationVariables, FindPaymentById } from "types/graphql"

const DELETE_PAYMENT_MUTATION = gql`
  mutation DeletePaymentMutation($id: Int!) {
    deletePayment(id: $id) {
      id
    }
  }
`

interface Props {
  payment: NonNullable<FindPaymentById["payment"]>
}

const Payment = ({ payment }: Props) => {
  const [deletePayment] = useMutation(DELETE_PAYMENT_MUTATION, {
    onCompleted: () => {
      toast.success("Payment deleted")
      navigate(routes.payments())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePaymentMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete payment " + id + "?")) {
      deletePayment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Payment {payment.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{payment.id}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{payment.amount}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(payment.date)}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{payment.notes}</td>
            </tr>
            <tr>
              <th>Contract id</th>
              <td>{payment.contractId}</td>
            </tr>
            <tr>
              <th>Job id</th>
              <td>{payment.jobId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editPayment({ id: payment.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(payment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Payment
