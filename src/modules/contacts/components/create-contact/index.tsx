import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions";
import { FormDetails, UserStatus } from "../../types";
import { useNavigate } from "react-router-dom";
import ContactForm from "../organism/contact-form";

const CreateContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(addContact(form));
    navigate("/");
  };

  return (
    <ContactForm
      handleSave={handleSave}
      handleChange={handleChange}
      title="Create Contact Screen"
      form={form}
    />
  );
};

export default CreateContact;
