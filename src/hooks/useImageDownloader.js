import axios from 'axios';
import { useState } from 'react';

const useImageDownloader = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [isDownloadError, setIsDownloadError] = useState(false);

  const downloadImage = async (fileUrl, fileName) => {
    try {
      setIsDownloading(true);
      setIsDownloadError(false);
      setIsDownloaded(false);

      const res = await axios.get(fileUrl, {
        responseType: 'blob'
      });

      const imageURL = URL.createObjectURL(res.data);
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
      setIsDownloaded(true);

      setTimeout(() => {
        setIsDownloaded(false);
      }, 2000);
    } catch (error) {
      setIsDownloading(false);
      setIsDownloadError(true);
      console.log('Error: ', error);
    }
  };

  return { downloadImage, isDownloading, isDownloadError, isDownloaded };
};

export default useImageDownloader;
