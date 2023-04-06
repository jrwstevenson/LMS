import type { EditBuildingById, UpdateBuildingInput } from "types/graphql"

import { navigate, routes } from "@redwoodjs/router"
import type { CellSuccessProps, CellFailureProps } from "@redwoodjs/web"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import BuildingForm from "src/components/Building/BuildingForm"

export const QUERY = gql`
  query EditBuildingById($id: Int!) {
    building: building(id: $id) {
      id
      name
      notes
      description
      address
      createdAt
    }
  }
`
const UPDATE_BUILDING_MUTATION = gql`
  mutation UpdateBuildingMutation($id: Int!, $input: UpdateBuildingInput!) {
    updateBuilding(id: $id, input: $input) {
      id
      name
      notes
      description
      address
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ building }: CellSuccessProps<EditBuildingById>) => {
  const [updateBuilding, { loading, error }] = useMutation(UPDATE_BUILDING_MUTATION, {
    onCompleted: () => {
      toast.success("Building updated")
      navigate(routes.buildings())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateBuildingInput, id: EditBuildingById["building"]["id"]) => {
    updateBuilding({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Building {building?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <BuildingForm building={building} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
