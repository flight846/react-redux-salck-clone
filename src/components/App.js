import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import ColorPanel from './ColorPanel/ColorPanel';
import SidePanel from './SidePanel/SidePanel';
import Messages from './Messages/Messages';
import MetaPanel from './MetaPanel/MetaPanel';

import './App.css';

const App = ({ currentUser }) => {
    return (
        <Grid columns='equal' className='app' style={{ background: '#eee' }}>
            <ColorPanel />
            <SidePanel currentUser={currentUser}/>
            <Grid.Column style={{ marginLeft: 320 }}>
                <Messages />
            </Grid.Column>
            <Grid.Column width={4}>
                <MetaPanel />
            </Grid.Column>
        </Grid>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
