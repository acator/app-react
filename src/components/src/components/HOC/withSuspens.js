import React, { Suspense } from 'react'
import Loading from '../comman/loading/loading'

 export const withSuspense  = (Component) => {
     return (props) => {
        return <Suspense fallback={<Loading />}><Component {...props} /></Suspense>
   
     }  
}
