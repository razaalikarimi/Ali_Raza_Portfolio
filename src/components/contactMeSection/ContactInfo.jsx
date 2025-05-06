import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="aliraza85211@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 8521199957" Image={FiPhone} />
      <SingleInfo text="Delhi, India" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
