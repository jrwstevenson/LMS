import EditPaymentCell from "src/components/Payment/EditPaymentCell"

type PaymentPageProps = {
  id: number
}

const EditPaymentPage = ({ id }: PaymentPageProps) => {
  return <EditPaymentCell id={id} />
}

export default EditPaymentPage
