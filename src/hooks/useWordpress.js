import { useState } from 'react';
import axios from 'axios';
const useWordPress = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploadError, setIsUploadError] = useState(false);

  const createDraft = async (title, content, imageUrl, imageFileName, sticky) => {
    const url = `http://localhost:5000/draft/create`;
    console.log('calling', url);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          content,
          imageFileName,
          imageUrl,
          sticky
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
      }

      const newDraft = await response.json();

      console.log('Draft was successfully created!', newDraft);
      return true;
    } catch (error) {
      console.error('Error creating draft:', error);
      return false;
    }
  };

  const uploadImage = async (imageFileName, imageUrl) => {
    const url = `http://localhost:5000/uploadImage`;
    setIsUploading(true);
    setIsUploaded(false);
    setIsUploadError(false);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageFileName,
          imageUrl
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
      }
      setIsUploading(false);
      const newImage = await response.json();
      setIsUploaded(true);
      setTimeout(() => {
        setIsUploaded(false);
      }, 2000);
      console.log(newImage.message);
    } catch (error) {
      setIsUploading(false);
      setIsUploadError(true);
      console.error('Error uploading image:', error);
    }
  };

  return { createDraft, uploadImage, isUploading, isUploaded, setIsUploadError };
};

export default useWordPress;
