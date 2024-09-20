import AssetContants from "@/utils/assetConstants";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

function ContactComponent() {
    return (
        <div className="w-full  relative">
            <div className="sticky top-0 left-0 w-full h-screen z-0">
                <video
                    className="w-full h-full object-cover"
                    src={AssetContants.otherBg}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            <div className="relative z-10 -mt-[100vh] min-h-screen w-full bg-transparent flex flex-col justify-center items-center gap-8 ">
                <div className="w-full flex justify-center items-center gap-4 flex-col relative">
                    <div className="h-[80vh] flex flex-col justify-center items-center">
                        <h1 className="text-white text-center lg:text-[150px] opacity-20 text-5xl" style={{
                            letterSpacing: "10px",
                        }}>
                            GET IN TOUCH
                        </h1>
                        <ul className="flex flex-wrap justify-center w-full gap-4 text-white lg:absolute relative" style={{
                            letterSpacing: "15px",
                        }}>
                            <li>
                                LET’S CONNECT
                            </li>

                        </ul>
                    </div>

                    <div className="w-full p-8">
                        <h1 className="text-white text-center text-lg" style={{
                            letterSpacing: "10px",
                        }}>
                            [DISCUSS YOUR NEEDS]
                        </h1>

                        <div className="flex flex-col items-center justify-center gap-8 mt-24">

                            <form className="w-full max-w-3xl">
                                <div className="mb-10">
                                    <label className="block text-white text-xl  mb-4" htmlFor="name">
                                        Name
                                    </label>
                                    <input className="appearance-none bg-transparent border-b-2 border-white w-full py-2  text-white leading-tight focus:outline-none focus:border-[#AE7837] transition-colors text-xl" id="name" type="text" placeholder="Enter your name" />
                                </div>
                                <div className="mb-10">
                                    <label className="block text-white text-xl  mb-4" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="appearance-none bg-transparent border-b-2 border-white w-full py-2  text-white leading-tight focus:outline-none focus:border-[#AE7837] transition-colors text-xl" id="email" type="email" placeholder="Enter your email" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-white text-xl  mb-4" htmlFor="service">
                                        What service are you looking for?
                                    </label>

                                    <div className="flex flex-wrap gap-4">
                                        {['Software Development', 'IT Consulting', 'IT Outsource', 'Web3 Development'].map((service) => (
                                            <button
                                                key={service}
                                                className="bg-transparent hover:bg-[#AE7837] text-white font-semibold py-2 px-4 border border-white hover:border-transparent rounded transition-colors duration-300"
                                                type="button"
                                            >
                                                {service}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <span className="block text-white text-xl  my-16">Or</span>
                                <div className="flex flex-wrap justify-start items-center gap-20 mt-4">
                                    {[AssetContants.contact1, AssetContants.contact2, AssetContants.contact3].map((tech, index) => (
                                        <div key={index} className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 relative">
                                            <Image
                                                src={tech}
                                                alt={`Tech ${index + 1}`}
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-end  mt-24">
                                    <button className="bg-[#AE7837] hover:bg-white text-white hover:text-black font-bold py-3 px-5 border-1 border-white hover:border-transparent rounded transition-colors duration-300" type="button">
                                        Get Consultation
                                    </button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent;