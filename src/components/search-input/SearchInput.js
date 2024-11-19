import './SearchInput.css'
const SearchInput = ({placeholder}) => {
    
    return (
      <div className='search-container position-relative' >
          <input type="text" className='w-100'  placeholder={placeholder} />
          <img src="/assests/images/search.svg" alt="search-img" className='search-icon position-absolute' />
      </div>
    )
}


export default SearchInput