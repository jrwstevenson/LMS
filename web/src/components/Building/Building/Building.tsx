import { Link, routes, navigate } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { timeTag } from "src/lib/formatters"

import type { DeleteBuildingMutationVariables, FindBuildingById } from "types/graphql"

const DELETE_BUILDING_MUTATION = gql`
  mutation DeleteBuildingMutation($id: Int!) {
    deleteBuilding(id: $id) {
      id
    }
  }
`

interface Props {
  building: NonNullable<FindBuildingById["building"]>
}

const Building = ({ building }: Props) => {
  const [deleteBuilding] = useMutation(DELETE_BUILDING_MUTATION, {
    onCompleted: () => {
      toast.success("Building deleted")
      navigate(routes.buildings())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteBuildingMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete building " + id + "?")) {
      deleteBuilding({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Building {building.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{building.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{building.name}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{building.notes}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{building.description}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{building.address}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(building.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editBuilding({ id: building.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(building.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Building
