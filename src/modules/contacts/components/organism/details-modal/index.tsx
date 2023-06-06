import { Contact, UserStatus } from "../../../types";
import UserIcon from "../../../../../assets/user.png";
import CloseIcon from "../../../../../assets/close.png";

interface ContactDetailsProps {
  el: Contact | undefined;
  close: any;
}

const ContactDetails = ({ close, el }: ContactDetailsProps) => {
  return (
    <div className="fixed top-0 text-black left-0 w-full h-full  bg-opacity-20 bg-black flex items-center justify-center">
      <div className="bg-white drop-shadow-md rounded-md p-4 w-1/2 h-1/2">
        <div className="flex justify-center items-center mb-2">
          <h2 className="text-2xl font-medium">Contact Details</h2>
          <button
            className="px-2 fixed top-4 right-4"
            onClick={() => close()}
          >
            <img className="w-8 h-8 rounded-full" src={CloseIcon} alt="Close" />
          </button>
        </div>
        <div key={el?.id} className= "m-4 p-4 text-black">
          <div className="w-full m-auto flex justify-center ">
            <img className="lg:w-20 lg:h-20 sm:w-14 sm:h-14 rounded-full" src={UserIcon} alt="User" />
          </div>
          <div className="text-left flex flex-col truncate">
            <p className="truncate p-2">First Name : {el?.firstName}</p>
            <p className="truncate p-2">Last Name : {el?.lastName}</p>
            <p className="truncate p-2">Mobile : {el?.phone}</p>
            <p className="truncate p-2">
              Status :{" "}
              {el?.status === UserStatus.ACTIVE ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
