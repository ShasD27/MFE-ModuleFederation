import React from "react";

const ReactMFE1 = React.lazy(
    () => import ('ReactMFE1/Button')
)

const ReactMFE2 = React.lazy(
    () => import ('ReactMFE2/Button')
)

const App = () => {
    return (
        <>
            <div>
                <h1>React MFE app1</h1>
            </div>
            <ReactMFE1 />
            <ReactMFE2 />
        </>
    )
}

export default App