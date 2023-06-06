import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact } from "../../actions";
import { Contact, FormDetails } from "../../types";
import { UserStatus } from "../../types";
import ContactForm from "../organism/contact-form";

function EditContact() {
  const paramData = useParams();
  const id = Number(paramData.id) || 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const AllContact = useSelector(
    (store: { contacts: Contact[] }) => store.contacts
  );

  const [form, setForm] = useState<FormDetails>({
    firstName: "",
    lastName: "",
    phone: "",
    status: UserStatus.ACTIVE,
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(editContact({ id, ...form }));
    navigate("/");
  };

  useEffect(() => {
    AllContact.filter((el) => el.id === id && setForm(el));
  }, []);

  return (
    <ContactForm
      handleSave={handleSave}
      handleChange={handleChange}
      title="Create Contact Screen"
      form={form}
    />
  );
}

export default EditContact;
