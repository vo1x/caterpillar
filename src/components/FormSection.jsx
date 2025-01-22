import { Label } from './common';

const Section = ({ sectionTitle, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{sectionTitle}</Label>
      <div className="flex w-full max-w-[350px] flex-col items-center justify-center gap-4 rounded-lg bg-[#1C1C1E] p-4 lg:max-w-max">
        <div className=" flex max-w-96  flex-col  gap-4 px-4 lg:px-0 ">{children}</div>
      </div>
    </div>
  );
};

export default Section;
