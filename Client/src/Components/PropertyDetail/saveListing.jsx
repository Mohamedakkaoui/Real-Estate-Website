import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { saveListing } from '../../Api/ListingsApi';

const SaveListingComponent = ({ id, onSave }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      console.log('Saving listing ID:', id);
      const response = await saveListing(id);
      console.log('Listing saved:', response);
      setIsSaved(true);
      if (onSave) {
        onSave(); // Refresh favorites if onSave callback is provided
      }
    } catch (error) {
      console.error('Error saving listing:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div onClick={handleSave} className={`flex gap-2 border rounded-lg px-2 pt-2 ${isSaved ? 'text-red-600' : 'text-grey-600'} hover:cursor-pointer`}>
      <span>{isSaved ? 'saved' : 'save'}</span>
      <Heart className="size-5" />
      {isLoading && <span>Loading...</span>}
    </div>
  );
};

export default SaveListingComponent;
