import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MyContext from "./MyContext";
const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  const { results, loading, error } = data;
  const [randomUniversityData, setRandomUniversityData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const inputRef = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput(inputValue);
    // setSearchInput("");
  };

  const loadRandomUniversity = async () => {
    const url = `http://universities.hipolabs.com/search?country=${searchInput}&page=${page}`;
    try {
      const results = await axios.get(url);
      setData({ results, loading: false, error: null });
      setRandomUniversityData(results.data);
      console.log("the response is ", results.data);
    } catch (error) {
      setData({ results: null, loading: false, error });
    }
  };

  useEffect(() => {
    loadRandomUniversity();
  }, [searchInput]);

  //cl gives an object with one property called current.

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setSearch(searchInput);
  //   setSearchInput("");
  //   document.querySelector("h1").classList.add("h1Change");
  //   document.querySelector("form").classList.add("formChange");
  // };
  // const nextPage = () => {
  //   setPage((prev) => prev + 1);
  //   inputRef.current.focus();
  // };

  return (
    <MyContext.Provider
      value={{
        data,
        searchInput,
        setSearchInput,
        setPage,
        page,
        inputRef,
        submitHandler,
        inputValue,
        setInputValue,
        randomUniversityData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
