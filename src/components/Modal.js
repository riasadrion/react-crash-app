function Modal(props) {
    return (
        <div>
            <h1>Are you sure?</h1>
            <button>Confirm</button>
            <button onClick={props.onCancel}>Cancel</button>
        </div>
    )
}

export default Modal
