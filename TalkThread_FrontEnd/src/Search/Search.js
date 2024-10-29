import React from 'react';
import Navbar from '../Home/navbar';
import { Card, CardContent, CardMedia, Typography, IconButton, Divider ,Avatar} from '@mui/material';
import { Favorite, ChatBubbleOutline, Share } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
const Search=()=>{
    return(
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100vh',
                padding: '0',
                margin: '0',
            }}>
                <Navbar />
                <div style={{
                    flexGrow: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    overflowY: 'scroll', 
                    // alignItems: 'center',
                    // backgroundColor : 'black',
                }} className="bg-secondary">
                </div>
            </div>
        </>
    );
}
export default Search;