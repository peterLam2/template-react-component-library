import React, { useEffect } from 'react'



type PageLoaderProps = React.ComponentProps<'div'> & {
    loaderImage?: string,
}

export function PageLoader({ loaderImage = "./assets/images/icon-light.svg", ...props }: PageLoaderProps) {

    useEffect(() => {
        var loaderwrapper = document.getElementsByClassName('page-loader-wrapper');
        var loader = document.getElementsByClassName('loader');
        window.setTimeout(() => {
            while (loaderwrapper.length > 0) {
                loaderwrapper[0].parentNode!.removeChild(loaderwrapper[0]);
            }
            while (loader.length > 0) {
                loader[0].parentNode!.removeChild(loader[0]);
            }
        }, 2000)
    })

    return (
        <>
            <div className="page-loader-wrapper">
                <div className="loader" >
                    <div className="m-t-30"><img src={loaderImage} width="48" height="48" alt="HexaBit"></img></div>
                    <p>Please wait...</p>
                </div>
            </div>
        </>
    )
}