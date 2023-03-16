import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom'
import './scss/style.scss'

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const PrivateRoutes = React.lazy(() => import('./PrivateRoutes'))

//blog page
const Allblogs = React.lazy(() => import('./views/blogs/all_blogs'))
const Addblogs = React.lazy(() => import('./views/blogs/add_blogs'))
const Updateblogs = React.lazy(() => import('./views/blogs/update_blogs'))

function App(){
  // const location = useLocation();
  // const protectedHeader = () => {
  //   switch (location.pathname) {
  //     case "/login":
  //       return null;
  //     case "/404":
  //       return null;
  //     default:
  //       return <DefaultLayout />;
  //   }
  // };

    return (
      <>
      {/* {protectedHeader()}  */}
      
      <BrowserRouter>
      {/* {protectedHeader()} */}
      {/* <div className="w-full flex flex-col"> */}
        {/* <Suspense fallback={loading}> */}
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route exact path="/login" name="Login Page" element={<Login />} ></Route>
            <Route exact path="/404" name="Page 404" element={<Page404 />} ></Route>
            {/* <Route exact path="/blogs/all_blogs" name="View all blogs" element={<Allblogs />} ></Route>
            <Route exact path="/blogs/add_blog" name="Add new blog" element={<Addblogs />} ></Route>
            <Route exact path="/blogs/update_blog/:id" name="update blog" element={<Updateblogs />} ></Route> */}
            
          </Routes>
        {/* </Suspense> */}
        {/* </div> */}
      </BrowserRouter>

      </>
    )
  };

export default App
