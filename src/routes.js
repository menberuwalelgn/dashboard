import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))

//blog page
const Allblogs = React.lazy(() => import('./views/blogs/all_blogs'))
const Addblogs = React.lazy(() => import('./views/blogs/add_blogs'))
const Updateblogs = React.lazy(() => import('./views/blogs/update_blogs'))

//letter page
const Allletter = React.lazy(() => import('./views/letter/all_letter'))
const Addletter = React.lazy(() => import('./views/letter/add_letter'))
const Sendletter = React.lazy(() => import('./views/letter/send_letter/send_letter'))

//purchase contract form
const AllPurchaseContract = React.lazy(() => import('./views/contract/Purchase_contract/all_purchase_contract'))
const AddPurchaseContract = React.lazy(() => import('./views/contract/Purchase_contract/add_purchase_contract'))
const SendPurchaseContract = React.lazy(() => import('./views/contract/Purchase_contract/send_purchase_contract'))

//employment contract form
const AllEmploymentContract = React.lazy(() => import('./views/contract/Employment_contract/all_employment_contract'))
const AddEmploymentContract = React.lazy(() => import('./views/contract/Employment_contract/add_employment_contract'))
const SendEmploymentContract = React.lazy(() => import('./views/contract/Employment_contract/send_employment_contract'))

//users page
const Allusers = React.lazy(() => import('./views/users/users_list/users_list'))
const Addusers = React.lazy(() => import('./views/users/add_user/add_user'))

//vacancy page
const AllVacancy = React.lazy(() => import('./views/vacancy/all_vacancy/all_vacancy'))
const AddVacancy = React.lazy(() => import('./views/vacancy/add_vacancy/add_vaccancy'))


{/* <Suspense fallback={loading}>
<Routes>
  <Route exact path="/login" name="Login Page" element={<Login />} />
  <Route exact path="/404" name="Page 404" element={<Page404 />} />
  <Route path="*" name="Home" element={<DefaultLayout />} />
</Routes>
</Suspense> */}

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/tables', name: 'Tables', element: Tables },

  
  { path: '/blogs', name: 'blogs', element: Allblogs, exact: true },
  { path: '/blogs/all_blogs', name: 'all blogs', element: Allblogs },
  { path: '/blogs/add_blog', name: 'Add new blog', element: Addblogs },
  { path: '/blogs/update_blog/:id', name: 'Update blog', element: Updateblogs },

  { path: '/letter', name: 'letter', element: Allletter, exact: true },
  { path: '/letter/all_letter', name: 'all letter', element: Allletter },
  { path: '/letter/add_letter', name: 'Add new letter', element: Addletter },
  { path: '/letter/send_letter', name: 'Send new letter', element: Sendletter },

  { path: '/contract', name: 'contract', element: AllPurchaseContract, exact: true },
  { path: '/contract/Purchase_contract/all_purchase_contract', name: 'all purchase contract', element: AllPurchaseContract },
  { path: '/contract/Purchase_contract/add_purchase_contract', name: 'Add new purchase contract', element: AddPurchaseContract },
  { path: '/contract/Purchase_contract/send_purchase_contract', name: 'Send new purchase contract', element: SendPurchaseContract },

  { path: '/contract', name: 'contract', element: AllEmploymentContract, exact: true },
  { path: '/contract/Employment_contract/all_employment_contract', name: 'all Employment contract', element: AllEmploymentContract },
  { path: '/contract/Employment_contract/add_employment_contract', name: 'Add new Employment contract', element: AddEmploymentContract },
  { path: '/contract/Employment_contract/send_employment_contract', name: 'Send new Employment contract', element: SendEmploymentContract },

  { path: '/users', name: 'users', element: Allusers, exact: true },
  { path: '/users/users_list', name: 'all users', element: Allusers },
  { path: '/users/add_user', name: 'Add new user', element: Addusers },

  { path: '/vacancy', name: 'vacancy', element: AllVacancy, exact: true },
  { path: '/vacancy/all_vacancy', name: 'all vacancy', element: AllVacancy },
  { path: '/vacancy/add_vacancy', name: 'Add new vacancy', element: AddVacancy },
]

export default routes


