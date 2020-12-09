import React from "react"
import Coin from "./Coin"
import CustomBadge from "./CustomBadge"
import useCoinsContainer from './Hooks/useCoinsContainer'
import Pay from "./Pay"

const CoinsContainer = () => {
  const {
    count,
    setCount,
    value,
    setValue,
    coins,
    setterButtonsStatus,
    toPay,
    outputString,
    payButtonStatus,
    coinIncrement,
    coinDecrement,
    calculate,
    setToPayAmount,
    addNewCoin,
    deleteCoin
  } = useCoinsContainer()
  return (
    <React.Fragment>
      <div>
        <table style={{ margin: "auto" }}>
          <tbody>
            {coins.map((coin) => (
              <Coin
                key={coin.value}
                disable={setterButtonsStatus}
                value={coin.value}
                decrement={coinDecrement}
                increment={coinIncrement}
                remove={deleteCoin}
                count={coin.count}
              />
            ))}
            </tbody>
        </table>
        <h2 className="text-primary">Add Coin</h2>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <td><CustomBadge ><h5>Value:</h5></CustomBadge></td>
              <td>
                <input 
                  type="number" 
                  value={value} 
                  className="form-control" 
                  name="value" step={0.1} 
                  onChange = {(e) => setValue(+e.target.value)} 
                />
              </td>
              <td><CustomBadge ><h5>Count:</h5></CustomBadge></td>
              <td>
                <input 
                  type="number" 
                  value={count} 
                  className="form-control" 
                  name="count" onChange = {(e) => setCount(+e.target.value)} 
                />
              </td>
              <td>
              <button
                className="btn-primary btn-success ml-2"  
                onClick={() => addNewCoin()}
              >
                <h5> Add Coin </h5>
              </button>
              </td>
              
            </tr>
          </tbody>
        </table>
        <button
          className="btn-primary btn-success"
          disabled={setterButtonsStatus}
          onClick={() => setToPayAmount()}
        >
          <h3> Generate Amount:</h3>
        </button>  
        <Pay
          toPay={toPay}
          disable={payButtonStatus}
          calculate={calculate}
        />
        {outputString &&
          <span className="badge m-2 badge-secondary">
            <h5>{outputString}</h5>
          </span>
        }
      </div>
    </React.Fragment>
  );

}

export default CoinsContainer