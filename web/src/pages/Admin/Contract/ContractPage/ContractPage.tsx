import ContractCell from "src/components/Contract/ContractCell"

type ContractPageProps = {
  id: number
}

const ContractPage = ({ id }: ContractPageProps) => {
  return <ContractCell id={id} />
}

export default ContractPage
