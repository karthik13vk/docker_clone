
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { TiSpanner } from "react-icons/ti";
import { FaCaretRight, FaCloud } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdDeviceHub } from "react-icons/md";
import { GiScoutShip } from "react-icons/gi";




export const Services = () => {

    const servicecard = [
        {
            icon: <TiSpanner />,
            title: "Docker Build",
            desc: "Package, test, and ship your applications.",
            links: [
                { title: "Overview", href:"#" },
                { title: " Explore Docker Desktop", href: "#" },
                { title: " Release notes", href: "#" },
            ],
        },
        {
            icon: <FaCloud />,
            title: "Docker Build Cloud",
            desc: "Run your builds in the cloud.",
            links: [
                { title: "Overview", href: "#" },
                { title: "Setup", href: "#" },
                { title: "Release notes", href: "#" },
            ],
        },
        {
            icon: <IoMdShare />,
            title: "Docker Compose",
            desc: "Define and run multi-container applications with Docker.",
            links: [
                { title: "Overview",  href: "#" },
                { title: " Try Docker Compose", href: "#"  },
                { title: "Release notes",  href: "#"  },
            ],
        },
        {
            icon: <MdDeviceHub />,
            title: "Docker Hub",
            desc: "Find and share container images and other artifacts.",
            links: [
                { title: "Overview",  href: "#"  },
                { title: "Create an account",  href: "#"  },
                { title: "Create a repository",  href: "#"  },
            ],
        },
        {
            icon: <GiScoutShip />,
            title: "Docker Scout",
            desc: "Strengthen your software supply chain with Docker Scout.",
            links: [
                { title: "Overview",  href: "#"  },
                { title: " Quickstart", href: "#"  },
                { title: " Image analysis", href: "#"  },
            ],
        },
    ];
    return (
        <div className='servics-sec py-8'>
            <Box container sx={{ flexGrow: 1 }}>
                <Container>
                    <h4 className='font-semibold mb-4'>Browse by section</h4>
                    <Grid container spacing={2}>
                        {servicecard.map((item, index) => (
                            <Grid key={index} size={{ lg: 3, md: 12, sm: 12 }} className="w-full">
                                <Box
                                    className="
          text-xl
          ml-2
          p-3
          rounded-md
          gap-5
          border border-gray-300
          shadow shadow-gray-300
          hover:shadow-[6px_6px_10px_0px_lightgray]
          transition-all duration-200
        "
                                >
                                    <Box>
                                        <div className="flex gap-1 pb-1">
                                            <span className="text-gray-500 text-2xl">{item.icon}</span>
                                            <h1 className="text-xl text-black font-semibold">{item.title}</h1>
                                        </div>
                                        <p className='min-h-10'>{item.desc}</p>
                                        <ul className='mt-4 flex flex-col gap-2' >
                                            {item.links.map((link, liIndex) => (
                                                <li key={liIndex}>
                                                    <a href={link.href} className="flex gap-1 items-center">
                                                        <FaCaretRight className="text-gray-500" />
                                                        <span className="text-primarycolor text-sm hover:underline transition-all duration-200">
                                                            {link.title}
                                                        </span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Box>

        </div>
    )
}
