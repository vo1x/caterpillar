import { motion } from 'framer-motion';
import useClipboard from '../hooks/useClipboard';
import { Label } from './common';

import useFormStore from '../stores/formStore';
import { useEffect } from 'react';

export default function Title() {
  const formData = useFormStore((state) => state.formData);

  const { title, version } = formData;

  const updateFormData = useFormStore((state) => state.updateFormData);
  const [copied, handleItemCopy] = useClipboard();

  const titleString = `Download ${title} (${version}) For Free`;

  useEffect(() => {
    updateFormData({ wpTitle: titleString });
  }, [titleString]);

  return (
    <div
      className={`col-span-2 flex max-w-96 flex-col items-start gap-2 pr-4 lg:w-full lg:max-w-5xl`}
      onClick={() => handleItemCopy('Title', titleString, false, true)}
    >
      <Label>Title</Label>
      <motion.span
        initial={{ color: '#fff' }}
        animate={copied ? { color: '#22c55e' } : ''}
        transition={{ duration: 0.2 }}
        className={`text-md max-w-96 cursor-pointer rounded-md bg-[#1c1c1e] p-2 px-4 font-bold lg:w-full lg:max-w-full lg:text-lg`}
      >
        {titleString}
      </motion.span>
    </div>
  );
}
