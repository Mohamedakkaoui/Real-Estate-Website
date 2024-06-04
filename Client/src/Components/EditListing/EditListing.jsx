import React, { useState, useEffect, useCallback } from 'react';
// import './NewListingStyle.css';
import { FiInfo } from "react-icons/fi";
import { FaLocationCrosshairs } from "react-icons/fa6";
import FileDropZone from '../UploadComp/UploadComp';
import { PrimeReactProvider } from 'primereact/api';
import ListingDetails from '../ListingDetails/ListingDetails';
import { MdFileUpload } from "react-icons/md";
import { BsHouseAdd } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { fetchSingleListing, updateListing } from "../../Api/ListingsApi";
import UpdateMap from '../MapComp/LocationUpdate';

import { Checkbox } from "@material-tailwind/react";
import { Bath, Proportions, Users, DoorOpen } from "lucide-react";





function EditListing() {

    const { propertyId } = useParams();
    const [property, setProperty] = useState(null);
    const [images, setImages] = useState([]);
    const [mapCoordinates, setMapCoordinates] = useState({ lng: '', lat: '' });
    console.log(images)
    const [formData, setFormData] = useState({

    });

    useEffect(() => {
        async function getPropertyDetails() {
            try {
                const response = await fetchSingleListing(propertyId);
                const { property } = response.data
                setProperty(property);
                setImages(property.images);
                setMapCoordinates({ lng: property.longitude, lat: property.latitude })
                console.log(property);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        }
        getPropertyDetails();
    }, []);
    console.log('gna', property);

    const [coordinates, setCoordinates] = useState({ lng: '', lat: '' });
    const [newCoordinates, setNewCoordinates] = useState({ lng: '', lat: '' });

    const [uploadedImages, setUploadedImages] = useState([]);

    const handleUploadComplete = (newimages) => {
        // setProperty(prevState => ({
        //     ...prevState,
        //     images: [...prevState.images, ...images]
        // }));
        setImages([...images, ...newimages]);

        setProperty(prevState => ({
            ...prevState,
            images: [...images, ...newimages]
        }))
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateListing(propertyId, property);
            console.log('Listing updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating listing:', error);
        }
    };
    const handlePicDelete = (id) => {
        const updatedImages = [...images]; // Create a copy of the images array
        updatedImages.splice(id, 1); // Remove the element at the specified index
        console.log(updatedImages);
        setImages(updatedImages); // Update the state with the new array
    };
    const handleCoordinatesChange = useCallback((coords) => {
        if (coords) {
            console.log(coords);
            const { lat, lng } = coords
            setProperty(prevState => ({
                ...prevState,
                latitude: lat,
                longitude: lng
            }));
        }
    }, []);
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(property);
    };
    if (!property) {
        return <div>Loading...</div>; // Render a loading state if the property is not yet set
    }
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
                                    <div className="col-sm-41 mb-2">
                                        <label className='mb-1'>Listing Title :</label>
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Title of your property"
                                            style={{ borderRadius: "10px", marginBottom: '5px' }}
                                            value={property.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-sm-42">
                                        <label className='mb-1'>Listing Price :</label>
                                        <input
                                            type="text"
                                            name="price"
                                            placeholder="Listing Price"
                                            style={{ borderRadius: "10px" }}

                                            value={property.price}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-sm-43">
                                        <label className='mb-1'>Type :</label>
                                        <select
                                            value={property.listingType}
                                            style={{ borderRadius: "10px" }}
                                            name="listingType"
                                            onChange={handleChange}
                                        >
                                            <option value="All Types">All Types</option>
                                            <option value="Rent">Rent</option>
                                            <option value="Sale">Sale</option>
                                            <option value="VacationalRent">Vacation</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-44">
                                        <label className='mb-1'>Category :</label>
                                        <select
                                            value={property.category}
                                            style={{ borderRadius: "10px" }}
                                            name="category"
                                            onChange={handleChange}
                                        >
                                            <option value="All Categories">All Categories</option>
                                            <option value="House">House</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Land">Land</option>
                                            <option value="Office">Office</option>
                                        </select>
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
                                        <label className='mb-1'>Address :</label>
                                        <input
                                            type="text"
                                            placeholder="Enter address"
                                            style={{ borderRadius: "10px" }}
                                            value={property.location}
                                            name="location"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='others'>
                                        <label className='mb-1'>City :</label>
                                        <input
                                            type="text"
                                            placeholder="Enter city"
                                            style={{ borderRadius: "10px" }}
                                            value={property.city}
                                            name="city"
                                            onChange={handleChange} />
                                    </div>
                                    <div className='others'>
                                        <label className='mb-1'>Longitude (Drag marker on the map) :</label>
                                        <input
                                            style={{ borderRadius: "10px" }}

                                            type="text"
                                            value={property.longitude}
                                            placeholder="Map longitude"
                                            name="longitude"
                                            readOnly

                                        />
                                    </div>
                                    <div className='others'>
                                        <label className='mb-1'>Latitude (Drag marker on the map) :</label>
                                        <input
                                            type="text"
                                            value={property.latitude}
                                            style={{ borderRadius: "10px" }}
                                            name="latitude"

                                            placeholder="Map latitude"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                {mapCoordinates && property.latitude !== undefined && property.longitude !== undefined && (
                                    <UpdateMap coordinates={[mapCoordinates.lng, mapCoordinates.lat]} onCoordinatesChange={handleCoordinatesChange} />
                                )}                            </div>
                        </div>
                        <div className="widget">
                            <div className="widget-header">
                                <div className="widget-icon"><IoCloudUploadOutline /></div>
                                <h3 className="widget-title">Media</h3>
                            </div>
                            <div className="widget-content mb-2" style={{ borderTop: "1px solid #ccc" }}>
                                <PrimeReactProvider>
                                    <FileDropZone onUploadComplete={handleUploadComplete} />
                                </PrimeReactProvider>
                            </div>
                        </div>
                        <div className="widget">
                            <div className="widget-header">
                                <div className="widget-icon"><MdOutlinePermMedia /></div>
                                <h3 className="widget-title">Uploaded  pictures</h3>
                            </div>
                            <div className="widget-content py-3 mb-2" style={{ borderTop: "1px solid #ccc" }}>
                                <div className='grid grid-cols-5 gap-2 mx-5 '>
                                    {images.map((image, index) => (
                                        <div key={index} className='relative rounded-md group h-[200px]'>
                                            <img
                                                className='group-hover:brightness-50 rounded-md h-[200px]' src={image.url} alt={'image House'}
                                            />
                                            <button onClick={() => handlePicDelete(index)} className='absolute top-2 right-2'>
                                                <MdDeleteForever
                                                    size={20}
                                                    className='text-[#e74c3c] hover:border hover:rounded hover:border-[#e74c3c]'
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="widget pb-2">
                            <div className="widget-header">
                                <div className="widget-icon"><TbListDetails /></div>
                                <h3 className="widget-title">Listing Details</h3>
                            </div>
                            <div className="widget-content" style={{ padding: "5px", borderTop: "1px solid #ccc" }}>
                                <div className="flex gap-4 flex-wrap justify-between ml-3 mr-3">
                                    <div className="flex flex-col gap-4 w-2/5 mr-4" style={{ width: "40%" }}> {/* Left section with 40% width */}
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Area :</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: '#FFF1DA', borderRadius: '10px' }}>
                                                <Proportions size={30} color='#FFA920' style={{ margin: '10px' }} className="text-gray-500  " /> {/* Icon */}
                                                <input
                                                    type="text"
                                                    placeholder="Property size"
                                                    style={{ borderRadius: "10px" }}
                                                    className="outline-none focus:outline-none flex-1"
                                                    name="size"
                                                    value={property.size}
                                                    onChange={handleChange}
                                                /> {/* Input field */}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Rooms :</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: '#FFF1DA', borderRadius: '10px' }}>
                                                <DoorOpen size={30} color='#FFA920' style={{ margin: '10px' }} className="text-gray-500  " /> {/* Icon */}
                                                <input
                                                    type="text"
                                                    placeholder="Property rooms"
                                                    style={{ borderRadius: "10px" }}
                                                    className="outline-none focus:outline-none flex-1"
                                                    name="rooms"
                                                    value={property.rooms}
                                                    onChange={handleChange}
                                                /> {/* Input field */}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Bathrooms :</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: '#FFF1DA', borderRadius: '10px' }}>
                                                <Bath size={30} color='#FFA920' style={{ margin: '10px' }} className="text-gray-500  " /> {/* Icon */}
                                                <input
                                                    type="text"
                                                    placeholder="Property bathrooms"
                                                    style={{ borderRadius: "10px" }}
                                                    className="outline-none focus:outline-none flex-1"
                                                    name="bathrooms"
                                                    value={property.bathrooms}
                                                    onChange={handleChange}
                                                /> {/* Input field */}
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Accomodation :</label>
                                            <div className="flex items-center rounded-md h-10 " style={{ backgroundColor: '#FFF1DA', borderRadius: '10px' }}>
                                                <Users size={30} color='#FFA920' style={{ margin: '10px' }} className="text-gray-500  " /> {/* Icon */}

                                                <input
                                                    type="text"
                                                    placeholder="Property accomodation"
                                                    style={{ borderRadius: " 10px " }}
                                                    className="outline-none focus:outline-none flex-1"
                                                    name="accomodation"
                                                    value={property.accomodation}
                                                    onChange={handleChange}
                                                /> {/* Input field */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-3/5" style={{ width: "55%" }}> {/* Right section takes the remaining width */}
                                        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Description :</label>

                                        <textarea
                                            className="w-full h-[95%] p-2 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-500"
                                            placeholder="Enter your description here..."
                                            name="description"
                                            value={property.description}
                                            onChange={handleChange}
                                        ></textarea>
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
                            <button type="submit" className="bg-green-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center" style={{ backgroundColor: '#ffa920' }} onClick={handleSubmit}>
                                <MdFileUpload />
                                <span>Update Listing</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );

}

export default EditListing