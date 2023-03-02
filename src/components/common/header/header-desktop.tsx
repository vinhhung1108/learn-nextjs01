import { Container, Link as MuiLink, Stack } from '@mui/material'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ROUTER_LIST } from './routers'

export interface HeaderDesktopProps {}

export function HeaderDesktop(props: HeaderDesktopProps) {
  const router = useRouter()
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
              className={clsx({ active: router.pathname === route.path })}
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
