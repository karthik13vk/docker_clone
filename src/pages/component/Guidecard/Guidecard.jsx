import React from 'react'
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { IoIosPlayCircle, IoMdRocket } from 'react-icons/io';
const Guidecard = () => {

    const cardData = [
        {
            icon: <IoMdRocket />,
            title: "Get started",
            desc: "Learn Docker basics and the benefits of containerization.",
        },
        {
            icon: <IoMdRocket />,
            title: "Get started",
            desc: "Learn Docker basics and the benefits of containerization.",
        },
        {
            icon: <IoMdRocket />,
            title: "Get started",
            desc: "Learn Docker basics and the benefits of containerization.",
        },
        {
            icon: <IoMdRocket />,
            title: "Get started",
            desc: "Learn Docker basics and the benefits of containerization.",
        },
    ];
    return (
        <div className='guidecard-sec  lg:my-14 my-8'>
            <Box container sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        {cardData.map((item, index) => (
                            <Grid key={index} size={{ lg: 3, md: 6, sm: 12 }}>
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
                                            <span className="text-primarycolor text-2xl">{item.icon}</span>
                                            <h1 className="text-xl text-black font-semibold">{item.title}</h1>
                                        </div>
                                        <p>{item.desc}</p>
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

export default Guidecard