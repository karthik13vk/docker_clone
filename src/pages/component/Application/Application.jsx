import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import normalscreen from './../../../assets/img/screenshort-sm-1.svg';
import darkscreen from './../../../assets/img/screenshort-sm-2.svg';
import { LuDownload } from 'react-icons/lu';
const Application = () => {
    return (
        <div className='application-sec'>
            <Box container sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 6, md: 6, sm: 12 }}  className="mb-10">
                            <Box className="text-xl relative  p-4  p-8  
                            rounded-lg bg-banner-img
                            rounded-md gap-5 border-1 border-gray-300  shadow-gray-300 hover:shadow-gray-500
                             transition-all duration-200">
                                <Box className="">
                                    <div className='flex gap-4 flex-col  pb-1'>
                                        <h6 className='text-sm text-black font-semibold'>Docker Hardened Images
                                            <span class="ml-2 inline-block rounded bg-primarycolor px-0.2 py-0.2 text-xs font-normal text-white">
                                                New
                                            </span></h6>
                                        <h2 className='text-xl text-black font-semibold'>Secure, minimal, production-ready images with near-zero known CVEs.</h2>
                                    </div>
                                    <Box className="flex flex-col lg:flex-row lg:items-center items-start gap-4 mt-20">
                                        <button className='flex gap-1 bg-btncolor flex gap-1 text-white text-sm py-2 px-4 rounded-sm items-center text-white text-lg  transition-all duration-200 hover:bg-blue-800'>

                                            <span>
                                                Start your free trial</span>
                                        </button>
                                        <button className='flex gap-1 bg-btncolor flex gap-1 text-white text-sm py-2 px-4 rounded-sm items-center text-white text-lg  transition-all duration-200 hover:bg-blue-800'>

                                            <span>
                                                Explore images</span>
                                        </button>
                                    </Box>
                                    <Box className="screen-shot-section absolute right-1 bottom-0">
                                        <img className='normal-screen' src={normalscreen} alt="normalscreen-img" />
                                        <img className='dark-screen' src={darkscreen} alt="darkscreen-img" />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ lg: 6, md: 6, sm: 12 }} >
                            <Box className="text-xl relative  p-4  p-8  
                            rounded-lg bg-banner2-img
                            rounded-md gap-5 border-1 border-gray-300  shadow-gray-300 hover:shadow-gray-500
                             transition-all duration-200">
                                <Box className="">
                                    <div className='flex gap-4 flex-col  pb-1'>
                                        <h2 className='text-xl text-black font-semibold'>
                                            Docker State of Application Development survey</h2>
                                    </div>
                                    <Box className="">
                                        <p className='pb-2'>
                                            Share your feedback and help us better understand and serve the application development community. It will take just 20 minutes of your time. We want to know where you are focused, what you are working on, and what is most important to you.
                                        </p>
                                        <p className=''>
                                            You can save your progress and return at any time. As a thank-you, you can opt into a raffle for Docker swag and other prizes.
                                        </p>
                                    </Box>
                                    <Box className="flex items-center gap-4 mt-6">
                                        <button className='flex gap-1 bg-btncolor flex gap-1 text-white text-sm py-2 px-4 rounded-sm items-center text-white text-lg  transition-all duration-200 hover:bg-blue-800'>

                                            <span>
                                                Take the survey</span>
                                        </button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Application