import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
import moment from "moment";

const Profile = () => {
  const [myPower, setMyPower] = useState(null);
  const { token } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState();
  const returnPower = async () => {
    try {
      const result = await axios.patch(
        `http://localhost:3000/return_to_station/${show}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(result);
      setShow();
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:3000/my_power_banks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      setMyPower(result.data);
    } catch (error) {
      console.log(error);
      if (error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Get Data, please try again");
    }
  };
  useEffect(() => {
    getData();
  }, [show]);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Orders
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {myPower?.map((item) => {
                  return (
                    <li key={item.id} className="flex items-center gap-4">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIuaEVVspMMaq9vZm3_bLMoX4y4XcQkWcR95ihPQdS2PbSySs-G0a2dispH44XrffgGg&usqp=CAU"
                        alt=""
                        className="size-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">
                          {item?.station?.name}
                        </h3>
                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">serial:</dt>
                            <dd className="inline">{item.id}</dd>
                          </div>

                          <div>
                            <dt className="inline">Date:</dt>
                            <dd className="inline">
                              {moment(item.updated_at).format("MMMM Do YYYY")}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <button
                          onClick={() => setShow(item.id)}
                          className="flex items-center text-gray-600 transition hover:text-red-600 text-sm"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                            />
                          </svg>

                          <span>Return item</span>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {show && (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="text-lg font-bold">
              Are you sure you want to proceed with return this power bank?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              This action could affect availability elsewhere. Are you
              absolutely certain it's ?{" "}
            </p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={returnPower}
                type="button"
                className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
              >
                Yes, I'm sure
              </button>

              <button
                onClick={() => setShow()}
                type="button"
                className="rounded bg-red-500 px-4 py-2 text-sm font-medium text-white"
              >
                No, go back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
