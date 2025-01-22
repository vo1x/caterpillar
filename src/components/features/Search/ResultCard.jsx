import { motion } from 'framer-motion';

function ResultCard({
  title,
  appId,
  bannerUrl,
  price,
  description,
  type,
  releaseDate,
  thumbnail,
  isSelected,
  handleItemUnselect,
  ...rest
}) {
  return (
    <motion.div
      whileHover={!isSelected && { scale: 1.05 }}
      {...rest}
      className={`relative flex w-full max-w-96 gap-2 pr-4 lg:hover:cursor-pointer `}
    >
      <div className="text-sm">
        <img className="h-full min-w-[120px] rounded-lg" src={bannerUrl} alt="Prev" />
      </div>
      <div className="flex max-w-96 flex-col truncate ">
        <span className="truncate font-semibold capitalize">{title}</span>
        <span className="truncate text-sm text-neutral-300">{price}</span>
      </div>
    </motion.div>
  );
}

export default ResultCard;
