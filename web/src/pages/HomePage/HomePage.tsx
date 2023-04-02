import { MetaTags } from "@redwoodjs/web"
import SitesCell from "src/components/SitesCell"

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <SitesCell />
    </>
  )
}

export default HomePage
