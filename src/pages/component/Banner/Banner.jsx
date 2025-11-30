import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { IoIosPlayCircle } from 'react-icons/io';
import './Banner.scss';
import { LuDownload } from 'react-icons/lu';
import normalscreen from './../../../assets/img/screenshort1.svg';
import darkscreen from './../../../assets/img/screenshort2.svg';
const Banner = () => {
    return (
        <div className='banner-section mt-20 lg:mt-10'>
            <Box container sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={{ md: 12 }} >
                            <Box className="text-xl  bg-blue-300 relative lg:my-14 p-8 
                            rounded-lg bg-banner-img flex gap-5 flex-col">
                                <Box className="flex items-center gap-4">
                                    <span className='text-primarycolor text-2xl '><IoIosPlayCircle /></span>
                                    <h1 className='text-2xl text-black font-normal'>Get Docker</h1>
                                </Box>
                                <Box className="flex items-center gap-4">
                                    <p className=''>
                                        Learn how to install Docker for Mac, Windows, or Linux and explore our developer tools.
                                    </p>
                                </Box>
                                <Box className="flex items-center gap-4 mt-20">
                                    <button className='flex gap-1 bg-btncolor flex gap-1 text-white text-sm py-2 px-4 rounded-sm items-center text-white text-lg  transition-all duration-200 hover:bg-blue-800'>
                                        <LuDownload />
                                        <span>
                                            Get Docker</span>
                                    </button>
                                </Box>
                                <Box className="screen-shot-section absolute right-1 bottom-0">
                                    <img className='normal-screen' src={normalscreen} alt="normalscreen-img" />
                                    <img className='dark-screen' src={darkscreen} alt="darkscreen-img" />
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>

                </Container>
            </Box>

        </div>
    )
}

export default Banner