import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";

import { Spinner } from "../components/Spinner";
import BookCard from "../components/home/BookCard";
import BookTable from "../components/home/BookTable";

export const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showTypes, setShowTypes] = useState("table");

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5500/books");
        setBooks(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  // console.log(books);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600
        px-4 py-1 rounded-lg"
          onClick={() => setShowTypes("table")}
        >
          Table
        </button>

        <button
          className="bg-sky-300 hover:bg-sky-600
        px-4 py-1 rounded-lg"
          onClick={() => setShowTypes("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showTypes === "table" ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};
