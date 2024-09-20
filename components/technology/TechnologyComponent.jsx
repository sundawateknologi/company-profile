import AssetContants from "@/utils/assetConstants";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

function TechnologyComponent() {
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
                            TECHNOLOGY
                        </h1>
                        <ul className="flex flex-wrap justify-center w-full gap-4 text-white lg:absolute relative" style={{
                            letterSpacing: "15px",
                        }}>
                            <li>
                                TECH WE USE
                            </li>
                            <li className="lg:block hidden">|</li>
                            <li>
                                PROVIDER WE USE
                            </li>
                            <li className="lg:block hidden">|</li>
                            <li>
                                TOOLS WE USE
                            </li>
                        </ul>
                    </div>

                    <div className="w-full p-8">
                        <h1 className="text-white text-center text-lg" style={{
                            letterSpacing: "10px",
                        }}>
                            [TECH WE USE]
                        </h1>
                        <div className="flex flex-wrap justify-evenly items-center gap-4 mt-16">
                            {[AssetContants.tech1, AssetContants.tech2, AssetContants.tech3, AssetContants.tech4, AssetContants.tech5, AssetContants.tech6, AssetContants.tech7, AssetContants.tech8].map((tech, index) => (
                                <div key={index} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative">
                                    <Image
                                        src={tech}
                                        alt={`Tech ${index + 1}`}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="w-full p-8 mt-20">
                        <h1 className="text-white text-center text-lg" style={{
                            letterSpacing: "10px",
                        }}>
                            [TOOLS WE USE]
                        </h1>
                        <div className="flex flex-wrap justify-evenly items-center gap-4 mt-16">
                            {[AssetContants.tools1, AssetContants.tools2, AssetContants.tools3, AssetContants.tools4].map((tech, index) => (
                                <div key={index} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative">
                                    <Image
                                        src={tech}
                                        alt={`Tech ${index + 1}`}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="w-full p-8 mt-20">
                        <h1 className="text-white text-center text-lg" style={{
                            letterSpacing: "10px",
                        }}>
                            [PROVIDER WE USE]
                        </h1>
                        <div className="flex flex-wrap justify-evenly items-center gap-4 mt-16">
                            {[AssetContants.provider1, AssetContants.provider2, AssetContants.provider3].map((tech, index) => (
                                <div key={index} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative">
                                    <Image
                                        src={tech}
                                        alt={`Tech ${index + 1}`}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnologyComponent;