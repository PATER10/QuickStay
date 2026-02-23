import React, { useEffect, useState, useCallback } from "react";
import Title from "../components/Title.jsx";
import { assets } from "../assets/assets.js";
import { useAppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const MyBookings = () => {
  const { axios, getToken, user } = useAppContext();
  const [bookings, setBookings] = useState([]);

  const fetchUserBookings = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/bookings/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, [axios, getToken, setBookings]);

  useEffect(() => {
    if (user) {
      fetchUserBookings();
    }
  }, [user, fetchUserBookings]);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 dark:bg-slate-900 min-h-screen">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks."
        align="left"
      />
      <div className="max-w-6xl mt-8 w-full text-gray-800 dark:text-slate-200">
        <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 dark:border-slate-700 font-medium text-base py-3">
          <div className="w-1/3">Hotels</div>
          <div className="w-1/3">Date & Timings</div>
          <div className="w-1/3">Payment</div>
        </div>

        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 dark:border-slate-700 py-6 first:border-t"
          >
            {/* Hotel Details */}
            <div className="flex flex-col md:flex-row">
              <img
                src={booking.room?.images?.[0] || assets.roomImg1}
                alt="hotel-img"
                className="min-md:w-44 rounded shadow object-cover"
              />
              <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
                <p className="font-playfair text-2xl">
                  {booking.hotel?.name}
                  <span className="font-inter text-sm ml-1">
                    ({booking.room?.roomType})
                  </span>
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-slate-400">
                  <img
                    src={assets.locationIcon}
                    alt="location-icon"
                    className="dark:invert dark:opacity-60"
                  />
                  <span>{booking.hotel?.address}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-slate-400">
                  <img
                    src={assets.guestsIcon}
                    alt="guests-icon"
                    className="dark:invert dark:opacity-60"
                  />
                  <span>Guests: {booking.guests}</span>
                </div>
                <p className="text-base">Total: ${booking.totalPrice}</p>
              </div>
            </div>
            {/* Date & Timings */}
            <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
              <div>
                <p>Check-In:</p>
                <p className="text-gray-500 dark:text-slate-400 text-sm">
                  {new Date(booking.checkInDate).toDateString()}
                </p>
              </div>
              <div>
                <p>Check-Out:</p>
                <p className="text-gray-500 dark:text-slate-400 text-sm">
                  {new Date(booking.checkOutDate).toDateString()}
                </p>
              </div>
            </div>
            {/* Payment */}
            <div className="flex flex-col items-start justify-center pt-3">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <p
                  className={`text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}
                >
                  {booking.isPaid ? "Paid" : "Unpaid"}
                </p>
              </div>
              {!booking.isPaid && (
                <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 dark:border-slate-600 dark:text-slate-300 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all cursor-pointer">
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
