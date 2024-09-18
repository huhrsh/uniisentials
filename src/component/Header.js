import { Link, Outlet } from "react-router-dom";
import profile from "../assets/images/user.png"
import cart from "../assets/images/shopping-cart.png"
import heart from "../assets/images/heart (1).png"
import Footer from "./Footer";

export default function Header() {

    const navItems = [
        { img:cart ,name: "cart", path: "/cart" },
        { img:heart ,name: "wishlist", path: "/wishlist" },
        { img:profile ,name: "profile", path: "/profile" },
    ]

    return (
        <>
            <header className="flex px-12 justify-between sticky top-0 z-50 bg-white h-20 items-center border-b w-screen">
                <Link to='/' className="uppercase text-3xl font-extrabold tracking-widest">Uniiessentials</Link>
                <div className="gap-8 flex justify-between">
                    {navItems.map((nav, index) => (
                        <Link className="text-lg border rounded-full px-4 py-1.5 flex gap-2 items-center group hover:bg-neutral-800 hover:text-neutral-200 transition-all duration-200" to={nav.path} key={index}>
                            <img src={nav.img} className="h-5 group-hover:invert transition-all duration-200" alt={nav.name}/>
                            {nav.name}
                        </Link>
                    ))}
                </div>
            </header>
            <Outlet />
            <Footer/>
        </>
    )
}