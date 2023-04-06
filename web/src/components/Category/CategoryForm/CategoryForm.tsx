import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from "@redwoodjs/forms"

import type { EditCategoryById, UpdateCategoryInput } from "types/graphql"
import type { RWGqlError } from "@redwoodjs/forms"

type FormCategory = NonNullable<EditCategoryById["category"]>

interface CategoryFormProps {
  category?: EditCategoryById["category"]
  onSave: (data: UpdateCategoryInput, id?: FormCategory["id"]) => void
  error: RWGqlError
  loading: boolean
}

const CategoryForm = (props: CategoryFormProps) => {
  const onSubmit = (data: FormCategory) => {
    props.onSave(data, props?.category?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCategory> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.category?.name}
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
          defaultValue={props.category?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label name="contractId" className="rw-label" errorClassName="rw-label rw-label-error">
          Contract id
        </Label>

        <NumberField
          name="contractId"
          defaultValue={props.category?.contractId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="contractId" className="rw-field-error" />

        <Label name="jobId" className="rw-label" errorClassName="rw-label rw-label-error">
          Job id
        </Label>

        <NumberField
          name="jobId"
          defaultValue={props.category?.jobId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="jobId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CategoryForm
