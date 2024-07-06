// src/Dashboard.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CircularProgress, colors } from '@mui/material';
import { Dashboard, Person, Work, Event, Assignment, Mail, CalendarToday, PostAdd, Receipt, Report, BusinessCenter, Description, AttachMoney } from '@mui/icons-material';
import './Wdashboard.css';

const Wdashboard = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Box sx={{ display: 'flex', backgroundColor: ' #6f7777;', color: 'white', p: 2, alignItems: 'center' }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Warden Panel</Typography>
                <Typography>Mr Warden</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Box sx={{ width: '250px', backgroundColor: '#565454;', p: 2 }}>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', color:'white' }}>
                        <Dashboard sx={{ mr: 1,color:'white;' }} /> Dashboard
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', color:' white'}}>
                        <PostAdd sx={{ mr: 1 }} /> Add Students
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', color:' white' }}>
                        <Person sx={{ mr: 1 }} /> Requests
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center',color:' white' }}>
                        <Mail sx={{ mr: 1 }} /> Pending Requests
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center',color:' white' }}>
                        <CalendarToday sx={{ mr: 1 }} /> Accepted
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center',color:' white' }}>
                        <Event sx={{ mr: 1 }} /> Rejected
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center',color:' white' }}>
                        <Report sx={{ mr: 1 }} /> Complaints
                    </Box>
                </Box>
                <Box sx={{ flexGrow: 1, p: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Card sx={{backgroundColor:'#565454;',color:'white'}}>
                                <CardContent>
                                    <Typography>Students</Typography>
                                    <Typography variant="h4">77777</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card sx={{backgroundColor:'#565454;', color:'white'}}>
                                <CardContent>
                                    <Typography>Requests</Typography>
                                    <Typography variant="h4">23</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card sx={{backgroundColor:'#565454;',color:'white'}}>
                                <CardContent>
                                    <Typography>Granted Requests</Typography>
                                    <Typography variant="h4">123</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 2 }}>
                        <Card sx={{backgroundColor:'#565454;',color:'white'}}>
                            <CardContent>
                                <Typography>Leave Data Of this Month</Typography>
                                <Box sx={{ height: '300px',}}>
                                    {/* Add your chart component here */}
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Wdashboard;
