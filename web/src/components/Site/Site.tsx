import { Link, routes } from "@redwoodjs/router"
import { Building } from "types/graphql"

interface Props {
  site: Building
}

const Site = ({ site }: Props) => {
  return (
    <div key={site.id}>
      <header>
        <h2>
          <Link to={routes.site({ id: site.id })}>{site.name}</Link>
        </h2>
      </header>
      <p>{site.description}</p>
      <div>Posted at: {site.createdAt}</div>
      <div>Address: {site.address}</div>
    </div>
  )
}

export default Site
