import PaymentCell from "src/components/Payment/PaymentCell"

type PaymentPageProps = {
  id: number
}

const PaymentPage = ({ id }: PaymentPageProps) => {
  return <PaymentCell id={id} />
}

export default PaymentPage
