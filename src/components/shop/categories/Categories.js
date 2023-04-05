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
  const { hadnleSearchInput } = useProducts()

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



  return (
    <div className='category'>
      <div className='cat-container'>
        <div className='cat-mobile-header'>
          <p className='filters-flex' onClick={handleFilterSelect}> <GiSettingsKnobs className='cat-filter-ico' />Filter</p>
          <input onChange={(e) => hadnleSearchInput(e.target.value)} className='cat-search-input' placeholder={`Search ${category}...  `} />
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
              5000
            </p>
            <p
              id='4500'
              onClick={() => handleFilterClick('4500')}
              className={`filter-pill ${isFilterActive('4500') ? 'active' : ''}`}
            >
              4500
            </p>
            <p
              id='3000'
              onClick={() => handleFilterClick('3000')}
              className={`filter-pill ${isFilterActive('3000') ? 'active' : ''}`}
            >
              3000
            </p>
            <p
              id='1000'
              onClick={() => handleFilterClick('1000')}
              className={`filter-pill ${isFilterActive('1000') ? 'active' : ''}`}
            >
              1000
            </p>
            <p
              id='500'
              onClick={() => handleFilterClick('500')}
              className={`filter-pill ${isFilterActive('500') ? 'active' : ''}`}
            >
              500
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Categories;
