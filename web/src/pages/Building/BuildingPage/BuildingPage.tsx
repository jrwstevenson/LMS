import BuildingCell from "src/components/Building/BuildingCell"

type BuildingPageProps = {
  id: number
}

const BuildingPage = ({ id }: BuildingPageProps) => {
  return <BuildingCell id={id} />
}

export default BuildingPage
