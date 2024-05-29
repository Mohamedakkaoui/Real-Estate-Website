// import React, { useState } from 'react';
// import Map from '../MapComp/MapComp';
// import './NewListingStyle.css'
// import { FiInfo } from "react-icons/fi";
// import { FaLocationCrosshairs } from "react-icons/fa6";
// import FileDropZone from '../UploadComp/UploadComp';
// import { PrimeReactProvider } from 'primereact/api';
// import TemplateDemo from '../UploadComp/UploadComp';
// import ListingDetails from '../ListingDetails/ListingDetails';
// import { MdFileUpload } from "react-icons/md";




// const AddListing = () => {
//     const [listingTitle, setListingTitle] = useState('');
//     const [type, setType] = useState('');
//     const [listingPrice, setListingPrice] = useState('');
//     const [category, setCategory] = useState('');
//     const [keywords, setKeywords] = useState('');
//     const [coordinates, setCoordinates] = useState('');



//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you can handle form submission
//         console.log('Form submitted!');
//         console.log('Listing Title:', listingTitle);
//         console.log('Type:', type);
//         console.log('Listing Price:', listingPrice);
//         console.log('Category:', category);
//         console.log('Keywords:', keywords);
//         // Reset form fields
//         setListingTitle('');
//         setType('All Types');
//         setListingPrice('');
//         setCategory('All Categories');
//         setKeywords('');
//     };

//     const [address, setAddress] = useState('');
//     const [city, setCity] = useState('');
//     const [longitude, setLongitude] = useState('');
//     const [latitude, setLatitude] = useState('');

//     const handleAddressChange = (e) => {
//         setAddress(e.target.value);
//     };

//     const handleCityChange = (e) => {
//         setCity(e.target.value);
//     };

//     const handleLongitudeChange = (e) => {
//         setLongitude(e.target.value);
//     };

//     const handleLatitudeChange = (e) => {
//         setLatitude(e.target.value);
//     };

//     const handleCoordinatesChange = (coords) => {
//         if (coords) {
//             setLongitude(coords[0]); // Update longitude with 6 decimal places
//             setLatitude(coords[1]); // Update latitude with 6 decimal places
//         }
//     };


//     return (


//         <div className="dasboard-widget-box fl-wrap">
//             <div className="custom-form">
//                 <form onSubmit={handleSubmit}>
//                     <div className="widget">
//                         <div className="widget-header">
//                             <div className="widget-icon"><FiInfo /></div>
//                             <h3 className="widget-title">Basic Informations</h3>
//                         </div>
//                         <div className="widget-content">
//                             <div className="Info">

//                                 <div className="col-sm-41">
//                                     <label>Listing Title</label>
//                                     <input
//                                         type="text"
//                                         placeholder="Title of your property"
//                                         value={listingTitle}
//                                         onChange={(e) => setListingTitle(e.target.value)}
//                                     />
//                                 </div>

//                                 <div className="col-sm-42">
//                                     <label>Listing Price</label>
//                                     <input
//                                         type="text"
//                                         placeholder="Listing Price"
//                                         value={listingPrice}
//                                         onChange={(e) => setListingPrice(e.target.value)}
//                                     />
//                                 </div>
//                                 <div className="col-sm-43">
//                                     <label>Type</label>
//                                     <select
//                                         value={type}
//                                         onChange={(e) => setType(e.target.value)}
//                                     >
//                                         <option value="All Types">All Types</option>
//                                         <option value="Rent">Rent</option>
//                                         <option value="Sale">Sale</option>
//                                         <option value="VacationalRent">Vacation</option>
//                                     </select>
//                                 </div>

//                                 <div className="col-sm-44">
//                                     <label>Category</label>
//                                     <select
//                                         value={category}
//                                         onChange={(e) => setCategory(e.target.value)}
//                                     >
//                                         <option value="All Categories">All Categories</option>
//                                         <option value="House">House</option>
//                                         <option value="Apartment">Apartment</option>
//                                         <option value="Villa">Villa</option>
//                                         <option value="Land">Land</option>
//                                         <option value="Office">Office</option>
//                                     </select>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>
//                     <div className="widget">
//                         <div className="widget-header">
//                             <div className="widget-icon"><FaLocationCrosshairs /></div>
//                             <h3 className="widget-title">Location</h3>
//                         </div>
//                         <div className='Location'>
//                             <div className='Locationinputs'>
//                                 <div className='Address'>
//                                     <label>Address</label>
//                                     <input
//                                         type="text"
//                                         value={address}
//                                         onChange={handleAddressChange}
//                                         placeholder="Enter address"
//                                     />
//                                 </div>
//                                 <div className='others'>
//                                     <label>City</label>
//                                     <input
//                                         type="text"
//                                         value={city}
//                                         onChange={handleCityChange}
//                                         placeholder="Enter city"
//                                     />
//                                 </div>
//                                 <div className='others'>
//                                     <label>Longitude (Drag marker on the map)</label>
//                                     <input
//                                         type="text"
//                                         value={longitude}
//                                         onChange={handleLongitudeChange}
//                                         placeholder="Map longitude"
//                                     />
//                                 </div>
//                                 <div className='others'>
//                                     <label>Latitude (Drag marker on the map)</label>
//                                     <input
//                                         type="text"
//                                         value={latitude}
//                                         onChange={handleLatitudeChange}
//                                         placeholder="Map latitude"
//                                     />
//                                 </div>
//                             </div>
//                             <Map />
//                         </div>
//                     </div>
//                     <div className="widget">
//                         <div className="widget-header">
//                             <div className="widget-icon"><FiInfo /></div>
//                             <h3 className="widget-title">Media</h3>
//                         </div>
//                         <div className="widget-content" style={{ margin: '0 0 15px 0' }}>
//                             <PrimeReactProvider>
//                                 <FileDropZone />
//                             </PrimeReactProvider>

//                             {/* <TemplateDemo /> */}
//                         </div>
//                     </div>
//                     <div className="widget">
//                         <div className="widget-header">
//                             <div className="widget-icon"><FiInfo /></div>
//                             <h3 className="widget-title">Listing Details</h3>
//                         </div>
//                         <div className="widget-content">
//                             <ListingDetails />

//                         </div>
//                     </div>
//                     <div className='flex justify-center'>
//                         <button type="submit" className="bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" style={{ backgroundColor: '#ffa920' }}>
//                             <MdFileUpload />
//                             <span>Add Listing</span>
//                         </button>
//                     </div>

//                 </form>
//             </div>
//         </div>

//     );
// }

// export default AddListing;
import React, { useState, useCallback } from 'react';
import { addNewListing } from '../../Api/apiProprety';
import Map from '../MapComp/MapComp';
import './NewListingStyle.css';
import { FiInfo } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import FileDropZone from '../UploadComp/UploadComp';
import { PrimeReactProvider } from 'primereact/api';
import ListingDetails from '../ListingDetails/ListingDetails';
import { MdFileUpload } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const AddListing = () => {
    const [listingTitle, setListingTitle] = useState('');
    const [type, setType] = useState('All Types');
    const [listingPrice, setListingPrice] = useState('');
    const [category, setCategory] = useState('All Categories');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [features, setFeatures] = useState([]);
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState({ lng: '', lat: '' });
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            title: listingTitle,
            description,
            category,
            listingType: type,
            price: parseFloat(listingPrice),
            size: parseFloat(size),
            features,
            location: `${coordinates.lng}, ${coordinates.lat}`,
            images,
        };

        // Log the data to be sent
        console.log('Data to be sent:', data);

        try {
            const result = await addNewListing(data);
            console.log('New property added:', result);

            // Reset form fields after successful submission
            setListingTitle('');
            setType('All Types');
            setListingPrice('');
            setCategory('All Categories');
            setDescription('');
            setSize('');
            setFeatures([]);
            setCoordinates({ lng: '', lat: '' });
            setImages([]);
        } catch (error) {
            console.error('Error adding property:', error.response ? error.response.data : error.message);
        }
    };

    const handleCoordinatesChange = useCallback((coords) => {
        if (coords) {
            setCoordinates({ lng: coords.lng, lat: coords.lat });
        }
    }, []);

    return (
        <>
            <div className='flex items-center ' style={{ gap: '10px', margin: '25px 10px', borderBottom: '1px grey solid', paddingBottom: '5px' }}>
                <BsHouseAdd />
                <h4>New listing</h4>
            </div>
            <div className="dasboard-widget-box fl-wrap">
                <div className="custom-form">
                    <form onSubmit={handleSubmit}>
                        <div className="widget">
                            <div className="widget-header">
                                <div className="widget-icon"><FiInfo /></div>
                                <h3 className="widget-title">Basic Informations</h3>
                            </div>
                            <div className="widget-content">
                                <div className="Info">
                                    <div className="col-sm-41">
                                        <label>Listing Title</label>
                                        <input
                                            type="text"
                                            placeholder="Title of your property"
                                            style={{ borderRadius: "10px", marginBottom: '5px' }}
                                            value={listingTitle}
                                            onChange={(e) => setListingTitle(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-42">
                                        <label>Listing Price</label>
                                        <input
                                            type="text"
                                            placeholder="Listing Price"
                                            style={{ borderRadius: "10px" }}
                                            value={listingPrice}
                                            onChange={(e) => setListingPrice(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-43">
                                        <label>Type</label>
                                        <select
                                            value={type}
                                            style={{ borderRadius: "10px" }}
                                            onChange={(e) => setType(e.target.value)}
                                        >
                                            <option value="All Types">All Types</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Sale">Sale</option>
                                            <option value="VacationalRent">Vacation</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-44">
                                        <label>Category</label>
                                        <select
                                            value={category}
                                            style={{ borderRadius: "10px" }}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            <option value="All Categories">All Categories</option>
                                            <option value="House">House</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Land">Land</option>
                                            <option value="Office">Office</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-45">
                                        <label>Description</label>
                                        <textarea
                                            placeholder="Description of your property"
                                            style={{ borderRadius: "10px", marginBottom: '5px' }}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-sm-46">
                                        <label>Size</label>
                                        <input
                                            type="text"
                                            placeholder="Size of your property"
                                            style={{ borderRadius: "10px", marginBottom: '5px' }}
                                            value={size}
                                            onChange={(e) => setSize(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="widget pb-2">
                            <div className="widget-header">
                                <div className="widget-icon"><FaLocationCrosshairs /></div>
                                <h3 className="widget-title">Location</h3>
                            </div>
                            <div className='Location'>
                                <div className='Locationinputs mb-2'>
                                    <div className='Address'>
                                        <label>Address</label>
                                        <input
                                            type="text"
                                            placeholder="Enter address"
                                            style={{ borderRadius: "10px" }}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                    <div className='others'>
                                        <label>Longitude (Drag marker on the map)</label>
                                        <input
                                            style={{ borderRadius: "10px" }}
                                            type="text"
                                            value={coordinates.lng}
                                            placeholder="Map longitude"
                                            readOnly
                                        />
                                    </div>
                                    <div className='others'>
                                        <label>Latitude (Drag marker on the map)</label>
                                        <input
                                            type="text"
                                            value={coordinates.lat}
                                            style={{ borderRadius: "10px" }}
                                            placeholder="Map latitude"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <Map onCoordinatesChange={handleCoordinatesChange} />
                            </div>
                        </div>
                        <div className="widget">
                            <div className="widget-header">
                                <div className="widget-icon"><MdOutlinePermMedia /></div>
                                <h3 className="widget-title">Media</h3>
                            </div>
                            <div className="widget-content" style={{ borderTop: "1px solid #ccc", margin: '0 0 15px 0' }}>
                                <PrimeReactProvider>
                                    <FileDropZone />
                                </PrimeReactProvider>
                            </div>
                        </div>
                        <div className="widget pb-2">
                            <div className="widget-header">
                                <div className="widget-icon"><TbListDetails /></div>
                                <h3 className="widget-title">Listing Details</h3>
                            </div>
                            <div className="widget-content" style={{ padding: "5px", borderTop: "1px solid #ccc" }}>
                                <ListingDetails setFeatures={setFeatures} />
                            </div>
                        </div>
                        <div className='flex justify-center mb-2'>
                            <button type="submit" className="bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" style={{ backgroundColor: '#ffa920' }}>
                                <MdFileUpload />
                                <span>Add Listing</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddListing;




