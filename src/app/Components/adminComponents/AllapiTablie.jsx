"use client";
import { useState } from "react";
import Image from "next/image";
import { EllipsisVertical, Pencil, Trash2, X } from "lucide-react";
import { editapi, deleteapi } from "@/action/api.action";

function AllapiTablie({ Allapis }) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApi, setSelectedApi] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleEditClick = (api) => {
    setSelectedApi(api);
    setIsModalOpen(true);
    setOpenDropdown(null);
  };

  return (
    <div className="overflow-hidden border border-white/10 rounded-lg bg-[#0F1720]/50 backdrop-blur-sm relative">
      <table className="w-full text-left text-sm border-collapse">
        {/*  Table  */}
        <thead className="bg-white/5 text-gray-300 font-medium uppercase tracking-wider">
          <tr>
            <th className="px-6 py-4">Icon</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4">API Endpoint</th>
            <th className="px-6 py-4 text-right">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/5 text-gray-300">
          {Allapis?.map((api) => (
            <tr key={api._id} className="hover:bg-white/5 transition-colors">
              <td className="px-6 py-4">
                <div className="relative border border-white/10 p-2 rounded w-11 h-11">
                  <Image
                    src={api.icon}
                    alt={api.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-white">{api.name}</td>
              <td className="px-6 py-4 max-w-xs truncate">{api.description}</td>
              <td className="px-6 py-4 font-mono text-blue-400 text-xs">
                {api.apiEndpint}
              </td>

              <td className="px-6 py-4 text-right relative">
                <button
                  onClick={() => toggleDropdown(api._id)}
                  className="p-2 hover:bg-white/10 rounded-full text-gray-400">
                  <EllipsisVertical size={20} />
                </button>

                {openDropdown === api._id && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setOpenDropdown(null)}></div>
                    <div className="absolute right-6 mt-2 w-36 bg-[#1A232E] border border-white/10 rounded-md shadow-xl z-20 overflow-hidden text-left">
                      <button
                        onClick={() => handleEditClick(api)}
                        className="flex items-center w-full px-4 py-2.5 text-sm hover:bg-blue-500/10 text-gray-300 hover:text-blue-400 transition-colors">
                        <Pencil size={14} className="mr-2" /> Edit
                      </button>
                      <button
                        onClick={async () => {
                          if (confirm("Are you sure?"))
                            await deleteapi(api._id);
                          setOpenDropdown(null);
                        }}
                        className="flex items-center w-full px-4 py-2.5 text-sm hover:bg-red-500/10 text-red-400 transition-colors">
                        <Trash2 size={14} className="mr-2" /> Delete
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* --- EDIT MODAL  */}
      {isModalOpen && selectedApi && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#0F1720] border border-white/10 w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-5 border-b border-white/5">
              <h3 className="text-lg font-semibold text-white">
                Edit API Details
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <form
              action={async (formData) => {
                const res = await editapi(formData);
                if (res.success) {
                  setIsModalOpen(false);
                  alert("Updated Successfully!");
                }
              }}
              className="p-5 space-y-4">
              <input type="hidden" name="id" value={selectedApi._id} />

              {/* API Name Field */}
              <div>
                <label className="text-xs text-gray-400 block mb-1">
                  API Name
                </label>
                <input
                  name="name"
                  defaultValue={selectedApi.name}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </div>

              {/* Description Field */}
              <div>
                <label className="text-xs text-gray-400 block mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={selectedApi.description}
                  rows="3"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white outline-none focus:border-blue-500"
                />
              </div>

              {/* Endpoint Field */}
              <div>
                <label className="text-xs text-gray-400 block mb-1">
                  Endpoint
                </label>
                <input
                  name="apiEndpint"
                  defaultValue={selectedApi.apiEndpint}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-blue-400 font-mono text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1">
                  Icon URL
                </label>
                <input
                  name="icon"
                  defaultValue={selectedApi.icon}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white outline-none focus:border-blue-500 text-sm"
                  placeholder="https://example.com/icon.png"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-2 rounded-md bg-white/5 hover:bg-white/10 text-white transition-all text-sm">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-all text-sm font-medium">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AllapiTablie;
