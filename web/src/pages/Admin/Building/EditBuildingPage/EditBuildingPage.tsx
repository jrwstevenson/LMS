import EditBuildingCell from "src/components/Building/EditBuildingCell"

type BuildingPageProps = {
  id: number
}

const EditBuildingPage = ({ id }: BuildingPageProps) => {
  return <EditBuildingCell id={id} />
}

export default EditBuildingPage
