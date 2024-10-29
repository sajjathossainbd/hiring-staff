/* eslint-disable react/prop-types */
function TitleIcon({ title, icon }) {
  return (
    <div className="flex items-center gap-6  mb-8">
      <div className="bg-bgLightWhite p-5 text-blue rounded-md sm:text-2xl md:text-3xl lg:text-4xl inline-block ">
        {icon}
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default TitleIcon;
