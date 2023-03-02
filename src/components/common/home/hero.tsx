import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'
import avatar from '@/images/Ellipse 1.png'

export function HeroSection() {
  return (
    <Box component="section" pt={18} pb={9}>
      <Container>
        <Stack direction="row" alignItems="flex-start" spacing={5}>
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={5}>
              Hi, I am John,
              <br />
              Creative Technologist
            </Typography>
            <Typography mb={5}>
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
              minWidth: '240px',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image src={avatar} alt="avatar" />
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
