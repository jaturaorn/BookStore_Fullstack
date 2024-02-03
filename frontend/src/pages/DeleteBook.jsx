import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

import BackButton from "../components/BackButton";
import { Spinner } from "../components/Spinner";

export const DeleteBook = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5500/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Delete Success", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        // alert("An error happened. Please check the console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading && <Spinner />}
      <div
        className="flex flex-col border-2 border-sky-400 
      rounded-xl w-[600px] p-4 mx-auto"
      >
        <h3 className="text-2xl text-center">
          Are You Sure You want to Delete this book
        </h3>

        <div className="flex justify-between">
          <button
            className="p-4 bg-red-600
           text-white m-8 rounded-md"
            onClick={handleDeleteBook}
          >
            Yes,I Delete it
          </button>
          <Link to={"/"}>
            <button
              className="p-4 bg-slate-50
            text-black m-8 rounded-md"
            >
              No, I Don't
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
