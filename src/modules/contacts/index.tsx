import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeContact } from "./actions";
import { Contact, UserStatus } from "./types";
import UserIcon from "../../assets/user.png";
import NotFoundIcon from "../../assets/not-found.png";
import ContactDetails from "./components/organism/details-modal";

const Contacts = () => {
  let data: undefined;
  const [isOpen, setIsOpen] = useState(false);
  const [singleContact, setSingleContact] = useState<Contact | undefined>({
    id: 0,
    firstName: "",
    lastName: "",
    phone: "",
    status: UserStatus.ACTIVE,
  });
  const allContacts = useSelector(
    (store: { contacts: Contact[] }) => store.contacts
  );
  const dispatch = useDispatch();
  const toggleDetails = (contact: Contact | undefined) => {
    setSingleContact(contact);
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {}, [dispatch, allContacts.length]);

  return (
    <div className="justify-center pt-16 text-white  p-4  w-full ">
      <div className="flex m-4 justify-center">
        <button className="shadow shadow-slate-500 rounded-md font-bold bg-p-navy-blue p-3 text-2xl">
          <Link to="/contact_form">Create Contact</Link>
        </button>
      </div>
      {allContacts.length === 0 && (
        <div className=" m-auto w-fit px-4 py-20 align-middle justify-center">
          <div className="flex justify-center">
            <img className="w-20 h-20" src={NotFoundIcon} alt="not-found" />
          </div>
          <h1 className="text-2xl text-p-navy-blue text-center">
            No contacts found <br />
            Please add contact from Create Contact Button
          </h1>
        </div>
      )}
      <div
        id="contact_list"
        className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4"
      >
        {isOpen && <ContactDetails close={() => toggleDetails(data)} el={singleContact} />}
        {allContacts.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-p-light-blue rounded-md shadow-xl m-4 p-1 text-center text-white"
            >
              <div className="flex flex-col w-full p-2 m-auto">
                <div className="flex justify-center p-2">
                  <img
                    className="w-14 h-14 rounded-full"
                    src={UserIcon}
                    alt="User"
                  />
                </div>
                <div className="flex flex-col text-left truncate pl-2">
                  <p className="truncate">First Name : {el.firstName}</p>
                  <button
                    onClick={() => toggleDetails(el)}
                    className="flex text-white font-bold truncate hover:text-yellow-200"
                  >
                    More Details
                  </button>
                </div>
              </div>

              <div className="flex justify-center flex-col my-2">
                <Link to={`edit/${el.id}`} className="flex w-full">
                  <button className="rounded p-1 my-2 mx-4 w-full bg-emerald-400 text-white">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => dispatch(removeContact(el.id))}
                  className="rounded p-1 my-2 mx-4 bg-red-400 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contacts;
