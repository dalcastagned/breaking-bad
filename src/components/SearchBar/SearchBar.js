import React, { useCallback, useEffect, useState } from "react";
import { StyledSearchBar, SearchBarText } from "./SearchBar.elements";

export const SearchBar = ({ sourceList, setList, listSize, placeholder }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBool, setSearchBool] = useState(false);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const setNewList = useCallback(
    (newList) => {
      setList(newList);
    },
    [setList]
  );

  useEffect(() => {
    const filteredCharacters = sourceList.filter((character) => {
      return character.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    searchValue !== "" ? setNewList(filteredCharacters) : setNewList(sourceList);
    searchValue !== "" ? setSearchBool(false) : setSearchBool(true);
  }, [searchValue, sourceList, setNewList, searchBool]);

  return (
    <>
      <StyledSearchBar
        type="text"
        value={searchValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {searchBool ? (
        <SearchBarText>{`Total found (${listSize})`}</SearchBarText>
      ) : listSize > 0 ? (
        <SearchBarText>{`Results for "${searchValue}" (${listSize})`}</SearchBarText>
      ) : (
        <SearchBarText>{`Not found "${searchValue}"`}</SearchBarText>
      )}
    </>
  );
};
