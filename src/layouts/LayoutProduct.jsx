//pages
import Product from "../pages/Product";
//components
import NavbarClients from "../components/NavbarClients";
import ModalForm from "../components/ModalForm";
//react
import { useState } from "react";
//axios
import axios from "axios";

const LayoutProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [clientData, setClientData] = useState(null);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setIsOpen(true);
    setmodalMode(mode);
  };
  const handleSubmit = async (newClientData) => {
    if (modalMode === "add") {
      try {
        const response = await axios.post(
          import.meta.env.VITE_API_URL + "/clients",
          newClientData
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
      console.log("Modal Mode Add");
    } else {
      console.log("Modal Mode Edit");
      console.log("Updating", clientData.id);
      try {
        const response = await axios.put(
          import.meta.env.VITE_API_URL + `/clients/${clientData.id}`,
          newClientData
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      <div className="flex flex-col px-30 py-4 ">
        <NavbarClients
          onOpen={() => handleOpen("add")}
          onSearch={setSearchTerm}
        />
        <div className="bg-black min-h-screen">
          <Product handleOpen={handleOpen} searchTerm={searchTerm} />
        </div>
        <ModalForm
          isOpen={isOpen}
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          mode={modalMode}
          clientData={clientData}
        />
      </div>
    </>
  );
};

export default LayoutProduct;
