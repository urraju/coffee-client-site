import coffee1 from "../../assets/images/cups/Rectangle 9.png";
import coffee2 from "../../assets/images/cups/Rectangle 10.png";
import coffee3 from "../../assets/images/cups/Rectangle 11.png";
import coffee4 from "../../assets/images/cups/Rectangle 12.png";
import coffee5 from "../../assets/images/cups/Rectangle 13.png";
import coffee6 from "../../assets/images/cups/Rectangle 14.png";
import coffee7 from "../../assets/images/cups/Rectangle 15.png";
import coffee8 from "../../assets/images/cups/Rectangle 16.png";

const CoffeeSimble = () => {
  return (
    <div className="mt-20">
      <div className="font-philospar text-center">
        <h1 className="text-4xl font-bold mb-4">Our Symble Product</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,{" "}
          <br /> sequi laboriosam beatae nemo repudiandae enim.
        </p>
      </div>
      <div className="w-8/12 mt-14 mb-20 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <img src={coffee1} alt="" />
        <img src={coffee2} alt="" />
        <img src={coffee3} alt="" />
        <img src={coffee4} alt="" />
        <img src={coffee5} alt="" />
        <img src={coffee6} alt="" />
        <img src={coffee7} alt="" />
        <img src={coffee8} alt="" />
      </div>
    </div>
  );
};

export default CoffeeSimble;
