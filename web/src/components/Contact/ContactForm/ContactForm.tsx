import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from "@redwoodjs/forms"

import type { EditContactById, UpdateContactInput } from "types/graphql"
import type { RWGqlError } from "@redwoodjs/forms"

type FormContact = NonNullable<EditContactById["contact"]>

interface ContactFormProps {
  contact?: EditContactById["contact"]
  onSave: (data: UpdateContactInput, id?: FormContact["id"]) => void
  error: RWGqlError
  loading: boolean
}

const ContactForm = (props: ContactFormProps) => {
  const onSubmit = (data: FormContact) => {
    props.onSave(data, props?.contact?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormContact> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.contact?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label name="email" className="rw-label" errorClassName="rw-label rw-label-error">
          Email
        </Label>

        <TextField
          name="email"
          defaultValue={props.contact?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="email" className="rw-field-error" />

        <Label name="phone" className="rw-label" errorClassName="rw-label rw-label-error">
          Phone
        </Label>

        <TextField
          name="phone"
          defaultValue={props.contact?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="phone" className="rw-field-error" />

        <Label name="notes" className="rw-label" errorClassName="rw-label rw-label-error">
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.contact?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label name="contractId" className="rw-label" errorClassName="rw-label rw-label-error">
          Contract id
        </Label>

        <NumberField
          name="contractId"
          defaultValue={props.contact?.contractId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="contractId" className="rw-field-error" />

        <Label name="jobId" className="rw-label" errorClassName="rw-label rw-label-error">
          Job id
        </Label>

        <NumberField
          name="jobId"
          defaultValue={props.contact?.jobId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jobId" className="rw-field-error" />

        <Label name="companyId" className="rw-label" errorClassName="rw-label rw-label-error">
          Company id
        </Label>

        <NumberField
          name="companyId"
          defaultValue={props.contact?.companyId}
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

export default ContactForm
