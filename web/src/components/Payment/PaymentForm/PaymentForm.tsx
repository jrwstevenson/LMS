import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from "@redwoodjs/forms"

import type { EditPaymentById, UpdatePaymentInput } from "types/graphql"
import type { RWGqlError } from "@redwoodjs/forms"

const formatDatetime = value => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, "")
  }
}

type FormPayment = NonNullable<EditPaymentById["payment"]>

interface PaymentFormProps {
  payment?: EditPaymentById["payment"]
  onSave: (data: UpdatePaymentInput, id?: FormPayment["id"]) => void
  error: RWGqlError
  loading: boolean
}

const PaymentForm = (props: PaymentFormProps) => {
  const onSubmit = (data: FormPayment) => {
    props.onSave(data, props?.payment?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormPayment> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label name="amount" className="rw-label" errorClassName="rw-label rw-label-error">
          Amount
        </Label>

        <TextField
          name="amount"
          defaultValue={props.payment?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="amount" className="rw-field-error" />

        <Label name="date" className="rw-label" errorClassName="rw-label rw-label-error">
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.payment?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="date" className="rw-field-error" />

        <Label name="note" className="rw-label" errorClassName="rw-label rw-label-error">
          Note
        </Label>

        <TextField
          name="note"
          defaultValue={props.payment?.note}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="note" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PaymentForm
