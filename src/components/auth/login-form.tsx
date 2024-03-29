import { LoginPayload } from '@/models'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, CircularProgress, IconButton, InputAdornment, LinearProgress } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginFormSchema } from '@/hooks'

export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const schema = useLoginFormSchema()

  const [showPassword, setShowPassword] = useState(false)

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  async function handleLoginSubmit(payload: LoginPayload) {
    console.log(payload)
    await onSubmit?.(payload)
  }
  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" label="Username" control={control} />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name="password"
        label="Password"
        control={control}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((x) => !x)}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        disabled={isSubmitting}
        startIcon={isSubmitting ? <CircularProgress color="inherit" size="1em" /> : ''}
        // endIcon={isSubmitting ? <LinearProgress sx={{ minWidth: '200px' }} /> : ''}
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
      >
        LOGIN
      </Button>
    </Box>
  )
}
