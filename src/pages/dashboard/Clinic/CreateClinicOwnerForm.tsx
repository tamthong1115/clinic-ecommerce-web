import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { createClinicOwner } from '../../../api/clinic/clinicServices.ts';
import { CreateClinicOwnerRequest } from '../../../api/clinic/clinicTypes';
import { useToast } from '../../../context/ToastContext.tsx';

export default function CreateClinicOwnerForm() {
  const { showToast } = useToast();

  const mutation = useMutation({
    mutationFn: (data: CreateClinicOwnerRequest) => createClinicOwner(data),
    onSuccess: () => {
      showToast('Clinic owner created successfully!', { type: 'success' });
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || 'Failed to create clinic owner.';
      showToast(errorMessage, { type: 'error' });
    },
  });

  const formik = useFormik<CreateClinicOwnerRequest>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      licenseNumber: '',
      profileImageUrl: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phoneNumber: Yup.string(),
      dateOfBirth: Yup.date().nullable(),
      address: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
      postalCode: Yup.string(),
      licenseNumber: Yup.string(),
      profileImageUrl: Yup.string().url('Must be a valid URL'),
    }),
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Card
        sx={{
          width: '95%',
          height: '90%',
          boxShadow: 'none',
          border: 'none',
        }}
      >
        <CardContent>
          <Typography variant="h6" align="center" mb={3}>
            Fill this form to create new clinic owner
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  variant="standard"
                  id="firstName"
                  name="firstName"
                  label="First Name *"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name *"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="email"
                  name="email"
                  label="Email *"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="dateOfBirth"
                  name="dateOfBirth"
                  label="Date of Birth"
                  type="date"
                  slotProps={{ inputLabel: { shrink: true } }}
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="city"
                  name="city"
                  label="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="state"
                  name="state"
                  label="State"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="postalCode"
                  name="postalCode"
                  label="Postal Code"
                  value={formik.values.postalCode}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="licenseNumber"
                  name="licenseNumber"
                  label="License Number"
                  value={formik.values.licenseNumber}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="profileImageUrl"
                  name="profileImageUrl"
                  label="Profile Image URL"
                  value={formik.values.profileImageUrl}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.profileImageUrl &&
                    Boolean(formik.errors.profileImageUrl)
                  }
                  helperText={
                    formik.touched.profileImageUrl &&
                    formik.errors.profileImageUrl
                  }
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                mt: 3,
                backgroundColor: '#4fd1c5',
                color: '#fff',
                borderRadius: 2,
                overflow: 'hidden',
                backgroundSize: '200% 100%',
                backgroundPosition: 'left center',
                transition: 'all 2s ease',
                '&:hover': {
                  backgroundImage: 'linear-gradient(90deg, #aaff47, #2043c9)',
                  backgroundPosition: 'right center',
                  backgroundSize: '200% 100%',
                },
              }}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? 'Submitting...' : 'Create Owner'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
