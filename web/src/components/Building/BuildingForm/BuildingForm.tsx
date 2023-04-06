import { Form, FormError, FieldError, Label, TextField, Submit } from "@redwoodjs/forms"

import type { EditBuildingById, UpdateBuildingInput } from "types/graphql"
import type { RWGqlError } from "@redwoodjs/forms"

type FormBuilding = NonNullable<EditBuildingById["building"]>

interface BuildingFormProps {
  building?: EditBuildingById["building"]
  onSave: (data: UpdateBuildingInput, id?: FormBuilding["id"]) => void
  error: RWGqlError
  loading: boolean
}

const BuildingForm = (props: BuildingFormProps) => {
  const onSubmit = (data: FormBuilding) => {
    props.onSave(data, props?.building?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormBuilding> onSubmit={onSubmit} error={props.error}>
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
          defaultValue={props.building?.name}
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
          defaultValue={props.building?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label name="description" className="rw-label" errorClassName="rw-label rw-label-error">
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.building?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label name="address" className="rw-label" errorClassName="rw-label rw-label-error">
          Address
        </Label>

        <TextField
          name="address"
          defaultValue={props.building?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="address" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default BuildingForm
