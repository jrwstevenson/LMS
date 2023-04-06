// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import ScaffoldLayout from "src/layouts/ScaffoldLayout"

import MainLayout from "src/layouts/MainLayout"

import { useAuth } from "./auth"

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Categories" titleTo="categories" buttonLabel="New Category" buttonTo="newCategory">
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout} title="Buildings" titleTo="buildings" buttonLabel="New Building" buttonTo="newBuilding">
          <Route path="/admin/buildings/new" page={BuildingNewBuildingPage} name="newBuilding" />
          <Route path="/admin/buildings/{id:Int}/edit" page={BuildingEditBuildingPage} name="editBuilding" />
          <Route path="/admin/buildings/{id:Int}" page={BuildingBuildingPage} name="building" />
          <Route path="/admin/buildings" page={BuildingBuildingsPage} name="buildings" />
        </Set>
      </Private>
      <Set wrap={MainLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/site/{id:Int}" page={SitePage} name="site" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
      {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
    </Router>
  )
}

export default Routes
