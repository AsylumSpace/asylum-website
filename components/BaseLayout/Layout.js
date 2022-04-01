import Header from "./Header";

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                    {children}
            </main>
            {/*<Footer nav={footerNav}/>*/}
        </>
    )
}

export default Layout