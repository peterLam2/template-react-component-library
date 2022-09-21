import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Leftside } from "./Leftside"
import { PageLoader } from "./PageLoader"
import { Rightside } from "./Rightside"


type LayoutProps = React.ComponentProps<"div"> &{
    loaderImage?:string,

}


const CustomHexaBitTemplateLayout = (props: LayoutProps) => {
    return <>
        <PageLoader loaderImage={props.loaderImage}/>
        <div id="wrapper">
            <div className="overlay" />
            <Header />
            <Rightside />
            <Leftside />
            {/* mainContent */}
            <Outlet />

        </div></>
}

export default CustomHexaBitTemplateLayout