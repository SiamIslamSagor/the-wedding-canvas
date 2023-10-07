import { FaBusinessTime, FaWifi } from "react-icons/fa";
import { MdCleaningServices, MdLocalDining } from "react-icons/md";
import { BsCloudArrowDownFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { PiCoffeeFill } from "react-icons/pi";
import { GiFlowerPot } from "react-icons/gi";

const KeyFeatures = () => {
  return (
    <div className="container mx-auto">
      <h4
        data-aos="slide-down"
        className="text-start my-20 text-6xl text-custom-color font-stylishFont"
      >
        Key Features
      </h4>

      <div className="flex flex-col max-md:gap-10 md:flex-row">
        <div className="px-2 space-y-5 max-md:w-full md:max-w-[35vw] lg:max-w-[45vw]">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <FaBusinessTime></FaBusinessTime>
            </div>
            <div>
              <p className="text-[12px]">10% OFF ON BUSINESS CENTRE SERVICES</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <FaWifi></FaWifi>
            </div>
            <div>
              <p className="text-[12px]">
                COMPLIMENTARY WI-FI, LED TVS, MEDIA DOCKING STATION AND COFFEE
                AND TEA MAKING FACILITIES
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <GiFlowerPot></GiFlowerPot>
            </div>
            <div>
              <p className="text-[12px]">
                25% OFF AT THE SPA AND ALL F&B OUTLETS, EXCEPT Q’S BAR AND
                LOUNGE
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <MdLocalDining></MdLocalDining>
            </div>
            <div>
              <p className="text-[12px]">15% OFF ON IN-ROOM DINING</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <BsCloudArrowDownFill></BsCloudArrowDownFill>
            </div>
            <div>
              <p className="text-[12px]">
                30% OFF ON LAUNDRY AND DRY CLEANING SERVICES
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <AiFillCar></AiFillCar>
            </div>
            <div>
              <p className="text-[12px]">
                TWO COMPLIMENTARY COVERED PARKING SPACES
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <PiCoffeeFill></PiCoffeeFill>
            </div>
            <div>
              <p className="text-[12px]">
                COMPLIMENTARY VALET PARKING SERVICES
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-[#bc9b6a] text-white rounded-full">
              <MdCleaningServices></MdCleaningServices>
            </div>
            <div>
              <p className="text-[12px]">
                PREMIUM COFFEE AND TEA REPLENISHMENTS ON THE DAY OF HOUSEKEEPING
              </p>
            </div>
          </div>
        </div>

        <div className="px-2 space-y-5 md:max-w-[35vw] mx-auto lg:max-w-[35vw]">
          <p className="text-sm">
            Ideal for longer stays in Dubai, our Versace-designed apartments can
            be leased for a period of 30 days or more. Choose between our Two
            Bedroom and Three Bedroom Residences and enjoy a host of benefits
            designed to make your long stay comfortable, with five-star hotel
            facilities and services at your fingertips.
          </p>
          <h4 className="font-bold">Key benefits for long stay residents:</h4>
          <ul className="list-disc	ml-5">
            <li className="  ">
              Housekeeping cleaning services including full linen change 2 times
              per week
            </li>
            <li className="  ">
              Premium coffee and tea replenishments on the day of Housekeeping
            </li>
            <li className="  ">Complimentary valet parking services</li>
            <li className="  ">Two complimentary covered parking spaces</li>
            <li className="  ">30% off on laundry and dry cleaning services</li>
            <li className="  ">
              25% off at The SPA and all F&B outlets, except Q’s bar and lounge
            </li>
            <li className="  ">15% off on in-room dining</li>
            <li className="  ">10% off on business centre services</li>
            <li className="  ">
              Complimentary Wi-Fi, LED TVs, media docking station and coffee and
              tea making facilities
            </li>
          </ul>
          <h4 className="font-bold">Terms and conditions:</h4>
          <ul className="list-disc	ml-5">
            <li>
              All room rates are subject to 10% service charge, 7% municipality
              fee and 5% VAT per room per night
            </li>
            <li>
              Tourism Dirham Fee of AED 20 per bedroom per night is additionally
              charged
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
