import { ImageOff, Plus, Edit, Trash } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import useClipboard from '../hooks/useClipboard';
import useImageDownloader from '../hooks/useImageDownloader';
import useFormStore from '../stores/formStore';
import useWordPress from '../hooks/useWordpress';

function BannerSelector() {
  const { uploadImage, isUploading, isUploaded, isError } = useWordPress();
  const updateFormData = useFormStore((state) => state.updateFormData);
  const formData = useFormStore((state) => state.formData);

  const [modalVisible, setModalVisible] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [selectedBannerUrl, setSelectedBannerUrl] = useState('');
  const [showCustomHoverOptions, setShowCustomHoverOptions] = useState(false);

  const [copied, handleItemCopy] = useClipboard();
  const { downloadImage, isDownloading } = useImageDownloader();

  useEffect(() => {
    const fileName = `Download ${formData.title
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-')}.${selectedBannerUrl.split('.').pop()}`;
    updateFormData({ posterURL: selectedBannerUrl, posterFileName: fileName });
  }, [selectedBannerUrl]);

  return (
    <div className="flex items-center gap-12">
      <Banner url={formData.posterURL} isSelected={selectedBannerUrl === formData.posterURL} />

      {previewUrl ? (
        <PreviewImage
          previewUrl={previewUrl}
          isSelected={selectedBannerUrl === previewUrl}
          onEdit={() => setModalVisible(true)}
          onDelete={() => {
            setPreviewUrl('');
            setSelectedBannerUrl('');
          }}
          onClick={() => setSelectedBannerUrl(previewUrl)}
        />
      ) : (
        <AddBannerButton onClick={() => setModalVisible(true)} />
      )}

      {modalVisible && (
        <Modal
          previewUrl={previewUrl}
          setPreviewUrl={setPreviewUrl}
          setModalVisible={setModalVisible}
          setSelectedBannerUrl={setSelectedBannerUrl}
        />
      )}
    </div>
  );
}

function Banner({ url, isSelected }) {
  if (!url) return null;

  return (
    <div className="w-72 cursor-pointer">
      <img
        src={url}
        alt="Banner"
        className={`w-44 rounded-lg object-cover ${
          isSelected ? 'border-2 border-[#0a84ff]' : 'border-2 border-black'
        } hover:border-[#0a84ff]`}
      />
    </div>
  );
}

function PreviewImage({ previewUrl, isSelected, onEdit, onDelete, onClick }) {
  const [showHoverOptions, setShowHoverOptions] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowHoverOptions(true)}
      onMouseLeave={() => setShowHoverOptions(false)}
    >
      <AnimatePresence>
        {showHoverOptions && (
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: -10, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            className="absolute flex items-center space-x-2 rounded-lg"
          >
            <button onClick={onEdit} className="rounded-lg bg-[#0a84ff] p-2">
              <Edit size={20} />
            </button>
            <button onClick={onDelete} className="rounded-lg bg-[#0a84ff] p-2">
              <Trash size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={previewUrl}
        alt="Preview"
        onClick={onClick}
        className={`h-auto w-72 rounded-lg ${
          isSelected ? 'border-2 border-[#0a84ff]' : ''
        }`}
      />
    </div>
  );
}

function AddBannerButton({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex aspect-[3/2] h-48 w-96 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-[#444] text-[#444] hover:border-[#0A84FF] hover:text-[#0A84FF]"
    >
      <Plus size={40} />
    </div>
  );
}

function Modal({ previewUrl, setPreviewUrl, setModalVisible, setSelectedBannerUrl }) {
  return (
    <div className="absolute inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col gap-4 rounded-lg bg-[#1c1c1e] p-4">
        <button
          className="self-end text-2xl"
          onClick={() => setModalVisible(false)}
        >
          X
        </button>
        <div className="text-2xl font-semibold">Add Custom Poster URL</div>
        <div className="flex gap-6">
          <div className="flex flex-col items-start gap-2">
            <input
              value={previewUrl}
              onChange={(e) => setPreviewUrl(e.target.value)}
              type="text"
              placeholder="Enter poster URL"
              className="w-72 rounded-lg bg-[#2c2c2e] p-2 outline-none"
            />
            <button
              className="rounded-lg bg-[#0A84FF] p-2"
              onClick={() => {
                if (previewUrl) {
                  setSelectedBannerUrl(previewUrl);
                  setModalVisible(false);
                }
              }}
            >
              Add Poster
            </button>
          </div>
          <div>
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" className="w-44 rounded-lg" />
            ) : (
              <div className="flex aspect-[2/3] w-44 items-center justify-center rounded-lg bg-[#2c2c2e]">
                <ImageOff size={40} className="text-gray-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerSelector;
