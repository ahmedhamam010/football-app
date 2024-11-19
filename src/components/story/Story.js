import './Story.css'
const Story = ({item}) => {
    
    return (
      <div className='story-container' >
          <img src="/assests/images/story.png" alt="story-img" className='rounded-circle' />
          <p className='mt-1 mb-0'>مسابقة الجولة {item}</p>
      </div>
    )
}


export default Story