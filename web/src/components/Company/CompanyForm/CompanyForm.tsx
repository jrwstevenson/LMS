import { Form, FormError, FieldError, Label, TextField, Submit } from "@redwoodjs/forms"

import type { EditCompanyById, UpdateCompanyInput } from "types/graphql"
import type { RWGqlError } from "@redwoodjs/forms"

type FormCompany = NonNullable<EditCompanyById["company"]>

interface CompanyFormProps {
  company?: EditCompanyById["company"]
  onSave: (data: UpdateCompanyInput, id?: FormCompany["id"]) => void
  error: RWGqlError
  loading: boolean
}

const CompanyForm = (props: CompanyFormProps) => {
  const onSubmit = (data: FormCompany) => {
    props.onSave(data, props?.company?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCompany> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.company?.name}
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
          defaultValue={props.company?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CompanyForm
