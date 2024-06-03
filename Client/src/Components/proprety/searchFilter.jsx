import React, { useState } from 'react';
import { CiSliderHorizontal } from "react-icons/ci";
import { DatePicker, Space } from 'antd';
import 'antd/dist/reset.css';
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react';
import './stylecss.css';
import { fetchListingsFilter } from '../../Api/apiProprety'; 
import CardWithImageLeft from './Card/CardComponent';

const { RangePicker } = DatePicker;

const SearchFilters = ({ onSearch }) => {
  const [forSale, setForSale] = useState(false);
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false);
  const [priceRangeDropdown, setPriceRangeDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [isDragging, setIsDragging] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPropertyType, setSelectedPropertyType] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchInputChange = (e) => {
    setSearch(e.target.value);
  };

  const toggleForSaleDropdown = () => {
    setForSale(!forSale);
    if (propertyTypeDropdown) setPropertyTypeDropdown(false);
    if (priceRangeDropdown) setPriceRangeDropdown(false);
  };

  const handleDoneButtonClick = () => {
    if (selectedStatus === 'Vacation') {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedStatus(value);
    if (value === 'Vacation') {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };

  const onDateRangeChange = (dates) => {
    if (dates) {
      setDateRange(dates);
    }
  };

  const togglePropertyTypeDropdown = () => {
    setPropertyTypeDropdown(!propertyTypeDropdown);
    if (forSale) setForSale(false);
    if (priceRangeDropdown) setPriceRangeDropdown(false);
  };

  const handlePropertyTypeChange = (e) => {
    const value = e.target.value;
    setSelectedPropertyType(value);
  };

  const togglePriceRangeDropdown = () => {
    setPriceRangeDropdown(!priceRangeDropdown);
    if (forSale || propertyTypeDropdown) {
      setForSale(false);
      setPropertyTypeDropdown(false);
    }
  };

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
  };

  const handleSliderMouseDown = () => {
    setIsDragging(true);
  };

  const handleSliderMouseUp = () => {
    setIsDragging(false);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const filterParams = {
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
        selectedPropertyType,
        selectedStatus,
        search,
        startDate: dateRange[0],
        endDate: dateRange[1]
      };
      onSearch(filterParams);
      setLoading(false);
    } catch (error) {
      console.error('Error filtering listings:', error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center p-4 border-b border-gray-300">
      <div className="flex items-center gap-6">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP"
            className="search-bar-input flex justify-start items-center pl-1 pr-10 py-1 border border-gray-300 rounded-lg shadow-sm w-96 text-lg"
            value={search}
            onChange={handleSearchInputChange}
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <i className="fas fa-search text-white bg-orange-500 p-2 rounded-full"></i>
          </span>
        </div>

        <div className="flex gap-9 items-center" style={{ zIndex: 1 }}>
          <div className="relative">
            <button
              type="button"
              className={`open-btn mb15 dropdown-toggle show border border-gray-300 rounded-lg text-[#252836] shadow-sm w-36 h-9 text-lg ${forSale ? 'active' : ''}`}
              onClick={toggleForSaleDropdown}
            >
              For Sale <i className="fas fa-angle-down ms-6"></i>
            </button>
            {forSale && (
              <div className="dropdown-menu show absolute mt-4 w-60 h-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="widget-wrapper bdrb1 pb-2 pl-2">
                  <h6 className="list-title font-bold text-[#252836]">Listing Status</h6>
                  <div className="radio-element">
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="listingStatus"
                        value="All"
                        checked={selectedStatus === 'All'}
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label ml-2">All</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="listingStatus"
                        value="Sale"
                        checked={selectedStatus === 'Sale'}
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label ml-2">Sale</label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="listingStatus"
                        value="Rent"
                        checked={selectedStatus === 'Rent'}
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label ml-2">Rent</label>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="listingStatus"
                        value="Vacation"
                        checked={selectedStatus === 'Vacation'}
                        onChange={handleRadioChange}
                      />
                      <label className="form-check-label ml-2">Vacation</label>
                    </div>
                  </div>
                </div>
                <div className="text-end mt-2 pr-2">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn bg-[#252836] text-gray-100 hover:bg-gray-100 hover:text-[#252836] font-bold w-full py-1 w-14 rounded-lg"
                    onClick={handleDoneButtonClick}
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              className="open-btn mb15 dropdown-toggle show border border-gray-300 rounded-lg text-[#252836] shadow-sm w-36 h-9 text-lg"
              onClick={togglePropertyTypeDropdown}
            >
              Property <i className="fas fa-angle-down ms-2"></i>
            </button>
            {propertyTypeDropdown && (
              <div className="dropdown-menu show absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="widget-wrapper bdrb1 pb-2 pl-2">
                  <h6 className="list-title font-bold text-[#252836]">Property Type</h6>
                  <div className="radio-element">
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        value="All"
                        checked={selectedPropertyType === 'All'}
                        onChange={handlePropertyTypeChange}
                      />
                      <label className="form-check-label ml-2" htmlFor="All">All</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        value="Houses"
                        checked={selectedPropertyType === 'Houses'}
                        onChange={handlePropertyTypeChange}
                      />
                      <label className="form-check-label ml-2" htmlFor="Houses">Houses</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        value="Apartment"
                        checked={selectedPropertyType === 'Apartment'}
                        onChange={handlePropertyTypeChange}
                      />
                      <label className="form-check-label ml-2" htmlFor="Apartment">Apartments</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        value="Villa"
                        checked={selectedPropertyType === 'Villa'}
                        onChange={handlePropertyTypeChange}
                      />
                      <label className="form-check-label ml-2" htmlFor="Villa">Villa</label>
                    </div>
                    <div className="form-check d-flex align-items-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="propertyType"
                        value="Lands"
                        checked={selectedPropertyType === 'Lands'}
                        onChange={handlePropertyTypeChange}
                      />
                      <label className="form-check-label ml-2" htmlFor="Lands">Lands</label>
                    </div>
                    {/* Add more property types as needed */}
                  </div>
                </div>
                <div className="text-end mt-2 pr-2">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn bg-[#252836] text-gray-100 hover:bg-gray-100 hover:text-[#252836] font-bold w-full py-1 w-14 rounded-lg"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              type="button"
              className="open-btn mb15 dropdown-toggle show border border-gray-300 rounded-lg text-[#252836] shadow-sm w-36 h-9 text-lg flex items-center justify-center"
              onClick={togglePriceRangeDropdown}
            >
              Price <CiSliderHorizontal className="ml-2" />
            </button>
            {priceRangeDropdown && (
              <div className="dropdown-menu show absolute mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="widget-wrapper p-4">
                  <h6 className="list-title font-bold mb-2 text-[#252836]">Price Range</h6>
                  <RangeSlider
                    aria-label={['min', 'max']}
                    colorScheme="blue"
                    defaultValue={priceRange}
                    min={0}
                    max={1000000}
                    onChange={handlePriceRangeChange}
                    onMouseDown={handleSliderMouseDown}
                    onMouseUp={handleSliderMouseUp}
                  >
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                  <div className="flex justify-between mt-2">
                    <input
                      type="text"
                      placeholder='0 MAD'
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange([e.target.value, priceRange[1]])}
                      className="w-20 border border-gray-300 rounded-md p-1 text-center"
                    />
                    <span className="self-center">-</span>
                    <input
                      type="text"
                      placeholder='100000 MAD'
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange([priceRange[0], e.target.value])}
                      className="w-20 border border-gray-300 rounded-md p-1 text-center"
                    />
                  </div>
                </div>
                <div className="text-right p-4">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn bg-[#252836] text-gray-100 hover:bg-gray-100 hover:text-[#252836] font-bold w-full w-14 py-1 rounded-lg"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {showDatePicker && (
        <div className="flex gap-4 items-center">
          <div className="text-center">
            <RangePicker
              onChange={onDateRangeChange}
              className="open-btn mb15 dropdown-toggle show border border-gray-300 rounded-full shadow-sm w-80 h-9 text-lg flex items-center justify-center"
              format="YYYY-MM-DD"
              placeholder={['Check In Date', 'Check Out Date']}
            />
          </div>
        </div>
      )}

        <div className="flex items-center gap-2">
          <button
            className="bg-[#252836] hover:bg-gray-50 text-white font-bold w-32 py-1 rounded-lg"
            onClick={handleSearch}
          >
            <span className="text-gray-50 hover:text-[#252836]">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;