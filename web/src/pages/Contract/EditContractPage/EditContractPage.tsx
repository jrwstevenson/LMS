import EditContractCell from "src/components/Contract/EditContractCell"

type ContractPageProps = {
  id: number
}

const EditContractPage = ({ id }: ContractPageProps) => {
  return <EditContractCell id={id} />
}

export default EditContractPage
