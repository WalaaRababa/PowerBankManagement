import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
const PowerBankUser = () => {
    const [list , setList ] = useState(null)
    const { token } = useContext(AuthContext);
    const [show , setShow ] = useState()
    const [message, setMessage] = useState("");
const orderPowerBank=async()=>{
  try {
    const result = await axios.patch(`http://localhost:3000/take_from_station/${show}`,{} ,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(result);
    setShow()
  } catch (error) {
      console.log(error);
  
  }
};
    const getData = async () => {
        try {
          const result = await axios.get("http://localhost:3000/available_power_bank", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(result);
          setList(result.data);
        } catch (error) {
            console.log(error);
          if (error.response.data) {
            return setMessage(error.response.data.message);
          }
          setMessage("Error happened while Get Data, please try again");
        }
      };
    useEffect(() => {
         getData()   
    },[show])
    
  return (
    <section className=" px-4">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div>
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Power Bank
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {list?.length} available_power_bank
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
          These companies have purchased in the last 12 months.
        </p>
      </div>

    
    </div>
    <div className="flex flex-col mt-6 w-full">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <div className="flex items-center gap-x-3">
                      <input
                        type="checkbox"
                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                      />
                      <span>Serial .no</span>
                    </div>
                  </th>

                  <th
                    scope="col"
                    className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    <button className="flex items-center gap-x-2">
                      <span>Status</span>

                      <svg
                        className="h-3"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                          fill="currentColor"
                          stroke="currentColor"
                        />
                        <path
                          d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                          fill="currentColor"
                          stroke="currentColor"
                        />
                        <path
                          d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                          fill="currentColor"
                          stroke="currentColor"
                        />
                      </svg>
                    </button>
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                  >
                    Station Name {" "}
                  </th>
                  <th scope="col" className="relative py-3.5 px-4">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {list?.map((item) => {
                  return (
                    <>
                      <tr>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white">
                                  {item.id}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-small text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 dark:bg-gray-800">
                            {item.status == "In Use" ? (
                              <p className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">
                                {item.status}
                              </p>
                            ) : (
                              <p className="px-3 py-1 text-xs text-emerald-500 rounded-full dark:bg-gray-800 bg-emerald-100/60">
                                {item.status}
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                           {item.station.name }
                        </td>
                
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button  onClick={()=>{setShow(item.id)}}
                        className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
          Use
          </button>

                       
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

{show&&    <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div className="rounded-lg bg-white p-8 shadow-2xl">
  <h2 className="text-lg font-bold">Are you sure you want to proceed with using this power bank?</h2>

  <p className="mt-2 text-sm text-gray-500">
  Are you certain you want to proceed?  </p>

  <div className="mt-4 flex gap-2">
    <button onClick={orderPowerBank}
    type="button" className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600">
      Yes, I'm sure
    </button>

    <button onClick={()=>setShow()}
    type="button" className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600">
      No, go back
    </button>
  </div>
</div>
</div> 
}
    {message && <span className="text-red-500 text-lg">{message}</span>}
  </section>
  )
}

export default PowerBankUser