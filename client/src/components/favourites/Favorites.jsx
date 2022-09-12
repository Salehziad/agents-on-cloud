import React, {useEffect, useState} from 'react';
import {Grow, Grid} from '@mui/material';
import {getUserFavorites} from "../../api/itemApi";
import {isAuthenticated} from '../../auth';

import Items from '../item/Items';
import './favourites.css'

export default function Favorites() {
    const [active,
        setActive] = useState(true);
    const [items,
        setItems] = useState();
    const [error,
        setError] = useState('');
    const {user, token} = isAuthenticated();

    const loadItems = async() => {
        await getUserFavorites(user._id, token).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setItems(data)
            }
        });
    };

    useEffect(() => {
        loadItems()
    }, []);
    return (
        <div>
            <Grow in>
                <Grid className='home-container' container alignItems="stretch" spacing={3}>
                    {items
                        ? items.map((prod, i) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                style={{
                                display: 'flex'
                            }}
                                key={i}>
                                <Items item={prod} i={i} active={active}/>
                            </Grid>
                        ))
                        : null}
                </Grid>
            </Grow>
        </div>
    )
}
