import { navigate, routes } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import BuildingForm from "src/components/Building/BuildingForm"

import type { CreateBuildingInput } from "types/graphql"

const CREATE_BUILDING_MUTATION = gql`
  mutation CreateBuildingMutation($input: CreateBuildingInput!) {
    createBuilding(input: $input) {
      id
    }
  }
`

const NewBuilding = () => {
  const [createBuilding, { loading, error }] = useMutation(CREATE_BUILDING_MUTATION, {
    onCompleted: () => {
      toast.success("Building created")
      navigate(routes.buildings())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateBuildingInput) => {
    createBuilding({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Building</h2>
      </header>
      <div className="rw-segment-main">
        <BuildingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewBuilding
