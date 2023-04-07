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

import type { EditJobById, UpdateJobInput } from "types/graphql"
import type { RWGqlError } from "@redwoodjs/forms"

const formatDatetime = value => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, "")
  }
}

type FormJob = NonNullable<EditJobById["job"]>

interface JobFormProps {
  job?: EditJobById["job"]
  onSave: (data: UpdateJobInput, id?: FormJob["id"]) => void
  error: RWGqlError
  loading: boolean
}

const JobForm = (props: JobFormProps) => {
  const onSubmit = (data: FormJob) => {
    props.onSave(data, props?.job?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormJob> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.job?.name}
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
          defaultValue={props.job?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label name="date" className="rw-label" errorClassName="rw-label rw-label-error">
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.job?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="date" className="rw-field-error" />

        <Label name="amount" className="rw-label" errorClassName="rw-label rw-label-error">
          Amount
        </Label>

        <TextField
          name="amount"
          defaultValue={props.job?.amount}
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
          defaultValue={props.job?.buildingId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="buildingId" className="rw-field-error" />

        <Label name="companyId" className="rw-label" errorClassName="rw-label rw-label-error">
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.job?.companyId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="companyId" className="rw-field-error" />

        <Label name="contractId" className="rw-label" errorClassName="rw-label rw-label-error">
          Contract id
        </Label>

        <NumberField
          name="contractId"
          defaultValue={props.job?.contractId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="contractId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default JobForm
