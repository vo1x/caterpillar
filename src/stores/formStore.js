import { create } from 'zustand';

const useFormStore = create((set) => ({
  formData: {
    title: 'Game',
    desc: '',
    released: '1 January 2025',
    version: '0.0.0',
    size: '0.0GB',
    platforms: [
      { name: 'Steam', url: '' },
      { name: 'Epic Games', url: '' }
    ],
    systemRequirements: {
      OS: 'Windows 10 - 64-bit',
      RAM: '8 GB RAM',
      Storage: '150 GB available space',
      DirectX: 'Not Specified',
      Processor: 'Intel® Core™ i5-2500K / AMD FX-6300',
      Graphics: 'Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB'
    },
    genres: ['Game', 'Game'],
    publishers: ['GamesLeech'],
    publisherString: '',
    developers: ['GamesLeech'],
    developerString: '',
    repack: 'GamesLeech',
    posterFileName: '',
    posterURL: '',
    trailerURL: '',
    fields: [],
    itemSelected: false,
    embedCode: '',
    wpTitle: ''
  },
  updateFormData: (update) => {
    set((state) => ({
      formData: {
        ...state.formData,
        ...Object.keys(update).reduce((acc, key) => {
          acc[key] =
            typeof update[key] === 'object' && !Array.isArray(update[key])
              ? { ...state.formData[key], ...update[key] }
              : update[key];
          return acc;
        }, {})
      }
    }));
  }
}));

export default useFormStore;
