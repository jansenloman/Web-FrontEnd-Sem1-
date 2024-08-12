import { Fragment, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5"
import "../style/Filter.css";

const Search = ({ placeholder, data ,link}) => {
  const [filter, setFilter] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord)
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilter([]);
    } else {
      setFilter(newFilter);
    }
  };

  const clearInput = () => {
    setFilter([]);
    setWordEntered([""])
  }
  
  return (
    <Fragment>
      <div className="kontenersearch">
        <input
          className="searchbar"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        ></input>
        <button type="submit" className="butsearch">
          {filter.length === 0 ? <FaSearch />:<IoClose className="iconclose" onClick={clearInput}/>}
        </button>
      </div>
      {filter.length !== 0 && (
        <div className="floatleft">
          <span className="dataResult">
            {filter.map((value, key) => {
              return (
                <a href={value.link} className="dataku">
                  {value.title}
                </a>
              );
            })}
          </span>
        </div>
      )}
    </Fragment>
  );
};
export default Search;
