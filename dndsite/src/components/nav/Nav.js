import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav style={styles.container}>
            <NavLink to="/NewsFeed" style={styles.anchor}>D&D NewsFeed</NavLink>
            <NavLink to="/Messages" style={styles.anchor}>Messages</NavLink>
            <NavLink to="/Watch" style={styles.anchor}>Watch</NavLink>
        </nav>
    )
};

export default Nav

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        marginLeft: '1em',
        marginTop: '3em'
    },

    anchor: {
        fontSize: '20px',
        marginBottom: '7px',
        paddingTop: '0.5em',
        color: '#16A085',
        textDecoration: 'none'
    }
};