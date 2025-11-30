import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './Community.scss';
const Community = () => {
    return (
        <div className='community-sec bg-gray-200  py-12 bg-footerbg relative'>
            <Box container sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={{ md: 9 }} >
                            <Box className="text-xl  p-2   lg:p-8 
                            rounded-lg  flex gap-5 flex-col">
                                <Box className="flex items-center gap-4">
                                    <h1 className='text-2xl text-black font-normal'>Community resources</h1>
                                </Box>
                                <Box className="flex items-center gap-4">
                                    <p className=''>
                                        Find fellow Docker enthusiasts, engage in insightful discussions, share knowledge, and collaborate on projects. Our communities offer a rich online experience for developers to create valuable connections that challenge and inspire!
                                    </p>
                                </Box>
                                <Box className="flex lg:items-center gap-4 mt-10 flex-col lg:flex-row">
                                    <button className='flex gap-1 bg-white flex gap-1 text-black text-sm py-2 px-4 rounded-sm items-center text-lg  transition-all duration-200 hover:bg-gray-200'>
                                        <span>
                                            Visit Docker Forum</span>
                                    </button>
                                    <button className='flex gap-1 bg-white flex gap-1 text-black text-sm py-2 px-4 rounded-sm items-center text-lg  transition-all duration-200 hover:bg-gray-200'>

                                        <span>
                                            Join Docker Slack</span>
                                    </button>
                                    <button className='flex gap-1 bg-white flex gap-1 text-black text-sm py-2 px-4 rounded-sm items-center text-lg  transition-all duration-200 hover:bg-gray-200'>

                                        <span>

                                            Find your Docker Captain</span>
                                    </button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{ md: 3 }} >
                            <Box className='community-sec-right'></Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>

        </div>
    )
}

export default Community