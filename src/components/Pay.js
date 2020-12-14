import React,{ useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import usePay from './Hooks/usePay'

const Pay = ({ toPay, disable, calculate }) => {
    const {
      payed,
      setPayed,
      payedError,
      onPayClick,
      payButtonDisabled
    }
    = usePay(toPay, calculate)

    const inputAmountStyle = { 
                              width:"25%",
                              margin: "auto",
                              background:"transparent",
                              color:"white"
                            }
    const payButtonStyle = {
                            fontSize:"30px",
                            color:"white",
                            background:"transparent",
                            marginBottom:"10px"
                          }
    return (         
      <Form>
        <Form.Group style={{height:"110px"}}> 
          <Form.Label><h4 style={{color:"white"}}>Required to Pay: { toPay }</h4></Form.Label>
          <Form.Control 
            style={inputAmountStyle} 
            type="number" 
            step={0.1} 
            value={payed} 
            onChange={(e) => setPayed(+e.target.value)}  
            disabled={disable}
            min={0.1}  
            placeholder='Enter amount'
          />
          <p style= {{ color: "red" }}>{payedError}</p>
        </Form.Group>  
        <Button 
          style={payButtonStyle} 
          variant="success" 
          disabled={ disable || payButtonDisabled } 
          onClick={()=> onPayClick(payed)}
        >
            Pay
        </Button>
      </Form>
    )
 }
export default Pay