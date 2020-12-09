import React from "react";
import CustomBadge from "./CustomBadge"


const  Coin= ({value, count, increment, decrement, disable, remove}) => {
  return (
    <tr>
      <td>
        <CustomBadge>
          <h5>Value:{value}</h5>
        </CustomBadge>
      </td>
      <td>
        <CustomBadge>
          <h5>Count:{count}</h5>
        </CustomBadge>
      </td>
      <td>
        <button
          disabled={disable}
          onClick={() => increment(value)}
          className="customBtn btn btn-secondary m-2"
        >
          <h3>+</h3>
        </button>
      </td>
      <td>
        <button
          disabled={disable}
          onClick={() => decrement(value)}
          className="customBtn btn btn-danger  m-2"
        >
          <h3>-</h3>
        </button>
      </td>
      <td>
        <button
          disabled={disable}
          onClick={() => remove(value)}
          className="btn btn-danger  m-2"
        >
          <h5>Remove</h5>
        </button>
      </td>
    </tr>
  );
}

export default Coin;
