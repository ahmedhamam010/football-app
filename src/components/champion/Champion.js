import Match from '../match/Match';
import './Champion.css'
import { useState } from 'react';
const Champion = () => {

  const [toggleItem, setToggleItem] = useState(true);

  const clubs = [
    { id: 1 , club1Img : '/assests/images/club.png' , club1Name: 'ريال مدريد' , club2Img : '/assests/images/club2.png' , club2Name: 'برشلونة' , isLive: false , time: '6:00 ص' },
    { id: 2 , club1Img : '/assests/images/club.png' , club1Name: 'ريال مدريد' , club2Img : '/assests/images/club2.png' , club2Name: 'برشلونة' , isLive: false , time: '6:00 ص' },
    { id: 3 ,club1Img : '/assests/images/club.png' , club1Name: 'ريال مدريد' , club2Img : '/assests/images/club2.png' , club2Name: 'برشلونة' , isLive: true  , time: '6:00 ص' },
    
  ]

  return (
    <div className='mb-2'>
      <div className={`champion-container cursor-pointer ${toggleItem ? 'match-border' : '' }`} onClick={ () => {setToggleItem(!toggleItem)  } } >
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <img src="/assests/images/flag.png" alt="flag-img" className='rounded-circle' />
            <span className='fw-medium champion-name mx-2 mx-md-3'>
            الأرجنتين - الدوري الأرجنتيني - الدرجة الثالثة
            </span>
          </div>

          <div className='d-flex align-items-center'>
            <div className='bg-white rounded-circle mx-3 p-1'>
              <span className='matches-number'>12</span>
            </div>
            <img src="/assests/images/chevron-down.png" alt="flag-img" className='toggle-slide' />
          </div>

        </div>
      </div>

      { toggleItem && (
      <div className='matches bg-white'>
        {
          clubs.map((e, i) =>  
            <Match key={i} item={e} />
          )
        
        }
      </div>
      ) }

    </div>
  );
};

export default Champion;
