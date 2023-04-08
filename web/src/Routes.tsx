// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from "@redwoodjs/router"

import AdminLayout from "src/layouts/AdminLayout"
import MainLayout from "src/layouts/MainLayout"

import { useAuth } from "./auth"

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      {/* Auth */}
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      {/* <Route path="/signup" page={SignupPage} name="signup" /> */}
      {/* Main */}
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/site/{id:Int}" page={SitePage} name="site" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/contact-us" page={ContactPage} name="contactUs" />
      </Set>
      {/* Admin */}
      <Private unauthenticated="home">
        <Set wrap={AdminLayout} title="Admin" titleTo="admin">
          <Route path="/admin" page={AdminAdminPage} name="admin" />
        </Set>
        <Set wrap={AdminLayout} title="Payments" titleTo="payments" buttonLabel="New Payment" buttonTo="newPayment">
          <Route path="/admin/payments/new" page={AdminPaymentNewPaymentPage} name="newPayment" />
          <Route path="/admin/payments/{id:Int}/edit" page={AdminPaymentEditPaymentPage} name="editPayment" />
          <Route path="/admin/payments/{id:Int}" page={AdminPaymentPaymentPage} name="payment" />
          <Route path="/admin/payments" page={AdminPaymentPaymentsPage} name="payments" />
        </Set>
        <Set wrap={AdminLayout} title="Contacts" titleTo="contacts" buttonLabel="New Contact" buttonTo="newContact">
          <Route path="/admin/contacts/new" page={AdminContactNewContactPage} name="newContact" />
          <Route path="/admin/contacts/{id:Int}/edit" page={AdminContactEditContactPage} name="editContact" />
          <Route path="/admin/contacts/{id:Int}" page={AdminContactContactPage} name="contact" />
          <Route path="/admin/contacts" page={AdminContactContactsPage} name="contacts" />
        </Set>
        <Set wrap={AdminLayout} title="Companies" titleTo="companies" buttonLabel="New Company" buttonTo="newCompany">
          <Route path="/admin/companies/new" page={AdminCompanyNewCompanyPage} name="newCompany" />
          <Route path="/admin/companies/{id:Int}/edit" page={AdminCompanyEditCompanyPage} name="editCompany" />
          <Route path="/admin/companies/{id:Int}" page={AdminCompanyCompanyPage} name="company" />
          <Route path="/admin/companies" page={AdminCompanyCompaniesPage} name="companies" />
        </Set>
        <Set wrap={AdminLayout} title="Jobs" titleTo="jobs" buttonLabel="New Job" buttonTo="newJob">
          <Route path="/admin/jobs/new" page={AdminJobNewJobPage} name="newJob" />
          <Route path="/admin/jobs/{id:Int}/edit" page={AdminJobEditJobPage} name="editJob" />
          <Route path="/admin/jobs/{id:Int}" page={AdminJobJobPage} name="job" />
          <Route path="/admin/jobs" page={AdminJobJobsPage} name="jobs" />
        </Set>
        <Set wrap={AdminLayout} title="Contracts" titleTo="contracts" buttonLabel="New Contract" buttonTo="newContract">
          <Route path="/admin/contracts/new" page={AdminContractNewContractPage} name="newContract" />
          <Route path="/admin/contracts/{id:Int}/edit" page={AdminContractEditContractPage} name="editContract" />
          <Route path="/admin/contracts/{id:Int}" page={AdminContractContractPage} name="contract" />
          <Route path="/admin/contracts" page={AdminContractContractsPage} name="contracts" />
        </Set>
        <Set wrap={AdminLayout} title="Categories" titleTo="categories" buttonLabel="New Category" buttonTo="newCategory">
          <Route path="/admin/categories/new" page={AdminCategoryNewCategoryPage} name="newCategory" />
          <Route path="/admin/categories/{id:Int}/edit" page={AdminCategoryEditCategoryPage} name="editCategory" />
          <Route path="/admin/categories/{id:Int}" page={AdminCategoryCategoryPage} name="category" />
          <Route path="/admin/categories" page={AdminCategoryCategoriesPage} name="categories" />
        </Set>
        <Set wrap={AdminLayout} title="Buildings" titleTo="buildings" buttonLabel="New Building" buttonTo="newBuilding">
          <Route path="/admin/buildings/new" page={AdminBuildingNewBuildingPage} name="newBuilding" />
          <Route path="/admin/buildings/{id:Int}/edit" page={AdminBuildingEditBuildingPage} name="editBuilding" />
          <Route path="/admin/buildings/{id:Int}" page={AdminBuildingBuildingPage} name="building" />
          <Route path="/admin/buildings" page={AdminBuildingBuildingsPage} name="buildings" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
