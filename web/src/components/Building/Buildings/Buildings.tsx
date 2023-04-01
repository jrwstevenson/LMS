import { Link, routes } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { QUERY } from "src/components/Building/BuildingsCell"
import { timeTag, truncate } from "src/lib/formatters"

import type { DeleteBuildingMutationVariables, FindBuildings } from "types/graphql"

const DELETE_BUILDING_MUTATION = gql`
  mutation DeleteBuildingMutation($id: Int!) {
    deleteBuilding(id: $id) {
      id
    }
  }
`

const BuildingsList = ({ buildings }: FindBuildings) => {
  const [deleteBuilding] = useMutation(DELETE_BUILDING_MUTATION, {
    onCompleted: () => {
      toast.success("Building deleted")
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

  const onDeleteClick = (id: DeleteBuildingMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete building " + id + "?")) {
      deleteBuilding({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Address</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {buildings.map(building => (
            <tr key={building.id}>
              <td>{truncate(building.id)}</td>
              <td>{truncate(building.name)}</td>
              <td>{truncate(building.description)}</td>
              <td>{truncate(building.address)}</td>
              <td>{timeTag(building.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.building({ id: building.id })}
                    title={"Show building " + building.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editBuilding({ id: building.id })}
                    title={"Edit building " + building.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={"Delete building " + building.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(building.id)}
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

export default BuildingsList
