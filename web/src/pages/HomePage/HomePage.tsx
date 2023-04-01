import { MetaTags } from "@redwoodjs/web"
import BuildingsCell from "src/components/BuildingsCell/BuildingsCell"

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <BuildingsCell />
    </>
  )
}

export default HomePage
