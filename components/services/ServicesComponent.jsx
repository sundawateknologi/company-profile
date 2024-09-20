import AssetContants from "@/utils/assetConstants";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

function ServicesComponent() {
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
                        <h1 className="text-white text-center lg:text-[200px] opacity-20 text-5xl" style={{
                            letterSpacing: "10px",
                        }}>
                            SERVICES
                        </h1>
                        <ul className="flex flex-wrap justify-center w-full gap-4 text-white lg:absolute relative" style={{
                            letterSpacing: "15px",
                        }}>
                            <li>
                                SOFTWARE DEVELOPMENT
                            </li>
                            <li className="lg:block hidden">|</li>
                            <li>
                                WEB3 DEVELOPMENT
                            </li>
                        </ul>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 ">
                        {[
                            { src: AssetContants.services1, alt: "services 1", title: "SOFTWARE DEVELOPMENT", subtitle: "Our team of skilled developers will work closely with you to understand your requirements and specific needs.", },
                            { src: AssetContants.services2, alt: "services 2", title: "IT OUTSOURCE", subtitle: "We can help you to reduce IT costs by eliminating the need for in-house IT staff and infrastructure.", },
                            { src: AssetContants.services3, alt: "services 3", title: "IT CONSULTING", subtitle: "Transform your IT landscape and unlock new possibilities for your business with expert IT consulting services.", },
                            { src: AssetContants.services4, alt: "services 4", title: "WEB3 DEVELOPMENT", subtitle: "Creating applications and services that leverage blockchain technology to provide new functionalities and experiences.", },
                        ].map((project, index) => (
                            <div key={index} className="relative overflow-hidden group">
                                <Image src={project.src} alt={project.alt} width={400} height={300} className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 w-full py-4 px-4 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link href="/software-development" className="text-white text-lg">
                                        <ul className="flex flex-col items-start justify-start w-full gap-2 text-white">
                                            <li className="text-xl font-bold">{project.title}</li>
                                            <li className="text-start">{project.subtitle} </li>
                                            <li className="mt-2 border-white py-2 hover:bg-white hover:text-black transition-colors duration-300">
                                                <span>
                                                    Learn More
                                                </span>
                                                <IoArrowForwardOutline className="inline-block ml-2" />
                                            </li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent;