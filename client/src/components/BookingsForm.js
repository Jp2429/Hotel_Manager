import { useState } from "react";

const BookingsForm = ({addBooking}) => {
    
    const [formData, setFormData] = useState({
        guestName: "",
        guestEmail: "",
        checkedIn: false    
    })
    const [selectStatus,setStatus]=useState("")
    


    const onChange = (evt) => {
        const newFormData = Object.assign({}, formData)
        newFormData[evt.target.name] = evt.target.value
        setFormData(newFormData)
    }
    const onSelectChange =(evt)=>{
        let newCheckedIn=false
        const newFormData = Object.assign({}, formData)
        if(evt.target.value==="true"){
            newCheckedIn=true
            newFormData[evt.target.name] = newCheckedIn
            setStatus('true')
            setFormData(newFormData)
    
        }
        else if(evt.target.value==="false"){
            newCheckedIn=false
            newFormData[evt.target.name] = newCheckedIn
            setStatus('false')
            setFormData(newFormData)
    
        }
        else{
            return
        }

    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        console.log(formData)
        if(formData.guestName!=="" && formData.guestEmail!=="" && selectStatus!==""){
            addBooking(formData)
        }else{
            alert("Please fill in all the fields")
        }
        
        setFormData({
            guestName: "",
            guestEmail: ""
            // checkedIn: false
        })
        setStatus("")

    }


    return (
        <form className="form" onSubmit={onSubmit}>
            <input onChange={onChange} type="text" id="guestName" name="guestName" value={formData.guestName}/> 
            <input onChange={onChange} type="text" id="guestEmail" name="guestEmail" value={formData.guestEmail}/>
            <select onChange={onSelectChange} name="checkedIn" value={selectStatus}>
                <option value="" selected disabled>Is the guest checked in?</option>
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <input type="submit" value="Save"/> 
        </form>
    )

}

export default BookingsForm