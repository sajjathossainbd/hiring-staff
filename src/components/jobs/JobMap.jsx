import { Link } from "react-router-dom";
import Map from "../shared/Map";

function JobMap() {
  return (
    <div
      className="border border-lightGray p-6 rounded-xl z-0"
      style={{ height: "400px" }}
    >
      <Map
        center={[23.8103, 90.4125]} // Dhaka coordinates
        zoom={10}
        markers={[[[23.8103, 90.4125], "Evara"]]}
      />
      <div className="contact-info">
        <h4 className="mb-3 mt-2">Contact Us</h4>
        <p>
          <strong>Address:</strong>
          <br />
          205 North Michigan Avenue, Suite 810
          <br />
          Chicago, 60601, USA
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <Link to="mailto:contact@Evara.com">contact@Evara.com</Link>
        </p>
      </div>
    </div>
  );
}

export default JobMap;
