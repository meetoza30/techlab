import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import Event1 from './Images/Event1.png';
import Event2 from './Images/Event2.png';
import Event3 from './Images/Event3.png';
import Event4 from './Images/Event4.png';
import Event5 from './Images/Event5.png';
import './RitualsPage.css';

function RitualsPage(){
    return(
        <>
        <div className='container'>
          <h1 className='text-2xl font-bold '>By embracing the Tech Lab Code, we create a dynamic and inclusive community where individuals can <span className='text-red-600'>thrive, learn, collaborate</span>, and ultimately shape the future of technology.</h1>
        <CCarousel controls white indicators dark >
  <CCarouselItem className='item'>

    <CImage className="d-block w-100 carousel-image"  src={Event1} alt="slide 1" />
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100 carousel-image" src={Event2} alt="slide 2" />
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100 carousel-image" src={Event3} alt="slide 3" />
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100 carousel-image" src={Event4} alt="slide 4" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100 carousel-image" src={Event5} alt="slide 5" />
  </CCarouselItem>

</CCarousel>
</div>
        </>
    )
}

export default RitualsPage;
