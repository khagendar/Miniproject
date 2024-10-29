import React, { useState } from 'react';
import Navbar from '../Home/navbar';
import {TextField,Button,Avatar} from '@mui/material';
// import { Stack, TextField, Button, Avatar, Typography, Snackbar, Alert } from '@mui/material';
// import { Card, CardContent, CardMedia, Typography, IconButton, Divider, Avatar } from '@mui/material';
// import { Favorite, ChatBubbleOutline, Share } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { CButton } from '@coreui/react';

const Createpost = () => {
    const [post, setPost] = useState(null);
    const [caption,setCaption] =useState();
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPost(URL.createObjectURL(file));
        }
    };
    const uploadPost=()=>{
        const formData=new FormData();
        formData.append('image',post);
        formData.append('caption',caption);
    }
    return (
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
                    alignItems: 'center',
                }} className="bg-secondary">
                    <div style={{
                        height: '500px',
                        width:'400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border : '1px solid rgba(0,0,0,0.7)',
                        backgroundColor : 'white',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                    }}>
                        {/* {post && (
                            <div style={{
                                width: '100%', // Set the desired width
                                height: '100%', // Set the desired height
                                overflow: 'hidden',
                                position: 'relative',
                            }}>
                                <img 
                                    src={post} 
                                    alt="Uploaded" 
                                    style={{
                                        width: '60%', // Stretch to fill the width
                                        height: '60%', // Stretch to fill the height
                                        objectFit: 'fill', // Stretch the image to fit the container
                                        position: 'absolute',
                                        top: '10px',
                                        left: '10px',
                                        margin : '8px'
                                    }} 
                                />
                            </div>
                        )} */}
                        <div
                            style={{
                                display : 'flex',
                                gap : '10px',
                                flexDirection : 'column',
                                justifyContent : 'space-between',
                            }}  
                         >
                            <input type="file" onChange={(e)=>{handleFileChange(e)}} accept='image/*' style={{border : '1px solid rgba(0,0,0,0.6)'}}/>
                            <label>select an image that has  a size of 500x400</label>
                            <TextField
                                label="caption"
                                multiline
                                rows={4}
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            />
                            <Button variant="contained" color="primary" onClick={()=>{uploadPost()}}>
                                Upload
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Createpost;
