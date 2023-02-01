import { useState } from "react";

const BookingsForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({
        guestName: "",
        guestEmail: "",
        checkedIn: false    
    })

    const onChange = (evt) => {
        const newFormData = Object.assign({}, formData)
        newFormData[evt.target.name] = evt.target.value
        setFormData(newFormData)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        addBooking(formData)
        setFormData({
            guestName: "",
            guestEmail: "",
            checkedIn: false
        })

    }


    return (
        <form className="form" onSubmit={onSubmit}>
            <input onChange={onChange} type="text" id="guestName" name="guestName" value={formData.guestName}/> 
            <input onChange={onChange} type="text" id="guestEmail" name="guestEmail" value={formData.guestEmail}/>
            <input type="submit" value="Save"/> 
        </form>
    )

}

export default BookingsForm