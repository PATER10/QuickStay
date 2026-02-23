import React, { useState, useEffect, useCallback } from "react";
import Title from "../../components/Title.jsx";
import { useAppContext } from "../../context/AppContext.jsx";
import toast from "react-hot-toast";

const ListRoom = () => {
  const [rooms, setRooms] = useState([]);
  const { axios, getToken, user, currency } = useAppContext();

  //Fetch Rooms of the Hotel Owner
  const fetchRooms = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/rooms/owner", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setRooms(data.rooms);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [getToken, axios, setRooms]);

  //Toggle Availability of the Room
  const toggleAvailability = async (roomId) => {
    const { data } = await axios.post(
      "/api/rooms/toggle-availability",
      { roomId },
      { headers: { Authorization: `Bearer ${await getToken()}` } },
    );
    if (data.success) {
      toast.success(data.message);
      fetchRooms();
    } else {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchRooms();
    }
  }, [user, fetchRooms]);

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />
      <p className="text-gray-500 dark:text-slate-400 mt-8">All Rooms</p>
      <div className="w-full max-w-3xl text-left border border-gray-300 dark:border-slate-700 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-slate-800">
            <tr>
              <th className="py-3 px-4 text-gray-800 dark:text-slate-200 font-medium">
                Name
              </th>
              <th className="py-3 px-4 text-gray-800 dark:text-slate-200 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 dark:text-slate-200 font-medium">
                Price /night
              </th>
              <th className="py-3 px-4 text-gray-800 dark:text-slate-200 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index} className="dark:bg-slate-900">
                <td className="py-3 px-4 text-gray-700 dark:text-slate-300 border-t border-gray-300 dark:border-slate-700">
                  {item.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-slate-300 border-t border-gray-300 dark:border-slate-700 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 text-gray-700 dark:text-slate-300 border-t border-gray-300 dark:border-slate-700">
                  {currency}
                  {item.pricePerNight}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 dark:border-slate-700 text-sm text-red-500 text-center">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 dark:text-slate-200 gap-3">
                    <input
                      onChange={() => toggleAvailability(item._id)}
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                    />
                    <div className="w-12 h-7 bg-slate-300 dark:bg-slate-600 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
