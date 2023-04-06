import { Link, routes, navigate } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"
import { toast } from "@redwoodjs/web/toast"

import { timeTag } from "src/lib/formatters"

import type { DeleteJobMutationVariables, FindJobById } from "types/graphql"

const DELETE_JOB_MUTATION = gql`
  mutation DeleteJobMutation($id: Int!) {
    deleteJob(id: $id) {
      id
    }
  }
`

interface Props {
  job: NonNullable<FindJobById["job"]>
}

const Job = ({ job }: Props) => {
  const [deleteJob] = useMutation(DELETE_JOB_MUTATION, {
    onCompleted: () => {
      toast.success("Job deleted")
      navigate(routes.jobs())
    },
    onError: error => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteJobMutationVariables["id"]) => {
    if (confirm("Are you sure you want to delete job " + id + "?")) {
      deleteJob({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Job {job.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{job.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{job.name}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{job.notes}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(job.date)}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{job.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link to={routes.editJob({ id: job.id })} className="rw-button rw-button-blue">
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(job.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Job
