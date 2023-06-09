import { Link, routes, navigate } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import {} from "src/lib/formatters"

import type { DeleteContactMutationVariables, FindContactById } from "types/graphql"

const DELETE_CONTACT_MUTATION = gql`
  mutation DeleteContactMutation($id: Int!) {
    deleteContact(id: $id) {
      id
    }
  }
`

interface Props {
  contact: NonNullable<FindContactById["contact"]>
}

const Contact = ({ contact }: Props) => {
  const [deleteContact] = useMutation(DELETE_CONTACT_MUTATION, {
    onCompleted: () => {
      toast.success("Contact deleted")
      navigate(routes.contacts())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteContactMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete contact " + id + "?")) {
      deleteContact({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Contact {contact.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{contact.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{contact.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{contact.phone}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{contact.notes}</td>
            </tr>
            <tr>
              <th>Building id</th>
              <td>{contact.buildingId}</td>
            </tr>
            <tr>
              <th>Company id</th>
              <td>{contact.companyId}</td>
            </tr>
            <tr>
              <th>Contract id</th>
              <td>{contact.contractId}</td>
            </tr>
            <tr>
              <th>Job id</th>
              <td>{contact.jobId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editContact({ id: contact.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(contact.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Contact
