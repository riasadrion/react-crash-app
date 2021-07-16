import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) { 
    const [ modalIsOpen, setModalIsOpen ] = useState(false)

    function deleteHandler(){
        setModalIsOpen(true)
    }
    function closeModalHandler(){
        setModalIsOpen(false)
    }

    return (
        <div className="col-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.text}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-warning float-right" onClick={deleteHandler}>Delete</button>
                </div>
            </div>
            {modalIsOpen ? <Modal onCancel={closeModalHandler} /> : null}
            {modalIsOpen ? <Backdrop /> : null}
            <Backdrop />
        </div>
    ) 
} 
export default Todo