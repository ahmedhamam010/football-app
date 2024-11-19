import React, { useState } from 'react';
import './home.css'
import SearchInput from '../../components/search-input/SearchInput';
import Story from '../../components/story/Story';
import Banners from '../../components/banners/Banners';
import Champion from '../../components/champion/Champion';

const Home = () => {

  const [days, setDays] = useState(
    [
      { day: 'الجمعة 12 يوليو' , selectedDay: false },
      { day: 'الجمعة 12 يوليو' , selectedDay: false },
      { day: 'امس' , selectedDay: false },
      { day: 'اليوم' , selectedDay: true },
      { day: 'غدا' , selectedDay: false },
      { day: 'الجمعة 12 يوليو' , selectedDay: false },
      { day: 'الجمعة 12 يوليو' , selectedDay: false },
    ]
  );

  return (
    <div className="container d-md-flex justify-content-center align-items-center my-4">
      <div className="col-md-7 home-page">
        
        <div className='p-2 p-md-4'>

            {/*main serach*/}
            <SearchInput 
                placeholder={'ابحث عن لاعب، نادي، بطولة،..'} 
            />

            {/*story list*/}
            <div className="d-flex my-4 hideScroll">
            {
                [...Array(10)].map((e, i) => <Story key={i} item={i} /> )
            }
            </div>

            {/*banners*/}
            <Banners />

            {/*filter*/}
            <div className='d-flex mb-4 align-items-center'>
              
              <div className='search-filter'>
                <SearchInput 
                  placeholder={'ابحث عن مباراة'} 
                />
              </div>

              <img className="cursor-pointer mx-3" src="/assests/images/calender.png" alt="calender" />

              <div className='toggle-icon'>
                <span>مباشر</span>
                <img className="cursor-pointer" src="/assests/images/toggle-disabled.png" alt="toggle-disabled" />
              </div>
              
            </div>

            {/*days*/}
            <div className="days-container container d-flex my-md-4 hideScroll">
            {
                days.map((e, i) => 
                  <div key={i} className={`${e.selectedDay ? 'active-day' : '' } gray-color day-item`}>{e.day}</div>
                 )
            }
            </div>


            {/*champions*/}
            <Champion />
            <Champion />

            {/*banner*/}
            <div className='my-4'>
              <img className="d-block w-100 cursor-pointer" src="/assests/images/banner.png" alt="banner" />
            </div>

            {/*champions*/}
            <Champion />
            <Champion />


        </div>

      </div>
    </div>
  );
};

export default Home;