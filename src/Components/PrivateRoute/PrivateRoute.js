import React, { useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import useAuthContext from '../AuthContext/UseAuthContext';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isLoading} = useAuthContext();

    // if (isLoading) {
    //     return <div>Loading....</div>
    // }
    



    // if (!user.email) {
    //     return <div className='loading'>Loading...</div>
    // }
    console.log(user);










    return (
        <Route
        {...rest}
      render={({location})=>user.email?(children):<Redirect to={{
          pathname:"/login",
          state:{from: location}
      }}></Redirect>}
        
        >


        </Route>
    );
};

export default PrivateRoute;