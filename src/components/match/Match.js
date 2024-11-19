import './Match.css'
const Match = ({item}) => {

  return (
    <div className='d-flex justify-content-between align-items-center match mb-3'>
      <div>
        <img src={item.club1Img} alt="flag-img" className='rounded-circle' />
        <span className='gray-color fw-medium club-name mx-2'>
        {item.club1Name}
        </span>
      </div>

      {
        item.isLive
        ? 
        <div className='match-date'>
          {item.time}
        </div>
        :
        <div className='match-live text-center'>
          <span>2:1</span>
          <div> (76) <img src={'/assests/images/time.svg'} className='m-1' alt="time-img" /> </div>
        </div>
      }

      <div>
        <span className='gray-color fw-medium club-name mx-2'>
        {item.club2Name}
        </span>
        <img src={item.club2Img} alt="flag-img" className='rounded-circle' />
      </div>


    </div>
  );
};

export default Match;
