/* eslint-disable react/prop-types */
import { MdDone } from "react-icons/md";

const PricingCard = ({
  category,
  price,
  description,
  service1,
  service2,
  service3,
  service4,
  service5,
}) => {
  return (
    <div className="group border border-lightGray hover:shadow p-7 lg:p-10 rounded-xl">
      <div>
        <h3>{category}</h3>
        <h1 className="text-blue flex items-baseline my-4">
          ${price}
          <p className="text-lightGray text-18">/month</p>
        </h1>
        <p className="max-w-xs">{description}</p>
        <div className="divider my-5"></div>
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-darkBlue">
            <span className="bg-bgLightWhite text-gray p-2 rounded-full">
              <MdDone />
            </span>
            {service1}
          </p>
          <p className="flex items-center gap-2 text-darkBlue">
            <span className="bg-bgLightWhite text-gray p-2 rounded-full">
              <MdDone />
            </span>
            {service2}
          </p>
          <p className="flex items-center gap-2 text-darkBlue">
            <span className="bg-bgLightWhite text-gray p-2 rounded-full">
              <MdDone />
            </span>
            {service3}
          </p>
          <p className="flex items-center gap-2 text-darkBlue">
            <span className="bg-bgLightWhite text-gray p-2 rounded-full">
              <MdDone />
            </span>
            {service4}
          </p>
          <p className="flex items-center gap-2 text-darkBlue">
            <span className="bg-bgLightWhite text-gray p-2 rounded-full">
              <MdDone />
            </span>
            {service5}
          </p>
        </div>
        <button className="btn text-16 text-blue bg-white font-semibold mt-7 w-full border border-blue hover:text-white hover:-translate-y-1 group-hover:bg-blue group-hover:text-white duration-900">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
