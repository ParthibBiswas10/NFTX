import React from "react";

import { InputSearch_1, InputSearch_2 } from "./SVG/index";

const InputSearch = ({ handleChange }) => {
  return (
    <div class="input-wrapper">
      <InputSearch_1 />
      <input
        type="text"
        name="text"
        class="input"
        placeholder="past address"
        onChange={handleChange}
      />
      <button class="Subscribe-btn">
        {/* <InputSearch_2 /> */}
        Search
      </button>
    </div>
  );
};

export default InputSearch;
