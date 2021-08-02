import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import {ThemeProvider, createTheme} from '@material-ui/core/styles'
export default function ActionAreaCard(props) {
    const theme = createTheme({
        palette: {
            type: "dark"
        }
    });
    return (
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <Card sx={{ maxWidth: 500 }} className={props.className} style={{backgroundColor: '#424242'}}>
                        <CardActionArea>
                            <CardMedia
                                sx={{ height: 500, width: 400 }}
                                image={props.image}
                                title='Product'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{color:'#fff'}}>
                                    {props.header}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </ThemeProvider>
            </React.Fragment>
    );
}