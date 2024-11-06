import { useState } from "react";

function Account() {
    

    return (  
        <div>
            <h1>{localStorage.getItem('assistir')}</h1>
        </div>
    );
}

export default Account;