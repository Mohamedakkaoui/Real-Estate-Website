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
// import ListingDetails from '../ListingDetails/ListingDetails';
import { MdFileUpload } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { SlSizeFullscreen } from "react-icons/sl";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import { Checkbox } from "@material-tailwind/react";
import { z } from "zod";

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
    const [city, setCity] = useState('');
    const [images, setImages] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [bathrooms, setBathrooms] = useState([]);
    const [accomodation, setAccomodation] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [errors, setErrors] = useState({});

    const listingSchema = z.object({
        title: z.string().min(3, 'Title must be at least 3 characters long'),
        description: z.string().min(5, 'Description must be at least 5 characters long'),
        category: z.enum(["Land", "House", "Apartement", "Office", "Villa"]),
        listingType: z.string().min(3, 'Listing type must be at least 3 characters long'),
        price: z.number({ invalid_type_error: 'Price must be a number' }),
        size: z.number({ invalid_type_error: 'Size must be a number' }).optional(),
        images: z.array(z.string()).optional(),
        city: z.string().max(10, 'city must be at most 10 characters long')
    });

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
            city,
            location,
            images: uploadedImages,
            rooms: parseFloat(rooms),
            bathrooms: parseFloat(bathrooms),
            accomodation: parseFloat(accomodation)
        };

        // Log the data to be sent
        console.log('Data to be sent:', data);

        try {
            // listingSchema.parse(data);
            // setErrors({});

            // Log the data to be sent
            console.log('this is the Data to be sent:', data);

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
            setCity('');
            setLocation('');
            setUploadedImages([]);
            setRooms('');
            setBathrooms('');
            setAccomodation('');
        } catch (error) {
            if (error instanceof z.ZodError) {
                const formattedErrors = {};
                error.errors.forEach(err => {
                    formattedErrors[err.path[0]] = err.message;
                });
                setErrors(formattedErrors);
            } else {
                console.error('Error adding property:', error.response ? error.response.data : error.message);
            }
        }
    };

    const handleCoordinatesChange = useCallback((coords) => {
        if (coords) {
            setCoordinates({ lng: coords.lng, lat: coords.lat });
        }
    }, []);

    const handleUploadComplete = (images) => {
        setUploadedImages(images);
    };

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
                                        {errors.title && <span className="text-red-500">{errors.title}</span>}
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
                                        {errors.price && <span className="text-red-500">{errors.price}</span>}
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
                                            <option value="vacation">Vacation</option>
                                        </select>
                                        {errors.listingType && <span className="text-red-500">{errors.listingType}</span>}
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
                                            <option value="Apartement">Apartement</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Land">Land</option>
                                            <option value="Office">Office</option>
                                        </select>
                                        {errors.category && <span className="text-red-500">{errors.category}</span>}
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
                                        {errors.size && <span className="text-red-500">{errors.location}</span>}
                                    </div>
                                    <div className='others'>
                                        <label>City</label>
                                        <input
                                            type="text"
                                            placeholder="Enter city"
                                            style={{ borderRadius: "10px" }}
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                        {errors.title && <span className="text-red-500">{errors.city}</span>}
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
                                    <FileDropZone onUploadComplete={handleUploadComplete} />
                                </PrimeReactProvider>
                            </div>
                        </div>
                        <div className="widget pb-2">
                            <div className="widget-header">
                                <div className="widget-icon"><TbListDetails /></div>
                                <h3 className="widget-title">Listing Details</h3>
                            </div>
                            <div className="widget-content" style={{ padding: "5px", borderTop: "1px solid #ccc" }}>
                                <div className="flex gap-4 flex-wrap justify-between ml-3 mr-3">
                                    <div className="w-2/5 mr-4" style={{ width: "40%" }}> {/* Left section with 40% width */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Size:</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'BLACK', borderRadius: '10px' }}>
                                                <SlSizeFullscreen color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}
                                                <input
                                                    type="text"
                                                    placeholder="Property size"
                                                    style={{ borderRadius: "10px" }}
                                                    value={size}
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className="outline-none focus:outline-none flex-1"
                                                /> {/* Input field */}
                                                {errors.size && <span className="text-red-500">{errors.size}</span>}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Rooms :</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'black', borderRadius: '10px' }}>
                                                <MdOutlineBedroomChild color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}
                                                <input
                                                    type="text"
                                                    placeholder="Property rooms"
                                                    style={{ borderRadius: "10px" }}
                                                    value={rooms}
                                                    onChange={(e) => setRooms(e.target.value)}
                                                    className="outline-none focus:outline-none flex-1"
                                                /> {/* Input field */}
                                                {/* {errors.size && <span className="text-red-500">{errors.size}</span>} */}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Bathrooms :</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'black', borderRadius: '10px' }}>
                                                <MdOutlineBathroom color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}
                                                <input
                                                    type="text"
                                                    placeholder="Property bathrooms"
                                                    style={{ borderRadius: "10px" }}
                                                    value={bathrooms}
                                                    onChange={(e) => setBathrooms(e.target.value)}
                                                    className="outline-none focus:outline-none flex-1"
                                                /> {/* Input field */}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Accomodation :</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: 'black', borderRadius: '10px' }}>
                                                <IoPeopleOutline color='white' style={{ margin: '5px' }} className="text-gray-500  " /> {/* Icon */}

                                                <input
                                                    type="text"
                                                    placeholder="Property accomodation"
                                                    value={accomodation}
                                                    onChange={(e) => setAccomodation(e.target.value)}
                                                    style={{ borderRadius: "0  10px 10px 0" }}
                                                    className="outline-none focus:outline-none flex-1"
                                                /> {/* Input field */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-3/5" style={{ width: "55%" }}> {/* Right section takes the remaining width */}
                                        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Description :</label>

                                        <textarea
                                            className="w-full h-full p-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
                                            placeholder="Enter your description here..."
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                        {errors.description && <span className="text-red-500">{errors.description}</span>}
                                    </div>
                                    <div className="w-full mt-4 flex flex-wrap " style={{ gap: '10px' }}> {/* Third section with full width and flex-wrap */}
                                        <label htmlFor="amenities" className="block text-sm text-gray-600 mb-1">Amenities :</label>
                                        <div className="flex w-full justify-between gap-10 ">
                                            <div className="w-1/3 flex flex-col justify-between " style={{ gap: '10px' }}>
                                                <Checkbox label="Bathroom amenities" style={{ gap: '10px' }} />
                                                <Checkbox label="Laundry facilities" />
                                                <Checkbox label="Entertainment provisions" />
                                            </div>
                                            <div className="w-1/3 flex flex-col gap-10 justify-between">
                                                <Checkbox label="Internet access (WiFi)" />
                                                <Checkbox label="Equipped kitchen" />
                                                <Checkbox label="Parking availability" />
                                            </div>
                                            <div className="w-1/3 flex flex-col gap-10 justify-between">
                                                <Checkbox label="Heating and cooling" />
                                                <Checkbox label="Self check-in" />
                                                <Checkbox label="Safety equipment" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mb-2'>
                            <button type="submit" className="bg-green-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center" style={{ backgroundColor: '#ffa920' }}>
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
