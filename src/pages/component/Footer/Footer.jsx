import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-sec bg-footerbg pt-4  border-t border-gray-50'>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2} size={{ mt:4 }} className="">
                        <Grid size={{ xs: 12, md: 12, lg: 2 }}>
                            <div className='social-links'>
                                <ul className='flex gap-1 items-center'>
                                    <li>
                                        <a href="#" ><FaLinkedinIn className='bg-blue-400 p-1 flex items-center justify-center rounded-sm text-xl text-white' /></a>
                                    </li>
                                    <li>
                                        <a href="#" ><FaFacebookF className='bg-blue-400 p-1 flex items-center justify-center rounded-sm text-xl text-white' /></a>
                                    </li>
                                    <li>
                                        <a href="#" ><FaTwitter className='bg-blue-400 p-1 flex items-center justify-center rounded-sm text-xl text-white' /></a>
                                    </li>
                                    <li>
                                        <a href="#" ><FaYoutube className='bg-blue-400 p-1 flex items-center justify-center rounded-sm text-xl text-white' /></a>
                                    </li>
                                    <li>
                                        <a href="#" ><FaInstagram className='bg-blue-400 p-1 flex items-center justify-center rounded-sm text-xl text-white' /></a>
                                    </li>
                                </ul>

                            </div>
                        </Grid>

                        <Grid size={{ lg: 6, md: 6, sm: 12 }}>
                            <div className='footer-link'>
                                <ul className='flex lg:items-center justify-center gap-5 flex-col lg:flex-row'>
                                    <li>
                                        <a href="#" className='text-gray-500 text-sm hover:underline'>Product offerings</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-500 text-sm hover:underline'>Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-500 text-sm hover:underline'>About us</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-500 text-sm hover:underline'>Contribute</a>
                                    </li>
                                </ul>

                            </div>
                        </Grid>

                        <Grid size={{ lg: 4, md: 6, sm: 12 }}>
                            <div className='social-links-right'>
                                <ul className='flex  lg:items-center justify-end gap-2 flex-col lg:flex-row'>
                                    <li>
                                        <a href="#" className='text-gray-600 text-sm hover:underline'> Cookies Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-600 text-sm hover:underline'>| Terms of Service</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-600 text-sm hover:underline'>| Status</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-gray-600 text-sm hover:underline'>| Legal</a>
                                    </li>
                                </ul>
                            </div>
                        </Grid>

                    </Grid>
                    <Grid container spacing={2}>
                        <Grid size={{ lg: 12, md: 12, sm: 12 }}>
                            <div className='copy-right text-left mt-4'>
                                <span className='text-gray-400 text-sm'>
                                    Copyright &copy; 2025 Docker, Inc. All rights reserved.
                                </span>
                            </div>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </div>
    );
};

export default Footer;
