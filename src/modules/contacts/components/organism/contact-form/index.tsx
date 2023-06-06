import { FormDetails, UserStatus } from "../../../types";

interface ContactFormProps {
  handleSave: () => void;
  handleChange: (e: any) => void;
  title: string;
  form: FormDetails;
}
const ContactForm = ({ handleSave, handleChange, title, form }: ContactFormProps) => {
  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="flex justify-center font-bold text-gray-900 py-3 text-2xl">
        Create Contact Screen
      </h2>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="first-name">
          First Name
        </label>
        <input
          className="w-full border text-left border-p-light-blue p-2 rounded"
          id="first-name"
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Last Name
        </label>
        <input
          className="w-full border text-left border-p-light-blue p-2 rounded"
          id="last-name"
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="last-name">
          Mobile Number
        </label>
        <input
          className="w-full border text-left border-p-light-blue p-2 rounded"
          id="phone"
          type="number"
          name="phone"
          min="10"
          max="10"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block font-bold mb-2">
          Status
        </label>
        <div className="flex flex-col">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="status"
              value="ACTIVE"
              checked={form.status === UserStatus.ACTIVE}
              onChange={handleChange}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">ACTIVE</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="status"
              value="INACTIVE"
              checked={form.status === UserStatus.INACTIVE}
              onChange={handleChange}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">INACTIVE</span>
          </label>
        </div>
      </div>
      <button
        className="bg-p-light-blue hover:bg-p-navy-blue shadow-md text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Contact
      </button>
    </div>
  );
};

export default ContactForm;