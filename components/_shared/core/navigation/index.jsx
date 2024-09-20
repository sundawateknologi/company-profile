import Link from "next/link";
import { useState, useEffect } from "react";

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full p-8 sticky left-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-50' : 'bg-transparent'}`}>
            <ul className="navbar-end flex justify-end w-full gap-4 text-white">
                <li>
                    <Link href="/" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">HOME</Link>
                </li>
                <li>|</li>
                <li>
                    <Link href="/work" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">WORK</Link>
                </li>
                <li>|</li>
                <li>
                    <Link href="/services" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">SERVICES</Link>
                </li>
                <li>|</li>
                <li>
                    <Link href="/technology" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">TECHNOLOGY</Link>
                </li>
                <li>|</li>
                <li>
                    <Link href="/info" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">INFO</Link>
                </li>
                <li>|</li>
                <li>
                    <Link href="/contact" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">GET IN TOUCH</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;