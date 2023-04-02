import { MetaTags } from "@redwoodjs/web"
import SiteCell from "src/components/SiteCell"

interface Props {
  id: number
}

const SitePage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Site" description="Site page" />
      <SiteCell id={id} />
    </>
  )
}

export default SitePage
