import {useState, useEffect} from 'react' 
import { getBookings, deleteBooking, postBooking } from "./components/BookingsService";
import BookingsGrid from './components/BookingsGrid';
import BookingsForm from './components/BookingsForm';


function App() {

  const [bookings, setBookings] = useState ([])

  useEffect(() => {
    getBookings()
    .then((allBookings) => {
      setBookings(allBookings)
    })
  }, [])


  const removeBooking = (id) => {
    deleteBooking (id)
    .then(()=>{
      setBookings(bookings.filter(booking => booking._id !== id))
    })
  }

  const addBooking = (booking) => {
    postBooking (booking)
    .then(id =>{ 
      const bookingWithId = {...booking, _id: id }
      const newBookings = [...bookings, bookingWithId]
      setBookings(newBookings)
    }
    )
  }


  return (
    
    <section>
      <div className='displayForm'>
        <BookingsForm addBooking={addBooking}/>
      </div>
      <div className="displayBookings">
        <BookingsGrid bookings={bookings} removeBooking={removeBooking}/>
      </div>
    </section>
  );
}

export default App;
