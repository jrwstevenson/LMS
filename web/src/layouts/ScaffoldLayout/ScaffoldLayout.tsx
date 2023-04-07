import { Link, routes } from "@redwoodjs/router"
import { Toaster } from "@redwoodjs/web/toast"

type LayoutProps = {
  title: string
  titleTo: string
  buttonLabel?: string
  buttonTo?: string
  children: React.ReactNode
}

const ScaffoldLayout = ({ title, titleTo, buttonLabel, buttonTo, children }: LayoutProps) => {
  const navigation = [
    {
      href: routes.admin(),
      name: "Admin",
    },
    {
      href: routes.buildings(),
      name: "Buildings",
    },
    {
      href: routes.contracts(),
      name: "Contracts",
    },
    {
      href: routes.jobs(),
      name: "Jobs",
    },
    {
      href: routes.companies(),
      name: "Companies",
    },
    {
      href: routes.contacts(),
      name: "Contacts",
    },
    {
      href: routes.payments(),
      name: "Payments",
    },
    {
      href: routes.categories(),
      name: "Categories",
    },
  ]

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 pt-4 md:px-8">
        <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} />
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold text-gray-800">
            <Link to={routes.home()}>LMS</Link>
          </h3>
          {buttonLabel && buttonTo && (
            <Link to={routes[buttonTo]()} className="rw-button rw-button-green">
              <div className="rw-button-icon">+</div> {buttonLabel}
            </Link>
          )}
        </div>
        <div className="mb-8 mt-6">
          <ul className="flex w-full items-center gap-x-3 overflow-x-auto border-b">
            {navigation.map((item, idx) => (
              // Replace [idx == 0] with [window.location.pathname == item.path] or create your own logic
              <li
                key={idx}
                className={`border-b-2 py-2 ${
                  window.location.pathname === item.href
                    ? "border-indigo-600 text-indigo-600"
                    : "border-white text-gray-500"
                }`}
              >
                <a
                  href={item.href}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium duration-150 hover:bg-gray-50 hover:text-indigo-600 active:bg-gray-100"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <main className="rw-main">{children}</main>
      </div>
    </>
  )
}

export default ScaffoldLayout
