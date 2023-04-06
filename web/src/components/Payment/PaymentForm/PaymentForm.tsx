import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
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

        <Label name="contractId" className="rw-label" errorClassName="rw-label rw-label-error">
          Contract id
        </Label>

        <NumberField
          name="contractId"
          defaultValue={props.payment?.contractId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="contractId" className="rw-field-error" />

        <Label name="jobId" className="rw-label" errorClassName="rw-label rw-label-error">
          Job id
        </Label>

        <NumberField
          name="jobId"
          defaultValue={props.payment?.jobId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jobId" className="rw-field-error" />

        <Label name="contactId" className="rw-label" errorClassName="rw-label rw-label-error">
          Contact id
        </Label>

        <NumberField
          name="contactId"
          defaultValue={props.payment?.contactId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="contactId" className="rw-field-error" />

        <Label name="companyId" className="rw-label" errorClassName="rw-label rw-label-error">
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.payment?.companyId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="companyId" className="rw-field-error" />

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
