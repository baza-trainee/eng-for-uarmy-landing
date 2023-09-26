import React, { useState } from "react";
import styles from "./CustomSelect.module.scss";

const CustomSelect = ({requestTypeHandler}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Type of request");

  const options = [
    { label: "I’d like to volunteer" },
    { label: "I’d like to become a partner or sponsor" },
    { label: "I’d like to spread the word" },
    { label: "I have questions and/or feedback" },
    { label: "Other" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (label) => {
    setSelectedOption(label);
    requestTypeHandler(label);
    setIsOpen(false);
  };

  const changeStyle = selectedOption !== "Type of request";
  

  return (
    <div className={styles.custom__select}>
      <div
        className={`${styles.select__trigger} ${
          isOpen ? styles.select__triggerBorder : ""
        }`}
        onClick={toggleDropdown}
      >
        <span className={`${changeStyle ? styles.select__selected : ""}`}>
          {selectedOption}
        </span>
        <svg
        className={styles.select__svg}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path d="M5 11L16 22L27 11" stroke="black" />
        </svg>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option.label}
              onClick={() => handleOptionClick( option.label)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
