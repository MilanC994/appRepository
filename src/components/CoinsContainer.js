import React from "react"
import Coin from "./Coin"
import AddCoinDialog from './AddCoinDialog'
import useCoinsContainer from './Hooks/useCoinsContainer'
import Pay from "./Pay"
import { transparentButton } from './constants'
import { Button } from 'react-bootstrap'

const CoinsContainer = () => {
  const {
    isDialogOpen,
    toggleAddCoinDialog,
    coins,
    setterButtonsStatus,
    toPay,
    outputString,
    payButtonStatus,
    coinIncrement,
    coinDecrement,
    calculate,
    setToPayAmount,
    deleteCoin
  } = useCoinsContainer()

  return (
    <React.Fragment>
        <div className="coinsContainer" >
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
        </div>
        <Button onClick={toggleAddCoinDialog} style={ transparentButton }>Add Coin</Button>
        <AddCoinDialog isDialogOpen={isDialogOpen} handleDialogClose={toggleAddCoinDialog} />
        <Button
          style={transparentButton} 
          className="btn-warning"
          disabled={setterButtonsStatus}
          onClick={() => setToPayAmount()}
        >
          Generate Amount
        </Button>
        <Pay
          toPay={toPay}
          disable={payButtonStatus}
          calculate={calculate}
        />
        {outputString && <h5>{outputString}</h5>}
    </React.Fragment>
  );

}

export default CoinsContainer