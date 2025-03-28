import {Header} from "./Header"
import {Footer} from "./Footer"
import { Outlet, useNavigation } from "react-router-dom"
export const AppLayout = ()=>{
    const navigate = useNavigation()
    // console.log(navigate);
    if(navigate.state ==="loading") return <h1>Loading....</h1>
    
    return(
       <div className="app-container">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}