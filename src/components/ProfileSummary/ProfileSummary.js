import React from 'react';
import {ProgressBar} from 'react-bootstrap'

let lifeNow = 100
let actionPointsNow=100 
let experienceNow=25

const ProfileSummary = () => {
    return (
        <div className='ba bw2 container' style={{display: 'grid'}}>
            <div className='row pa0'>
                <div className='col pa0 ba bg-black'>
                    <p className='tc f4 silver link pointer'>Login</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'>Punkty Życia: 10/10</p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'>Dom: nieprzydzielony</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <ProgressBar striped variant="danger" now={lifeNow} />
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver link pointer underline'>Karta postaci</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'>Punkty Akcji: 10/10</p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'>Pieniądze: 0g 0s 0k</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <ProgressBar striped variant="success" now={actionPointsNow} />
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'>Skrytka: 0g 0s 0k</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'>Doświadczenie: 25/100</p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'>Poziom: 1</p>
                </div>
            </div>
            <div className='row pa0'>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <ProgressBar striped variant="warning" now={experienceNow} />
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 pa0 bg-black'>
                    <p className='pa0 f6 silver'></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary;