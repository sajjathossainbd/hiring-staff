import { Link } from "react-router-dom";
import { MdDone } from "react-icons/md";

/* eslint-disable react/prop-types */
const PricingCard = ({
  category,
  price,
  description,
  service1,
  service2,
  service3,
  service4,
  linkTo,
}) => {
  return (
    <div className="boxBorderHoverBlue p-7 lg:p-10">
      <div>
        <h4 className="text-3xl xl:text-4xl">{category}</h4>
        <h3 className="text-blue flex items-baseline my-4">
          ${price}
          <p className="text-lightGray text-18">/month</p>
        </h3>
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
        </div>
        <Link
          to={{
            pathname: linkTo,
          }}
          state={{ price, category }}
          className="btn text-16 text-blue bg-white font-semibold mt-7 w-full border border-blue hover:text-white hover:-translate-y-1 hover:bg-blue  duration-900"
        >
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
