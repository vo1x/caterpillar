import ResultCard from './ResultCard';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import useMediaInfo from '../../../hooks/useMediaInfo';
import { motion, AnimatePresence } from 'framer-motion';
import { Divider } from '../../common';

import useFormStore from '../../../stores/formStore';

function Results({ searchResults }) {
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [selectedItemID, setSelectedItemID] = useState('');
  const [selectedItemType, setSelectedItemType] = useState('');

  const updateFormData = useFormStore((state) => state.updateFormData);

  const handleResultSelect = async (mediaID) => {
    console.log(mediaID);
    if (mediaID === selectedItemID) {
      return;
    }

    setIsItemSelected(true);
    setSelectedItemID(mediaID);
  };

  const [mediaInfo] = useMediaInfo(selectedItemID);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (mediaInfo) {
      console.log(mediaInfo);
      updateFormData({...mediaInfo});
    }
  }, [mediaInfo]);

  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const unFilteredResults = searchResults;
    if (isItemSelected)
      setFilteredResults(unFilteredResults.filter((result) => result.id === selectedItemID));
    else setFilteredResults(searchResults);
  }, [searchResults, selectedItemID, isItemSelected]);

  useEffect(() => {
    setIsItemSelected(false);
    setSelectedItemID('');
  }, [searchResults]);

  const handleItemUnselect = () => {
    setIsItemSelected(false);
    setSelectedItemID('');
  };

  return (
    <div
      className={`relative mt-4 flex max-h-96 w-full max-w-80 flex-col overflow-y-auto overflow-x-hidden rounded-[10px] bg-[#1c1c1e] p-2 px-4 lg:max-w-96 ${isItemSelected ? 'pr-4' : 'pr-0'}`}
    >
      <AnimatePresence>
        <motion.div
          initial={{ filter: 'blur(0px)' }}
          animate={{ filter: isHovering ? 'blur(10px)' : 'blur(0px)' }}
          exit={{ filter: 'blur(0px)' }}
          className={`flex flex-col `}
        >
          {filteredResults.map((result, i) => (
            <div key={i}>
              <ResultCard
                title={result.title || result.name}
                appId={result.id}
                bannerUrl={result.image}
                price={result.price}
                description={result.overview}
                type={result.media_type}
                releaseDate={result.first_air_date || result.release_date}
                thumbnail={result.backdrop_path}
                onClick={() => handleResultSelect(result.id)}
                isSelected={result.id === selectedItemID}
                handleItemUnselect={handleItemUnselect}
              />
              {i < filteredResults.length - 1 && (
                <div className="py-4">
                  <Divider />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      {isItemSelected && (
        <motion.div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          whileHover={{ color: '#FF3B30', scale: 1.5 }}
          className="absolute right-0 pr-2 hover:cursor-pointer "
          onClick={() => {
            setIsHovering(false);
            handleItemUnselect();
          }}
        >
          <X></X>
        </motion.div>
      )}
    </div>
  );
}

export default Results;
