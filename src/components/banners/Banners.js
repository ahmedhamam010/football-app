import { Carousel } from 'react-bootstrap';
import './Banners.css'
const Banners = () => {

  return (
     <div className='pb-5'>
     <Carousel controls={false}>
        <Carousel.Item>
          <img className="d-block w-100 cursor-pointer" src="/assests/images/banner.png" alt="slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 cursor-pointer" src="/assests/images/banner.png" alt="slide" />
        </Carousel.Item>
      </Carousel>
      </div>
  );
};

export default Banners;
