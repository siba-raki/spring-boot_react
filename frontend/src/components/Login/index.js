import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Snack from '../Snack';

function Login({setValid, setRol}) {
    const [login, setLogin] = React.useState({name: "", password:""})
    const navigate = useNavigate();


    const theme = createTheme();

    const handleInputChange = e => {
        const { name, value } = e.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const submitHandler = (e) => {
        if (e && "preventDefault" in e) e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": '*'},
            body: JSON.stringify({'name': login['name'], 'password':login['password']})
        };
        fetch('/api/login', requestOptions)
        .then( res => {
            if (res.ok){
                setValid(true)
                setRol(res.text)
                navigate('/');
            }
            throw res
        }).catch(error => {
            if (error.status === 401){
                setSnack("Usuario o contraseña incorrecto")
            }
        })
    }
    
    const [snack, setSnack] = React.useState(false);
    return(
        <React.Fragment>
            <Snack msg={snack} setMsg={setSnack} severity="error"/>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        >
                        <Typography component="h1" variant="h5">
                            Iniciar sección
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={submitHandler}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Usuario"
                                name="name"
                                autoFocus
                                type="text"
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleInputChange}
                                />
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            >
                            Acceder
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </React.Fragment>
    )
}
export { Login }
