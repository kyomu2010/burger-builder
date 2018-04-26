import React from 'react';

import Aux from '../../hoc/Auxi';

// create layout wrapper function
const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children} 
        </main>
    </Aux>
);

export default layout;