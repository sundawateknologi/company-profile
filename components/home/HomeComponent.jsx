import AssetContants from "@/utils/assetConstants";
import Image from "next/image";
import Link from "next/link";

function HomeComponent() {
    return (
        <div className="w-full  relative">
            <div className="sticky top-0 left-0 w-full h-screen z-0">
                <video
                    className="w-full h-full object-cover"
                    src={AssetContants.homeBg}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="relative z-10 -mt-[100vh] h-screen w-full bg-transparent flex flex-col justify-center items-center gap-8 ">
                <Image src={AssetContants.logo} alt="logo" width={80} height={80} className="mt-4" />
                <div className="w-full flex justify-center items-center gap-4 flex-col">
                    <h1 className="text-white text-center lg:text-7xl text-5xl" style={{
                        letterSpacing: "10px",
                    }}>
                        SUNDAWA TEKNOLOGI
                    </h1>
                    <ul className="flex flex-wrap justify-center w-full gap-4 text-white" style={{
                        letterSpacing: "5px",
                    }}>
                        <li>
                            CLIENT SATISFACTION
                        </li>
                        <li className="lg:block hidden">|</li>
                        <li>
                            REABILITY & PRECISION
                        </li>
                        <li className="lg:block hidden">|</li>
                        <li>
                            SUSTAINABLE SOLUTIONS
                        </li>
                    </ul>
                </div>
                <nav className="w-full p-8 lg:mt-28 mt-12">
                    <ul className="flex flex-wrap justify-center w-full gap-10 text-white" style={{
                        letterSpacing: "5px",
                    }}>
                        <li>
                            <Link href="/" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">HOME</Link>
                        </li>
                        <li>
                            <Link href="/work" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">WORK</Link>
                        </li>
                        <li>
                            <Link href="/services" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">SERVICES</Link>
                        </li>
                        <li>
                            <Link href="/technology" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">TECHNOLOGY</Link>
                        </li>
                        <li>
                            <Link href="/info" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">INFO</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:scale-x-0 hover:after:scale-x-100">GET IN TOUCH</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default HomeComponent;