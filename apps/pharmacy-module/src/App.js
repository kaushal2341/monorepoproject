import React from 'react';

import {CForm} from '@cogent/ui-components';
import FormControlComponents from "./FormControlComponents";

function App() {
    return (
        <div>
            <CForm
                id="test"
                children={<FormControlComponents />}
                noValidate={true}
                validated={true}
                onSubmit={() => console.log()}
            />
        </div>
    );
}

export default App;
