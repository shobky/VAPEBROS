import React, { useState } from 'react';
import './styles.css';
import { GiSettingsKnobs } from 'react-icons/gi'
import { IoIosSearch } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { useProducts } from '../../../contexts/ProductsContext';


const Categories = ({ category }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [filtersOpen, setFiltersOpen] = useState(false)
  const { hadnleSearchInput, searchQuery } = useProducts()

  const handleFilterSelect = () => {

    if (filtersOpen) {
      setFiltersOpen(false)

    } else {
      setFiltersOpen(true)
    }
  }

  const handleFilterClick = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const isFilterActive = (filter) => activeFilters.includes(filter);






  let startY; // will hold the starting Y position of the touch

  function handleTouchStart(event) {
    // store the starting Y position of the touch
    startY = event.touches[0].clientY;
  }

  function handleTouchEnd(event) {
    const endY = event.changedTouches[0].clientY; // ending Y position of the touch

    // calculate the distance moved
    const distance = startY - endY;

    // check if the user swiped up or down
    if (distance > 0) {
      // user swiped up
      document.getElementById('cateogry-container-id').classList.add('cat-container_scroll');
    } else {
      // user swiped down
      document.getElementById('cateogry-container-id').classList.remove('cat-container_scroll');

    }
  }

  function handleScroll(event) {
    // get the direction of the scroll
    const direction = event.deltaY > 0 ? 'up' : 'down';

    // check if the user scrolled up or down
    if (direction === 'up') {
      // user scrolled up
      document.getElementById('cateogry-container-id').classList.remove('cat-container_scroll');

    } else {
      // user scrolled down
      document.getElementById('cateogry-container-id').classList.add('cat-container_scroll');

    }
  }


  // document.addEventListener('touchstart', handleTouchStart);
  // document.addEventListener('touchend', handleTouchEnd);
  // document.addEventListener('wheel', handleScroll);


  return (
    <div className='category'>
      <div id="cateogry-container-id" className='cat-container'>
        <div className='cat-mobile-header'>
          <p className='filters-flex' onClick={handleFilterSelect}> <GiSettingsKnobs className='cat-filter-ico' />Filter</p>
          <input value={searchQuery ?? ""} onChange={(e) => hadnleSearchInput(e.target.value)} className='cat-search-input' placeholder={`Search ${category}...  `} />
          <IoIosSearch className='cat-search-ico' />
        </div>
        <div className={filtersOpen ? 'cat-filters__active' : 'cat-filters'}>
          {/* <div className='filter_active-header'>
            <p className='filter-open-head'>Filters</p>
            <IoCloseOutline onClick={closeFilters} className='filter-open-close-btn' />
          </div> */}

          <p className='cat-header'>Number of puffs</p>
          <div className='cat-filter-pills-container'>
            <p
              id='5000'
              onClick={() => handleFilterClick('5000')}
              className={`filter-pill ${isFilterActive('5000') ? 'active' : ''}`}
            >
              5000 PUFFS
            </p>
            <p
              id='4500'
              onClick={() => handleFilterClick('4500')}
              className={`filter-pill ${isFilterActive('4500') ? 'active' : ''}`}
            >
              4500 PUFFS
            </p>
            <p
              id='3000'
              onClick={() => handleFilterClick('3000')}
              className={`filter-pill ${isFilterActive('3000') ? 'active' : ''}`}
            >
              3000 PUFFS
            </p>
            <p
              id='1000'
              onClick={() => handleFilterClick('1000')}
              className={`filter-pill ${isFilterActive('1000') ? 'active' : ''}`}
            >
              1000 PUFFS
            </p>
            <p
              id='500'
              onClick={() => handleFilterClick('500')}
              className={`filter-pill ${isFilterActive('500') ? 'active' : ''}`}
            >
              500 PUFFS
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Categories;
