import { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { fakeData } from "../Tabs/fackdata";
import { Auth } from "../../Context/AuthProvider";

const HomeTable = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(Auth);
  useEffect(() => {
    // loading animation
    setTimeout(() => setData(fakeData), 300);
  }, []);

  return (
    <div className="p-4 overflow-x-auto min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Your Attendance</h1>
      <div className={`${user ? "" : "hidden"}`}>
        <motion.table
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="table w-full border border-gray-200 rounded-xl overflow-hidden shadow-lg "
        >
          <thead className="bg-base-200 text-base font-semibold">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Entry Time</th>
              <th>Exit Time</th>
            </tr>
          </thead>
          <tbody>
            {fakeData.map((user, index) => (
              <motion.tr
                key={user.id}
                whileHover={{ scale: 1.01 }}
                className="hover:bg-base-300 transition duration-200"
              >
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img
                        src={user.photoUrl}
                        alt="User Avatar"
                        onError={(e) =>
                          (e.currentTarget.src =
                            "https://via.placeholder.com/48")
                        }
                      />
                    </div>
                  </div>
                </td>
                <td className="font-semibold text-primary">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {new Date(user.entryTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td>
                  {new Date(user.exitTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};
export default HomeTable;
