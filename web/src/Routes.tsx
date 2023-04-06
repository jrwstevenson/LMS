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
      <Set wrap={ScaffoldLayout} title="Payments" titleTo="payments" buttonLabel="New Payment" buttonTo="newPayment">
        <Route path="/payments/new" page={PaymentNewPaymentPage} name="newPayment" />
        <Route path="/payments/{id:Int}/edit" page={PaymentEditPaymentPage} name="editPayment" />
        <Route path="/payments/{id:Int}" page={PaymentPaymentPage} name="payment" />
        <Route path="/payments" page={PaymentPaymentsPage} name="payments" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Contacts" titleTo="contacts" buttonLabel="New Contact" buttonTo="newContact">
        <Route path="/contacts/new" page={ContactNewContactPage} name="newContact" />
        <Route path="/contacts/{id:Int}/edit" page={ContactEditContactPage} name="editContact" />
        <Route path="/contacts/{id:Int}" page={ContactContactPage} name="contact" />
        <Route path="/contacts" page={ContactContactsPage} name="contacts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
        <Route path="/companies/new" page={CompanyNewCompanyPage} name="newCompany" />
        <Route path="/companies/{id:Int}/edit" page={CompanyEditCompanyPage} name="editCompany" />
        <Route path="/companies/{id:Int}" page={CompanyCompanyPage} name="company" />
        <Route path="/companies" page={CompanyCompaniesPage} name="companies" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Jobs" titleTo="jobs" buttonLabel="New Job" buttonTo="newJob">
        <Route path="/jobs/new" page={JobNewJobPage} name="newJob" />
        <Route path="/jobs/{id:Int}/edit" page={JobEditJobPage} name="editJob" />
        <Route path="/jobs/{id:Int}" page={JobJobPage} name="job" />
        <Route path="/jobs" page={JobJobsPage} name="jobs" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Contracts" titleTo="contracts" buttonLabel="New Contract" buttonTo="newContract">
        <Route path="/contracts/new" page={ContractNewContractPage} name="newContract" />
        <Route path="/contracts/{id:Int}/edit" page={ContractEditContractPage} name="editContract" />
        <Route path="/contracts/{id:Int}" page={ContractContractPage} name="contract" />
        <Route path="/contracts" page={ContractContractsPage} name="contracts" />
      </Set>
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
