import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
    const [open, setopen] = useState(false)
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/contact', name: 'Contact', id: 3 },
        { path: '/products/:productId', name: 'Product Details', id: 4 },
        { path: '/404', name: 'Page Not Found', id: 5 }];

    return (
        <nav className="black bg-yellow-200 p-6">
            <div className="text-2xl md:hidden" onClick={() => setopen(!open)}>
                {
                    open === !true ?
                        <AiOutlineClose></AiOutlineClose>
                        : <AiOutlineMenu></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-16' : '-top-60'} bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;