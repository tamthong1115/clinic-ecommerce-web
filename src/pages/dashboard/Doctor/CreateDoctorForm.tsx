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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Avatar,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { createDoctor } from '../../../api/clinic/clinicServices';
import { DoctorRequest } from '../../../api/clinic/clinicTypes';
import { useToast } from '../../../context/ToastContext';
import { useState } from 'react';

export default function CreateDoctorForm() {
  const { showToast } = useToast();

  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: (data: DoctorRequest) => createDoctor('clinicId', data),
    onSuccess: () => {
      showToast('Doctor created successfully!', { type: 'success' });
      formik.resetForm();
    },
    onError: (error: unknown) => {
      const errorMessage =
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message || 'Failed to create doctor.';
      showToast(errorMessage, { type: 'error' });
    },
  });

  const formik = useFormik<DoctorRequest>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      experienceYears: 0,
      education: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      gender: Yup.string().required('Gender is required'),
      experienceYears: Yup.number()
        .min(0, 'Experience years must be at least 0')
        .required('Experience years are required'),
      education: Yup.string().required('Education is required'),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append('firstName', values.firstName);
      formData.append('lastName', values.lastName);
      formData.append('email', values.email);
      formData.append('phone', values.phone);
      formData.append('gender', values.gender);
      formData.append('experienceYears', values.experienceYears.toString());
      formData.append('education', values.education);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }
      mutation.mutate(formData);
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
            Fill this form to create a new doctor
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
                  id="phone"
                  name="phone"
                  label="Phone Number *"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <FormControl
                  fullWidth
                  variant="standard"
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                >
                  <InputLabel id="gender-label">Gender *</InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="MALE">Male</MenuItem>
                    <MenuItem value="FEMALE">Female</MenuItem>
                    <MenuItem value="OTHER">Other</MenuItem>
                  </Select>
                  {formik.touched.gender && formik.errors.gender && (
                    <Typography variant="caption" color="error">
                      {formik.errors.gender}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="experienceYears"
                  name="experienceYears"
                  label="Experience Years *"
                  type="number"
                  value={formik.values.experienceYears}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.experienceYears &&
                    Boolean(formik.errors.experienceYears)
                  }
                  helperText={
                    formik.touched.experienceYears &&
                    formik.errors.experienceYears
                  }
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="education"
                  name="education"
                  label="Education *"
                  value={formik.values.education}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.education && Boolean(formik.errors.education)
                  }
                  helperText={
                    formik.touched.education && formik.errors.education
                  }
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Profile Picture
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar
                    src={preview || ''}
                    alt="Profile Preview"
                    sx={{ width: 80, height: 80 }}
                  />
                  <TextField
                    variant="standard"
                    fullWidth
                    id="profilePicture"
                    name="profilePicture"
                    type="file"
                    inputProps={{ accept: 'image/*' }}
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        const file = e.target.files[0];
                        setProfilePicture(file);
                        setPreview(URL.createObjectURL(file));
                      }
                    }}
                  />
                </Box>
                {formik.touched.profilePicture &&
                  formik.errors.profilePicture && (
                    <Typography variant="caption" color="error">
                      {formik.errors.profilePicture}
                    </Typography>
                  )}
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
              {mutation.isPending ? 'Submitting...' : 'Create Doctor'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
