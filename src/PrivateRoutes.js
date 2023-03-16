import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = {'userInfo':false}
    return(
        auth.userInfo ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes