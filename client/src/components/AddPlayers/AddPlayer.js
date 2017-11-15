import React from 'react';

import AddPlayersHeader from './AddPlayersHeader';
import Form from './AddPlayerForm';

class AddPlayers extends React.Component {
    render () {
        return(
            <div>

                <AddPlayersHeader />
                    <Form />
            </div>
        )
    }
};

export default AddPlayers;