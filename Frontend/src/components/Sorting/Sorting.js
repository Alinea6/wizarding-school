import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Sorting extends React.Component {


    render() {
        return (
            <Container className='ba bw2 bg-black'>
                <Row className='pa0 ba'> 
                    <Col className='pa0'>
                        <p className="tc f4 moon-gray pa0">Dom</p>
                    </Col>
                </Row>
                <Container className='pa0'>
                    <Row className='pa1'>
                        <p className='tj pa2 moon-gray'>Podchodzisz do umywalki w celu umycia zębów. 
                        Twój wzrok pada na wiszące nad nią lustro, w którym widzisz swoje 
                        odbicie. Patrząc na własną twarz, uświadamiasz sobie, że odczuwasz 
                        lekki stres w związku z wyjazdem do szkoły, ale również ekscytację. 
                        Zaczynasz się zastanawiać, czego najbardziej nie możesz się doczekać 
                        po przyjeździe do Hogwartu. Po chwili dochodzisz do wniosku, że 
                        najbardziej zależy Ci na:</p>
                    </Row>
                    <Row>
                        <ul>
                            <li className='moon-gray link hover: dim pointer'>przygodach, które tam przeżyjesz.</li>
                            <li className='moon-gray link hover: dim pointer'>zostaniu najlepszym uczniem.</li>
                            <li className='moon-gray link hover: dim pointer'>zdobywaniu wiedzy.</li>
                            <li className='moon-gray link hover: dim pointer'>zawarciu nowych przyjaźni.</li>
                        </ul>                        
                    </Row>

                </Container>
            </Container>
        )
    }
}

export default Sorting;