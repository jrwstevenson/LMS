// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from "@redwoodjs/router"

import ScaffoldLayout from "src/layouts/ScaffoldLayout"

import MainLayout from "src/layouts/MainLayout"

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Buildings" titleTo="buildings" buttonLabel="New Building" buttonTo="newBuilding">
        <Route path="/buildings/new" page={BuildingNewBuildingPage} name="newBuilding" />
        <Route path="/buildings/{id:Int}/edit" page={BuildingEditBuildingPage} name="editBuilding" />
        <Route path="/buildings/{id:Int}" page={BuildingBuildingPage} name="building" />
        <Route path="/buildings" page={BuildingBuildingsPage} name="buildings" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/site/{id:Int}" page={SitePage} name="site" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
