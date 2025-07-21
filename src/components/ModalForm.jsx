//react
import { useEffect, useState } from "react";

const ModalForm = ({ isOpen, onClose, mode, onSubmit, clientData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Active");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const clientData = {
        name,
        email,
        job,
        rate: Number(rate),
        isactive: status,
      };
      await onSubmit(clientData);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (mode === "edit" && clientData) {
      setName(clientData.name);
      setEmail(clientData.email);
      setJob(clientData.job);
      setRate(clientData.rate);
      setStatus(clientData.isactive);
    } else {
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setStatus(false);
    }
  }, [mode, clientData]);
  return (
    <>
      <dialog open={isOpen}>
        <div className="fixed inset-0 mt-4 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-[420px] max-w-full">
            <h3 className="font-bold text-xl text-center mb-6">
              {mode === "edit" ? "Edit Client" : "Client Detail"}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="border rounded px-3 py-2"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  className="border rounded px-3 py-2"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="job" className="text-sm font-semibold mb-1">
                  Job
                </label>
                <input
                  id="job"
                  type="text"
                  className="border rounded px-3 py-2"
                  placeholder="Enter job"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="rate" className="text-sm font-semibold mb-1">
                    Rate
                  </label>
                  <input
                    id="rate"
                    type="number"
                    className="border rounded px-3 py-2"
                    placeholder="Enter rate"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="isactive"
                    className="text-sm font-semibold mb-1"
                  >
                    Status
                  </label>
                  <select
                    id="isactive"
                    className="border rounded px-3 py-2"
                    value={status ? "Active" : "Inactive"}
                    onChange={handleStatusChange}
                  >
                    <option>Inactive</option>
                    <option>Active</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 text-black px-5 py-2 rounded-full hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800"
                >
                  {mode === "edit" ? "Save Changes" : "Add Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalForm;
