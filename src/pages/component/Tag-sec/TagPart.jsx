import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { FaHashtag } from 'react-icons/fa';

const TagPart = () => {
  const tags = [
    "Administration",
    "AI",
    "App development",
    "Best practices",
    "Data science",
    "Docker",
    "Cloud",
    "Deployment",
    "Distributed systems",
    "Security",
    "FAQ",
    "Frameworks",
    "Networking",
    "Observability",
    "Product demo",
    "Secrets",
    "Troubleshooting",
    "DevOps"
  ];

  return (
    <div className='tag-section lg:py-12 py-8'>
      <Box container sx={{ flexGrow: 1 }}>
        <Container>
          <h4 className='font-semibold mb-4'>Browse by tag</h4>
          <Grid container spacing={2}>
            {tags.map((tag, index) => (
              <Grid item key={index} lg={12}>
                <Box className='inner-link'>
                  <ul className='flex gap-5 flex-wrap'>
                    <li>
                      <a href="#" className='flex  items-center bg-gray-200 border-1
                       border-gray-300 py-1 px-2 rounded-full text-[12px]'>
                        <span className='text-[8px]'><FaHashtag /></span>
                        <span className='ml-1'>{tag}</span>
                      </a>
                    </li>
                  </ul>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default TagPart;
