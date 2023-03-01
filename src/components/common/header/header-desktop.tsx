import { Container, Stack, Link as MuiLink } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import * as React from 'react'
import { ROUTER_LIST } from './routers'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTER_LIST.map((route) => (
            <MuiLink
              sx={{ ml: 2 }}
              component={Link}
              key={route.path}
              variant="body2"
              href={route.path}
            >
              {route.label}
            </MuiLink>
          ))}
        </Stack>
      </Container>
      Header Desktop
    </Box>
  )
}
