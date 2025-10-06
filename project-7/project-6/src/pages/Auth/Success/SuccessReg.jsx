import React from "react";
import { SiTicktick } from "react-icons/si";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { verfiyEmailAddressSignup } from "../../../api/query/userQuery"; // adjust path
import { toast } from "react-toastify"; // you can use react-toastify for toast notifications
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const SuccessReg = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const { isLoading, isSuccess } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verfiyEmailAddressSignup({ token }),
    enabled: !!token,
    onError: (error) => {
      toast.error(`SignUp Error: ${error.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/signup");
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-xl">Verifying your account...</p>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="shadow-2xl text-center w-[30rem] p-6 bg-white rounded-xl">
          <SiTicktick className="text-purple-700 text-6xl mx-auto mb-4" />

          <h1 className="text-2xl font-semibold mb-2">Successfully Registered</h1>

          <p className="mb-4">
            Hurray! You have successfully created your account. Enter the app to explore all its features.
          </p>

          <Link to={"/signin"}>
            <button className="bg-gray-300 rounded-lg px-4 py-2 hover:bg-gray-600 hover:text-white">
              Enter The App
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return null;
};

export default SuccessReg;
