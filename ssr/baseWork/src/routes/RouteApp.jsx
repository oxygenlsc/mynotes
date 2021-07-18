import React from 'react'
import Header from '@/components/Header'
import routes from './routeConfig'
import {renderRoutes} from 'react-router-config'
export default  function RouteApp(){
    return <div>
                {renderRoutes(routes)}
            </div>
    
   

}
