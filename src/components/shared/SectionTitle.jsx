/* eslint-disable react/prop-types */
function SectionTitle({ title, subTitle, subHeading }) {
  return (
    <div className="flex justify-center items-center flex-col relative">
      <h4 className="uppercase text-lightGray mb-3">{subHeading}</h4>
      <h3>{title}</h3>

      <p className="text-16 mt-3 text-center max-w-4xl">{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
