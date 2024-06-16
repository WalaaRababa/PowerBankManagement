/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../AuthContext";
const CreatePowerBank = () => {
  const [stations, setStations] = useState(null);
  const [user, setUser] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [message, setMessage] = useState("");
const [data , setData ] = useState({})
  const { token } = useContext(AuthContext);
console.log(token);
  const getUser = async () => {
    try {
      const result = await axios.get("http://localhost:3000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      setUser(result.data);
    } catch (error) {
      if (error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  const getStation = async () => {
    try {
      const result = await axios.get("http://localhost:3000/stations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      setStations(result.data);
    } catch (error) {
      if (error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  const getWarehouse = async () => {
    try {
      const result = await axios.get("http://localhost:3000/warehouses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      setWarehouse(result.data);
    } catch (error) {
      if (error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  const createPowerBank= async (e) => {
    console.log(data);
    // { status: 'In Use', station_id: 2, user_id: 3 },
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/power_banks",data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(result);
    
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  //===============================================================
  useEffect(() => {
    getStation();
    getUser();
    getWarehouse();
  }, []);

  return (
    <>
      <span className="flex items-center mb-5">
        <span className="pr-6">Create Power Bank</span>
        <span className="h-px flex-1 bg-gray-100"></span>
      </span>
      <div className="max-w-md mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="status"
            >
              Status
            </label>
            <div className="relative">
              <select onChange={(e)=>{setData((pre)=>({...pre,status:(e.target.value)}))}}
                id="status"
                className="h-10 w-full border border-gray-300 bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="" disabled selected hidden></option>
                <option value="In Use">In Use</option>
                <option value="Available">Available</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="fill-current h-4 w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M3.77 16.807l-.26-1.296-1.035-.517a.5.5 0 0 0-.542.839l1.296 1.296a1 1 0 0 1 .2-.08zM12.5 13a.5.5 0 0 1-.5.5H3a1 1 0 0 1 0-2h9a.5.5 0 0 1 .5.5z" />
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9zM5 10V4h9v6H5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="user"
            >
              User
            </label>

            <select
            onChange={(e)=>{setData((pre)=>({...pre,user_id:parseInt(e.target.value)}))}}
              name="HeadlineAct"
              id="HeadlineAct"
              className="h-10 w-full border border-gray-300 bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled selected hidden>
                Please select
              </option>

              {user?.map((user) => {
                return (
                  <optgroup key={user.id} label={user.name[0]}>
                    <option value={user.id}>{user.name}</option>
                  </optgroup>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Station"
            >
              Station
            </label>
            <select
             onChange={(e)=>{setData((pre)=>({...pre,station_id:parseInt(e.target.value)}))}}
              id="Station"
              className="h-10 w-full border border-gray-300 bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="" disabled selected hidden>
                {" "}
                Please select
              </option>
              {stations?.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="warehouse"
            >
              Warehouse
            </label>
            <div className="relative">
              <select
               onChange={(e)=>{setData((pre)=>({...pre,warehouse_id:parseInt(e.target.value)}))}}
                id="warehouse"
                className="h-10 w-full border border-gray-300 bg-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="" disabled selected hidden>
                  {" "}
                  Please select
                </option>

                {warehouse?.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  className="fill-current h-4 w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-3v2a1 1 0 0 1-2 0v-2H7a1 1 0 0 1 0-2h3V5a1 1 0 0 1 1-1z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button onClick={createPowerBank}
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Power Bank
            </button>
          </div>
        </form>
      </div>

    
    </>
  );
};

export default CreatePowerBank;
