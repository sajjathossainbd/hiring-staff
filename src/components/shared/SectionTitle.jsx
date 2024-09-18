/* eslint-disable react/prop-types */
function SectionTitle({ title, subTitle }) {
  return (
    <div className="flex justify-center items-center flex-col ">
      <h3>{title}</h3>
      <p className="text-16 mt-3 text-center">{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
