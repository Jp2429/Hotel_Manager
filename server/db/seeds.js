use hotelManager
db.dropDatabase ()

db.bookings.insertMany([
    {
        guestName: "Jonathan",
        guestEmail: "jonstrandberg@code.ed",
        checkedIn: false
    },
    {
        guestName: "Victoria",
        guestEmail: "vic@code.ed",
        checkedIn: false
    },
    {
        guestName: "John",
        guestEmail: "john@code.ed",
        checkedIn: false
    }

])