import React from "react";
import PropTypes from "prop-types";
import { v1 as uuid, v1 } from "uuid";
import styles from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  const inputId = uuid(v1);
  const labelId = uuid(v1);

  return (
    <>
      <div className={styles.form}>
        <label htmlFor={labelId} className={styles.filter}>
          Find contacts by
        </label>
        <input
          id={inputId}
          type="text"
          value={value}
          name="filter"
          onChange={onChange}
          className={styles.filterInput}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
