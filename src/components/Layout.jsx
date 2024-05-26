import { Outlet, Link, useLocation } from "react-router-dom" 
import { RxLinkedinLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx"
import { FaFacebook } from "react-icons/fa6";

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <nav className="py-3 text-white bg-[#262525]">
                <div className="flex items-center w-4/5 mx-auto">
                    <div>
                        <Link to='/'>
                            <img 
                                src="/imgs/tecnolag_largo.png" 
                                alt="Logo Tecnolag" 
                                className="md:w-[35%] lg:w-[25%] mt-1"
                            />
                        </Link>
                    </div>
                    <div className="flex gap-12 text-lg">
                        <Link 
                            className={`${location.pathname === '/sobre-nosotros'? 'font-bold': 'font-normal' } w-36`}
                            to='/sobre-nosotros'
                        >
                            Sobre Nosotros
                        </Link>

                        <Link
                            className={location.pathname === '/servicios'? 'font-bold': 'font-normal'}
                            to='/servicios'
                        >
                            Servicios
                        </Link>

                        <Link
                            className={location.pathname === '/productos'? 'font-bold': 'font-normal'}
                            to='/productos'
                        >
                            Productos
                        </Link>

                        <Link
                            className={location.pathname === '/contactanos'? 'font-bold': 'font-normal'}
                            to='/contactanos'
                        >
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet/>
            </main>


            <footer className="bg-[#262525] text-white">
                <div className="grid items-center w-2/3 grid-cols-2 gap-20 py-2 mx-auto">
                    <div>
                        <img 
                            src="/imgs/tecnolag_largo.png" 
                            alt="Logo TecnoLag"
                        />
                    </div>
                    <div className="space-y-4 text-lg">
                        <h2 className="text-xl">Síguenos:</h2>

                        <p className="flex items-center gap-2">
                            <span><RxLinkedinLogo size={40}/></span>
                            TecnoLag
                        </p>

                        <p className="flex items-center gap-2">
                            <span><RxTwitterLogo size={40}/></span>
                            @tecnolag
                        </p>
                        
                        <p className="flex items-center gap-2">
                            <span><FaFacebook size={40}/></span>
                            TecnoLag
                        </p>

                        <p className="flex items-center gap-2">
                            <span><RxInstagramLogo size={40}/></span>
                            tecnolag
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Layout