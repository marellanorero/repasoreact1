import React from 'react'

function Jumbotron () {
    return(
        <div className='container'>
            <div className='jumbotron p-3 mb-2 bg-light text-dark'>
                <h1 className='display-4'>
                    <strong>A WARM WELCOME!</strong>
                </h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
                </p>
            </div>
        </div>
    )
}

export default Jumbotron;