import { Button, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import * as React from 'react'
import avatar from '@/images/Ellipse 1.png'
import { relative } from 'path'

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 16 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          spacing={8}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3.5, md: 5 }}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={{ xs: 3.5, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              //   minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              bgcolor: 'primary.light',
              borderRadius: '50%',
              width: '243px',
              height: '243px',
            }}
          >
            <Image src={avatar} alt="avatar" width={243} height={243} />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

//section
//  container
//      flex-container (Stack)
//          flex-item (Left Box)
//              h1, p, button
//          flex-item (Right Box) > img
