import React from 'react';

const Navigation = () => {
    return (
        <nav className='ba bw3 container'>
            <div className='row pa0'>
                <div className='col pa0 ba bg-near-black hover: dim'> 
                    <p className='tc f4 silver link pointer'>Lokacja</p>
                </div>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Wielka Sala</p>
                </div>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Pokój Wspólny</p>
                </div>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Lekcje</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Kufer</p>
                </div>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Poczta</p>
                </div>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Regulamin</p>
                </div>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Izba Pamięci</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Poradnik</p>
                </div>
                    {/* {<p>Prasa</p>} - Prorok Codzienny, Żongler
                    <p> Pokój Nauczycielski</p> - Opcje dla rang */}
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Ustawienia</p>
                </div>
                <div className='col pa0 ba bg-near-black hover: dim'>
                    <p className='tc f4 silver link pointer'>Wyloguj</p>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;