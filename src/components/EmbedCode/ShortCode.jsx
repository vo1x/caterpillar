import {} from 'lucide-react';

const ShortCode = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 bg-white/90 p-4 text-black">
      <span className="text-sm font-semibold">
        <span className="text-lg">[/]</span> Shortcode
      </span>

      <pre className="flex flex-col border border-black p-4 text-xs">{children}</pre>
    </div>
  );
};

export default ShortCode;
