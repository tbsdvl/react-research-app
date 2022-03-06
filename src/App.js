import React from "react";

const App = () => {

    return (
        <div id="app">
            <section id="welcome">
                <div className="d-flex flex-column justify-content-center align-items-center p-2 text-light bg-dark">
                    <h1>Welcome to Launchpad App!</h1>
                    <h2>You're ready to launch, happy coding!</h2>
                </div>
            </section>
            <section id="logo">
                <div className="d-flex flex-column justify-content-center align-items-center p-2 bg-light">
                    <img alt="logo" src="images/launchpad_logo.png" />
                </div>
            </section>
        </div>
    );
};

export default App;