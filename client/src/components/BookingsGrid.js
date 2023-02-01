import DisplayBooking from "./DisplayBooking"

const BookingsGrid = ({bookings, removeBooking}) => {
    const bookingsList = bookings.map((booking) => {
        return <DisplayBooking booking={booking} key={booking._id} removeBooking={removeBooking}/> 
    })


    return (
        <ul>
        {bookingsList}
        </ul>
    )

}

export default BookingsGrid