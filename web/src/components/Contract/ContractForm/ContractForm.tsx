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

import type { EditContractById, UpdateContractInput } from "types/graphql"
import type { RWGqlError } from "@redwoodjs/forms"

const formatDatetime = value => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, "")
  }
}

type FormContract = NonNullable<EditContractById["contract"]>

interface ContractFormProps {
  contract?: EditContractById["contract"]
  onSave: (data: UpdateContractInput, id?: FormContract["id"]) => void
  error: RWGqlError
  loading: boolean
}

const ContractForm = (props: ContractFormProps) => {
  const onSubmit = (data: FormContract) => {
    props.onSave(data, props?.contract?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormContract> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label name="name" className="rw-label" errorClassName="rw-label rw-label-error">
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.contract?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label name="notes" className="rw-label" errorClassName="rw-label rw-label-error">
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.contract?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label name="startDate" className="rw-label" errorClassName="rw-label rw-label-error">
          Start date
        </Label>

        <DatetimeLocalField
          name="startDate"
          defaultValue={formatDatetime(props.contract?.startDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="startDate" className="rw-field-error" />

        <Label name="endDate" className="rw-label" errorClassName="rw-label rw-label-error">
          End date
        </Label>

        <DatetimeLocalField
          name="endDate"
          defaultValue={formatDatetime(props.contract?.endDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="endDate" className="rw-field-error" />

        <Label name="amount" className="rw-label" errorClassName="rw-label rw-label-error">
          Amount
        </Label>

        <TextField
          name="amount"
          defaultValue={props.contract?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true }}
        />

        <FieldError name="amount" className="rw-field-error" />

        <Label name="buildingId" className="rw-label" errorClassName="rw-label rw-label-error">
          Building id
        </Label>

        <NumberField
          name="buildingId"
          defaultValue={props.contract?.buildingId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="buildingId" className="rw-field-error" />

        <Label name="companyId" className="rw-label" errorClassName="rw-label rw-label-error">
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.contract?.companyId}
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

export default ContractForm
