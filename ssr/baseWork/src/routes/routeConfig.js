import Home  from  "@/pages/Home"
import Movies  from  "@/pages/Movies"
import NotFound  from  "@/pages/NotFound"
import Front from "@/pages/Front"
import Admin from '@/pages/Admin'
import AdminSystem from '@/pages/Admin/SystemManage'
export default [
    {
        key:"admin",
        path:"/admin",
        component:Admin,
        routes:[
            {
                key:'adminsystem',
                path:'/adminsystem',
                exact:true,
                component:AdminSystem
            }
        ]
    },
    { 
        key:"front",
        path:'/',
        component:Front,
        routes:[
            {
                key:'home',
                path:'/',
                exact:true,
                component:Home
            },
            {
                key:"movies",
                path:'/movies',
                exact:true,
                component:Movies
            },
            {
                key:"notfound",
                component:NotFound
            }
        ]
    },

]