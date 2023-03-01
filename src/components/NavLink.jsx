import { Grid, Button, CardContent, Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
export const NavLink = () => {
    return (
        <div>
            <Grid container spacing={8} >
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Button variant='contained' >
                                <Link to="/">Comp3 Home</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Button variant='contained'>
                                <Link to="todosim"> Comp3 TodoSimple</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Button variant='contained'>
                                <Link to="tabledata">Comp3 TableData</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Button variant='contained' color='success'>
                                <Link to="comp4home">Comp4 Home</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Button variant='contained' color='success'>
                                <Link to="comp4todo">Comp4 Todo</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Button variant='contained' color='warning'>
                                <Link to="comp2">Comp2 First</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </div>
    )
}
