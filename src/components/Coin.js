import React from 'react'
import { Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap'


const  Coin= ({value, count, increment, decrement, disable, remove}) => {
  const addRemoveButtonsStyle = {
    background: "transparent",
    fontSize: "30px"
  }
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Remove Coin
    </Tooltip>
  );
  

  return (
    <Card id={value}  className="coinCard border-secondary" style={{ background:"transparent" }}>
      <div className="cardImageDiv" style={{ position:"relative" }}>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <button
            onClick={() => remove(value) }
            className="customBtn"
            style={{ background:"transparent", width:"25px", height:"25px", color:"white", position:"absolute", right:"0px", top:"0px"}}
          >
            X
          </button>
        </OverlayTrigger>
        <p className="h1 coinValue" >{value}</p>
      </div>
      <Card.Body style={{ margin:"auto", display:"flex" }}>
        <Button
          className="customBtn"
          style={addRemoveButtonsStyle}
          variant="primary"
          disabled={disable}
          onClick={() => increment(value)}
        >
          +
        </Button>
        <div className="coinCount" >
          <h2>{count}</h2>
        </div>
        <Button 
          className="customBtn" 
          style={addRemoveButtonsStyle} 
          variant="danger" 
          disabled={disable} 
          onClick={() => decrement(value)} 
        >
          -
        </Button>
    </Card.Body>
  </Card>
  );
}

export default Coin;
