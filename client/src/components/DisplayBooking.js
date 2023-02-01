

const DisplayBooking = ({booking, removeBooking}) => {
    
    const handleDelete = () => {
        removeBooking(booking._id)
    }

    
    
    return (
        <li> 
            <p>Customer Name: {booking.guestName}</p>
            <p>Customer Email: {booking.guestEmail}</p>
            {booking.checkedIn ? <p>Guest is checked in</p>: <p>Guest is not checked in</p>}
            <button onClick={handleDelete}>Delete</button>
        </li>

    )

}

export default DisplayBooking