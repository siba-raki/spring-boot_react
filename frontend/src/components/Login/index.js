import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Snack from '../Snack';

function Login({ getLogin }) {
    const [snack, setSnack] = React.useState(false);

    const nameRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate();
    const theme = createTheme();

    const submitHandler = async (e) => {
        if (e && "preventDefault" in e) e.preventDefault()
        const data = {
            user: nameRef.current.value,
            password: passwordRef.current.value,
        }
        const isLoged = await getLogin(data);
        if (isLoged) {
            navigate('/');
        } else {
            setSnack("Usuario y contraseña incorrectos")
        }
    }
    
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
                                inputRef={nameRef}
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
                                inputRef={passwordRef}
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
