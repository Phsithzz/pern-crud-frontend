//axios
import axios from "axios";
//react
import { useState,useEffect } from "react";

const Product = ({ handleOpen,searchTerm }) => {

  const [tableData,setTableData] = useState([])
  const [error,setError] = useState(null)

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL+"/clients")
        setTableData(response.data)
      } catch (err) {
        setError(err.message)
        
      }
    }
    fetchData()
  },[])

  const filterData = tableData.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.job.toLowerCase().includes(searchTerm.toLowerCase()) 
  )
  
  const handleDelete = async(id)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this data")
    if(confirmDelete){
      try {
        await axios.delete(import.meta.env.VITE_API_URL+`/clients/${id}`)
        setTableData((prevData)=>prevData.filter(client=> client.id !== id))
      } catch (err) {
        console.log(err)
        
      }
    }
  }
  return (
    <>
      {error && <div className="">{error}</div>}
      <div className="overflow-x-auto px-4 py-6">
        <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-white text-left border-b border-gray-600">
                ID
              </th>
              <th className="px-4 py-2 text-white text-left border-b border-gray-600">
                Name
              </th>
              <th className="px-4 py-2 text-white text-left border-b border-gray-600">
                Email
              </th>
              <th className="px-4 py-2 text-white text-left border-b border-gray-600">
                Job
              </th>
              <th className="px-4 py-2 text-white text-left border-b border-gray-600">
                Rate
              </th>
              <th className="px-4 py-2 text-white text-left border-b border-gray-600">
                Status
              </th>
              <th className="px-4 py-2 text-white text-left border-b border-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {filterData.map((client) => (
              <tr key={client.id} className="hover:bg-gray-800 transition">
                <td className="px-4 py-2 text-white border-b border-gray-700">
                  {client.id}
                </td>
                <td className="px-4 py-2 text-white border-b border-gray-700">
                  {client.name}
                </td>
                <td className="px-4 py-2 text-white border-b border-gray-700">
                  {client.email}
                </td>
                <td className="px-4 py-2 text-white border-b border-gray-700">
                  {client.job}
                </td>
                <td className="px-4 py-2 text-white border-b border-gray-700">
                  {client.rate}
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${
                      client.isactive ? "bg-green-400" : "bg-red-400"
                    }`}
                  >
                    {client.isactive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-4 py-2 border-b border-gray-700">
                  <div className="flex gap-2 whitespace-nowrap">
                    <button
                      onClick={() => handleOpen("edit",client)}
                      className="rounded-full px-4 py-1 bg-blue-400 text-white text-sm font-medium hover:bg-blue-600 transition"
                    >
                      Update
                    </button>
                    <button 
                      onClick={()=>handleDelete(client.id)}
                    className="rounded-full px-4 py-1 bg-red-400 text-white text-sm font-medium hover:bg-red-600 transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
