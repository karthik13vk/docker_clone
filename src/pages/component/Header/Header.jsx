import React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import { FaDocker, FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

import { IoSparklesOutline, IoSunny } from "react-icons/io5";



import './Header.scss';
import { Button } from '@mui/material';
import { SlEarphonesAlt } from 'react-icons/sl';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
// const Item = styled(Paper)(({ theme }) => ({

// }));


const Header = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const drawerContent = (
    <Box
      sx={{ width: 250, padding: 2 }}
      role="presentation"
      className="bg-primarycolor h-full"
      onClick={toggleDrawer(false)}
    >
      <Box className="">
        <Box className="flex items-center justify-start text-white">
          <FaDocker className="text-3xl" />
          <span className="text-xl ml-2">dockerdocs</span>
        </Box>
        <ul className="flex items-start justify-start gap-5 flex-col pt-3">
          <li className=' text-black  transition-all duration-200'>
            <a href="" className='text-sm py-1 px-2 text-white'>Get started</a></li>
          <li className=' text-black  transition-all duration-200'><a href="" className='text-sm py-1 px-2 text-white'>Guides</a></li>
          <li className=' text-black  transition-all duration-200'><a href="" className='text-sm py-1 px-2 text-white'>Manuals</a></li>
          <li className=' text-black  transition-all duration-200'><a href="" className='text-sm py-1 px-2 text-white'>Reference</a></li>
        </ul>
      </Box>
    </Box>
  );
  const [openAI, setOpenAI] = React.useState(false);

  const handleOpen = () => setOpenAI(true);
  const handleClose = () => setOpenAI(false);
  return (

    <div className="Header-box bg-primarycolor py-4 fixed top-0 left-0 w-full z-50">
      <Box container sx={{ flexGrow: 1 }}>
        <Container maxWidth={false}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 6 }} >
              <Box className="flex items-center gap-8">
                <Box className="flex items-center justify-start text-white">
                  <FaDocker className="text-3xl" />
                  <span className="text-xl ml-2">dockerdocs</span>
                </Box>

                <Box className="hidden lg:flex">
                  <ul className="flex items-center justify-center gap-2">
                    <li className='border-b-4 border-transparent hover:border-white/20 transition-all duration-200'>
                      <a href="" className='text-sm py-1 px-2 text-white'>Get started</a></li>
                    <li className='border-b-4 border-transparent hover:border-white/20 transition-all duration-200'><a href="" className='text-sm py-1 px-2 text-white'>Guides</a></li>
                    <li className='border-b-4 border-transparent hover:border-white/20 transition-all duration-200'><a href="" className='text-sm py-1 px-2 text-white'>Manuals</a></li>
                    <li className='border-b-4 border-transparent hover:border-white/20 transition-all duration-200'><a href="" className='text-sm py-1 px-2 text-white'>Reference</a></li>
                  </ul>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 6, md: 6 }}>
              <Box className="flex items-center gap-6 justify-end hidden lg:flex">
                <button className='bg-btncolor flex gap-2 text-white border-white/40 border text-sm py-1 px-2 rounded-sm items-center' onClick={handleOpen}>Ask AI <IoSparklesOutline /></button>
                <div className='bg-btncolor flex gap-1 text-white border-white/40 border text-sm py-1 px-2 rounded-sm items-center'>
                  <input type="text" placeholder='Search' />
                  <span><FaSearch /></span>
                </div>
                <button className='bg-btncolor flex gap-2 text-white border-white/40 border text-sm py-1 px-2 rounded-sm items-center' >Contact support <SlEarphonesAlt /></button>
                <ThemeToggle />
                {/* <button className='flex g text-white text-sm py-1 px-2  items-center' ><IoSunny /> <FaRegMoon /></button> */}

              </Box>
              <Box className="flex items-center gap-6 justify-end">
                <a variant="contained"
                  className='bg-btncolor flex gap-2 text-white border-white/40 border text-sm py-1 px-2 rounded-sm items-center 
                lg:hidden'
                  onClick={toggleDrawer(true)}>
                  <FaBarsStaggered />

                </a>
              </Box>

            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Popup Dialog */}
      <Dialog open={openAI} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle className='bg-primarycolor text-white p-2.5'>
          <Box className="flex items-center justify-start text-white">
            <FaDocker className="text-3xl" />
            <span className="text-xl ml-2">dockerdocs</span>
          </Box></DialogTitle>

        <DialogContent className='pt-4'>
          <div  className='bg-blue-200 p-1 text-xs text-white rounded-md mt-3' >
            <span className=''>This is a custom LLM for answering questions about Docker. Answers are based on the contents of the documentation. Rate the answers to let us know what you think!</span>
          </div>
          <input
            type="text"
            placeholder="Ask something..."
            className="w-full mt-3 border p-2 rounded"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
      <Drawer
        anchor="left"
        open={open}

        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Header;
