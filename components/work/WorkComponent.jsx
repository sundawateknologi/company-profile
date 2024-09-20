import AssetContants from "@/utils/assetConstants";
import Image from "next/image";
import Link from "next/link";

function WorkComponent() {
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
                            WORK
                        </h1>
                        <ul className="flex flex-wrap justify-center w-full gap-4 text-white lg:absolute relative" style={{
                            letterSpacing: "15px",
                        }}>
                            <li>
                                PROJECT
                            </li>
                            <li className="lg:block hidden">|</li>
                            <li>
                                PRODUCT
                            </li>
                            <li className="lg:block hidden">|</li>
                            <li>
                                COLLABORATION
                            </li>
                        </ul>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 ">
                        {[
                            { src: AssetContants.project1, alt: "Project 1", title: "OETOMO HOSPITAL", subtitle: "WEBSITE", extra: "CMS" },
                            { src: AssetContants.project2, alt: "Project 2", title: "GATSBY", subtitle: "LANDING PAGE", extra: "CMS" },
                            { src: AssetContants.project3, alt: "Project 3", title: "SALES KIT", subtitle: "LANDING PAGE", extra: "CMS" },
                            { src: AssetContants.project4, alt: "Project 4", title: "HEALTHCARE", subtitle: "EMR", extra: "CMS" },
                            { src: AssetContants.project5, alt: "Project 5", title: "EHR", subtitle: "ORDER", extra: "PAYMENT GATEWAY" },
                            { src: AssetContants.project6, alt: "Project 6", title: "BRICaMS", subtitle: "TAX MANAGEMENT" }
                        ].map((project, index) => (
                            <div key={index} className="relative overflow-hidden group">
                                <Image src={project.src} alt={project.alt} width={400} height={300} className="w-full h-auto transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute bottom-0 left-0 w-full py-4 px-4 bg-black bg-opacity-50 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link href="/project1" className="text-white text-lg">
                                        <ul className="flex justify-center w-full gap-4 text-white">
                                            <li>{project.title}</li>
                                            {project.subtitle && (
                                                <>
                                                    <li className="lg:block hidden">|</li>
                                                    <li>{project.subtitle}</li>
                                                </>
                                            )}
                                            {project.extra && (
                                                <>
                                                    <li className="lg:block hidden">|</li>
                                                    <li>{project.extra}</li>
                                                </>
                                            )}
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

export default WorkComponent;