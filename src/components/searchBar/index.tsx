import React, { useState } from 'react';
import './searchBar.scss';

export function SearchBar(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('');
  const [emptySearchBar, setEmptySearchBar] = useState<boolean>(true);

  const searchBarChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const value = event.target.value;
    setSearchValue(value);
    setEmptySearchBar(!Boolean(value));
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('searchValue=', searchValue);
  };

  const clearBtnClickHandler = (): void => {
    setSearchValue('');
    setEmptySearchBar(true);
  };

  return (
    <form className="searchForm" onSubmit={formSubmitHandler}>
      <label className="searchForm__searchBar__label" htmlFor="searchBar">
        <input
          className="searchForm__searchBar__input"
          type="text"
          name="searchBar"
          value={searchValue}
          onChange={searchBarChangeHandler}
          placeholder="write something..."
        />
      </label>
      {emptySearchBar ? null : (
        <button
          className="searchForm__clearBtn"
          type="button"
          onClick={clearBtnClickHandler}
        >
          <div className="searchForm__clearBtn__icon"></div>
        </button>
      )}
      <button className="searchForm__submitBtn" type="submit">
        <div className="searchForm__submitBtn__icon"></div>
      </button>
    </form>
  );
}
