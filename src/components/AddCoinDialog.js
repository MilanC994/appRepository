import React from 'react'
import useAddCoinDialog from './Hooks/useAddCoinDialog'
import { Modal, Button, Form } from 'react-bootstrap'

const AddCoinDialog= ({ isDialogOpen, handleDialogClose }) => {
    const { 
        setValue, 
        setCount, 
        countInputError,
        valueInputError,
        disableSubmitButton,
        addNewCoin,
        handleAddCoinDialogClose
     } = useAddCoinDialog(handleDialogClose)
     const errorStyle = {
         color: "red"
     }
    return (
    <Modal dialogClassName="addCoinDialog" show={isDialogOpen} onHide={handleAddCoinDialogClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Add/Edit Coin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group>
                <Form.Label>Value<sup>*</sup></Form.Label>
                <Form.Control type="number" step={0.1} min={0.1} onChange={(e) => setValue(+e.target.value)} placeholder="Enter Value" />
                <p style={errorStyle}>{valueInputError}</p>
                <Form.Label>Count<sup>*</sup></Form.Label>
                <Form.Control type="number" min={1} onChange={(e) => setCount(+e.target.value)} placeholder="Enter Count" />
                <p style={errorStyle}>{countInputError}</p>
            </Form.Group>           
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddCoinDialogClose}>
            Close
          </Button>
          <Button variant="primary" disabled={disableSubmitButton} onClick={() =>addNewCoin()}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default AddCoinDialog
