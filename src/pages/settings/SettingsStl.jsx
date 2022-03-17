import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SettingsStl = () => {

    const data = JSON.parse(localStorage.getItem('USER_DATA'));
    console.log(data);
    console.log(data['name']);

    return (
        <>
            <Typography variant="h4" gutterBottom>
                Tus datos 😎
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label={'Nombre'}
                        defaultValue={data['name']}
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Apellido"
                        defaultValue={data['last_name']}
                        variant="standard"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="dni"
                        name="dni"
                        label="DNI"
                        defaultValue={data['document_number']}
                        variant="standard"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Actualizar Datos
            </Button>
        </>
    );
}

export default SettingsStl;