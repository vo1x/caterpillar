import { motion } from 'framer-motion';
import { DownloadIcon, UploadCloud, Link, Loader2, Image } from 'lucide-react';

import useImageDownloader from '../hooks/useImageDownloader';
import useWordPress from '../hooks/useWordpress';
import useClipboard from '../hooks/useClipboard';
import useFormStore from '../stores/formStore';
import { useState } from 'react';
import Modal from './Modal';

const Banner = ({ url }) => {
  const { downloadImage, isDownloaded, isDownloading, isDownloadError } = useImageDownloader();
  const { uploadImage, isUploaded, isUploading, isUploadError } = useWordPress();
  const [copied, handleItemCopy] = useClipboard();

  const formData = useFormStore((state) => state.formData);

  const [modalVisible, setModalVisible] = useState(false);

  if (!url) return <PlaceHolder />;

  return (
    <div className="flex items-center gap-8">
      <img src={url} alt="" className="aspect-[16/9] max-w-96 rounded-md" />
      <div className="flex flex-col gap-4">
        <Button
          icon={<DownloadIcon />}
          onClick={() => {
            downloadImage(url, `Download ${formData.title.replace(/[^a-zA-Z0-9\s]/g, '')}`);
          }}
          isProcessing={isDownloading}
          isSuccess={isDownloaded}
          isError={isDownloadError}
        />
        <Button
          icon={<UploadCloud />}
          onClick={() => {
            uploadImage(`Download ${formData.title.replace(/[^a-zA-Z0-9\s]/g, '')}`, url);
          }}
          isProcessing={isUploading}
          isSuccess={isUploaded}
          isError={isUploadError}
        />
        <Button
          icon={<Link />}
          onClick={() => handleItemCopy('Poster URL', url, false, true)}
          isSuccess={copied}
        />
      </div>

      {modalVisible && (
        <Modal setModalVisible={setModalVisible}>
          <div></div>
        </Modal>
      )}
    </div>
  );
};

const PlaceHolder = () => {
  return (
    <div className="flex aspect-[16/9] w-96 items-center justify-center bg-inherit">
      <Image size={72} color="#444"></Image>
    </div>
  );
};

const Button = ({ icon, onClick, isProcessing, isError, isSuccess }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`rounded-md  p-2 font-semibold ${isSuccess ? 'bg-[#16a34a]' : isError ? 'bg-red-600' : 'bg-[#0A84FF]'}`}
      onClick={onClick}
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : icon}
    </motion.button>
  );
};

export default Banner;
