import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useState } from "react";

const Header: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    setSearchWord(event.target.value);
  };

  const Search = () => {
    window.location.href = `/search?ward=${searchWord}`;
  };

  const Write = () => {
    window.location.href = "/write";
  };

  return (
    <header>
      <div className={styles.header_box}></div>
      <div className={styles.header}>
        <Link to="/">
          <div>Google Solution</div>
        </Link>
        <div className={styles.header_modules}>
          <div className={styles.search_module}>
            <input
              type="text"
              placeholder="記事を検索"
              value={searchWord}
              className={styles.header_searchbar}
              onChange={handleInputChange}
            />
            <div className={styles.search_button}>
              <button onClick={Search}>
                <SearchIcon />
              </button>
            </div>
          </div>
          <div>
            <button className={styles.post_module} onClick={Write}>
              記事を書く
              <EditNoteIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
