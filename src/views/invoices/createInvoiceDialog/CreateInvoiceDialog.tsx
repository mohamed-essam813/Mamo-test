import React, { MouseEventHandler } from 'react';
import { Close, Error } from '@mui/icons-material';
import {
  Box,
  Dialog,
  DialogProps,
  IconButton,
  InputAdornment,
  Slide,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { Controller, useForm } from 'react-hook-form';
import { MuiTelInput } from 'mui-tel-input';
import { MamoButton } from '../../../components/button';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type formData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  amount: string;
  description: string;
};

type IHelperText = {
  error: string;
};

function HelperTextError({ error }: IHelperText) {
  const theme = useTheme();

  return (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '12px',
        color: theme.palette.error.main,
        // @ts-ignore
        backgroundColor: theme.palette.error[50],
        padding: '6px 10px',
        marginTop: '8px',
        borderRadius: '8px',
      }}
    >
      <Error fontSize="small" />
      <Typography fontSize="inherit" fontWeight="bold" ml="8px">
        {error}
      </Typography>
    </Box>
  );
}

export function CreateInvoiceDialog(props: DialogProps) {
  const { open, onClose } = props;
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<formData>({
    defaultValues: {
      amount: Number(0).toFixed(2),
    },
  });

  const handleOnClose = () => {
    if (onClose) {
      onClose({}, 'backdropClick');
    }

    reset();
  };

  const onSubmit = () => {
    if (onClose) {
      onClose({}, 'backdropClick');
    }
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleOnClose}
      TransitionComponent={Transition}
    >
      <IconButton
        size="large"
        onClick={
          handleOnClose as MouseEventHandler<HTMLButtonElement> | undefined
        }
        sx={{
          position: 'absolute',
          right: { md: 24, sm: 32, xs: 24 },
          top: { sm: 16, xs: 24 },
          color: theme.palette.text.primary,
        }}
      >
        <Close fontSize="small" />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.palette.background.default,
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: theme.palette.background.paper,
            maxWidth: '685px',
            width: '100%',
            margin: { md: '48px 112px', sm: '48px 86px', xs: 0 },
            borderRadius: { sm: '16px', xs: 0 },
            padding: { md: '0 44px', sm: '0 40px', xs: '0 20px' },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            sx={{
              fontSize: { md: '32px', xs: '28px' },
              marginTop: { md: '48px', sm: '40px', xs: '84px' },
            }}
          >
            Create and send invoice
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              fontSize: { md: '18px', xs: '16px' },
              marginTop: '16px',
              marginBottom: '48px',
            }}
          >
            An email with the invoice will be sent to your customer with a
            payment link for them to settle the invoice
          </Typography>

          <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
            <Typography
              variant="body1"
              sx={{ fontSize: '18px', marginBottom: '16px' }}
              fontWeight="bold"
            >
              Customer
            </Typography>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="First name"
                      onChange={onChange}
                      value={value}
                      variant="standard"
                      error={!!errors.firstName}
                      helperText={
                        errors.firstName ? (
                          <HelperTextError error="Please enter your customer’s first name" />
                        ) : (
                          ' '
                        )
                      }
                      sx={{
                        width: { md: 'calc(50% - 12px)', xs: '100%' },
                        marginRight: { md: '12px', xs: 0 },
                        marginBottom: { xs: '24px' },
                      }}
                      InputProps={{
                        sx: { fontSize: '14px' },
                      }}
                      InputLabelProps={{
                        sx: { color: theme.palette.text.disabled },
                      }}
                    />
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Last name"
                      onChange={onChange}
                      value={value}
                      variant="standard"
                      error={!!errors.lastName}
                      helperText={
                        errors.lastName ? (
                          <HelperTextError error="Please enter your customer’s last name" />
                        ) : (
                          ' '
                        )
                      }
                      sx={{
                        width: { md: 'calc(50% - 12px)', xs: '100%' },
                        marginLeft: { md: '12px', xs: 0 },
                        marginBottom: { xs: '24px' },
                      }}
                      InputProps={{
                        sx: { fontSize: '14px' },
                      }}
                      InputLabelProps={{
                        sx: { color: theme.palette.text.disabled },
                      }}
                    />
                  )}
                />
              </Box>

              <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Email"
                      onChange={onChange}
                      value={value}
                      variant="standard"
                      error={!!errors.email}
                      helperText={
                        errors.email ? (
                          <HelperTextError error="Please enter your customer’s email" />
                        ) : (
                          ' '
                        )
                      }
                      sx={{
                        width: { md: 'calc(50% - 12px)', xs: '100%' },
                        marginRight: { md: '12px', xs: 0 },
                        marginBottom: { xs: '24px' },
                      }}
                      InputProps={{
                        sx: { fontSize: '14px' },
                      }}
                      InputLabelProps={{
                        sx: { color: theme.palette.text.disabled },
                      }}
                    />
                  )}
                />
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MuiTelInput
                      label="Phone (optional)"
                      onChange={onChange}
                      value={value}
                      variant="standard"
                      helperText=" "
                      defaultCountry="AE"
                      sx={{
                        width: { md: 'calc(50% - 12px)', xs: '100%' },
                        marginLeft: { md: '12px', xs: 0 },
                        marginBottom: { xs: '24px' },
                        '.MuiTelInput-Flag': {
                          borderRadius: '20px',
                          width: '22px',
                          height: '20px',
                        },
                        '.MuiTelInput-IconButton': {
                          padding: 0,
                        },
                      }}
                      InputProps={{
                        sx: { fontSize: '14px' },
                      }}
                      InputLabelProps={{
                        sx: { color: theme.palette.text.disabled },
                      }}
                    />
                  )}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{ fontSize: '18px', marginBottom: '16px' }}
                fontWeight="bold"
              >
                Amount
              </Typography>

              <Box style={{ display: 'flex' }}>
                <Controller
                  name="amount"
                  control={control}
                  rules={{
                    required: true,
                    validate: value => Number(value) > 0,
                  }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      variant="standard"
                      error={!!errors.amount}
                      helperText={
                        errors.amount ? (
                          <HelperTextError error="An amount is required" />
                        ) : (
                          ' '
                        )
                      }
                      sx={{
                        width: { sm: 'calc(50% - 12px)', xs: '100%' },
                        marginRight: { sm: '12px', xs: 0 },
                        marginBottom: { xs: '24px' },
                      }}
                      InputProps={{
                        sx: { fontSize: '14px' },
                        startAdornment: (
                          <InputAdornment position="start">
                            <Typography
                              sx={{ color: theme.palette.text.disabled }}
                            >
                              AED
                            </Typography>
                          </InputAdornment>
                        ),
                      }}
                      InputLabelProps={{
                        sx: { color: theme.palette.text.disabled },
                      }}
                    />
                  )}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{ fontSize: '18px', marginBottom: '16px' }}
                fontWeight="bold"
              >
                Description
              </Typography>

              <Box style={{ display: 'flex' }}>
                <Controller
                  name="description"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      placeholder="What's payment for"
                      onChange={onChange}
                      value={value}
                      variant="standard"
                      error={!!errors.description}
                      helperText={
                        errors.description ? (
                          <HelperTextError error="Please add a description" />
                        ) : (
                          ' '
                        )
                      }
                      sx={{
                        width: '100%',
                        marginRight: { md: '12px', xs: 0 },
                        marginBottom: { xs: '24px' },
                      }}
                      InputProps={{
                        sx: { fontSize: '14px' },
                      }}
                      InputLabelProps={{
                        sx: { color: theme.palette.text.disabled },
                      }}
                    />
                  )}
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <MamoButton
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    width: '190px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    margin: '48px 0',
                  }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Send invoices
                </MamoButton>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
