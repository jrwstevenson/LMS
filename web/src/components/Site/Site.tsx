import { Link, routes } from "@redwoodjs/router"
import { Building } from "types/graphql"

interface Props {
  site: Building
}

const Site = ({ site }: Props) => {
  return (
    <div key={site.id}>
      <header className="text-xl font-semibold text-blue-700">
        <h2>
          <Link to={routes.site({ id: site.id })}>{site.name}</Link>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">
        <p>{site.description}</p>
        <div>Posted at: {site.createdAt}</div>
        <div>Address: {site.address}</div>
      </div>
    </div>
  )
}

export default Site
