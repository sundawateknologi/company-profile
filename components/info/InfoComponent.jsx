import AssetContants from "@/utils/assetConstants";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

function InfoComponent() {
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
                            INFO
                        </h1>
                        <ul className="flex flex-wrap justify-center w-full gap-4 text-white lg:absolute relative" style={{
                            letterSpacing: "15px",
                        }}>
                            <li>
                                ABOUT
                            </li>
                            <li className="lg:block hidden">|</li>
                            <li>
                                OUR CLIENTS
                            </li>
                            <li className="lg:block hidden">|</li>
                            <li>
                                CONTACT
                            </li>
                        </ul>
                    </div>

                    <div className="w-full p-8">
                        <h1 className="text-white text-center text-lg" style={{
                            letterSpacing: "10px",
                        }}>
                            [ABOUT]
                        </h1>

                        <div className="flex flex-col items-center justify-center gap-8 mt-24">
                            <div className="w-full">
                                <Image
                                    src={AssetContants.info}
                                    alt="Sundawa Teknologi"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="w-full">
                                <p className="text-white text-justify leading-relaxed text-xl">
                                    Sundawa Teknologi dedicated to providing cutting-edge technology solutions tailored to meet the unique needs of our clients. With a passion for innovation and a commitment to excellence, we strive to deliver top-notch IT consultancy services that empower businesses to thrive in the digital age. <br /><br /> We understand that every business is different, which is why we take a personalized approach to each project we undertake. Whether you need assistance with a specific IT project or require comprehensive IT consultancy services, Sundawa Teknologi is here to help you achieve your goals. Get in touch with us today to learn more about how we can support your business`s technological needs.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="w-full p-8 mt-20">
                        <h1 className="text-white text-center text-lg" style={{
                            letterSpacing: "10px",
                        }}>
                            [OUR CLIENTS]
                        </h1>
                        <div className="flex flex-wrap justify-evenly items-center gap-4 mt-16">
                            {[AssetContants.client1, AssetContants.client2, AssetContants.client3, AssetContants.client4, AssetContants.client5].map((tech, index) => (
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
                            [CONTACT US]
                        </h1>
                        <div className="flex flex-wrap justify-evenly items-center gap-4 mt-16">
                            {[AssetContants.contact1, AssetContants.contact2, AssetContants.contact3].map((tech, index) => (
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

export default InfoComponent;