import { useState } from "react";
import { useHistory } from "react-router-dom";

/*
Form to update color to list of colors
props: 
-addColor: function to update color
*/ 
function AddColorForm({addColor}) {
  
  const [formData, setFormData] = useState({ name:"", hex:"" });
  const history=useHistory();

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData( oldData => (
      {
        ...oldData,
        [name]: value,
      }
    ))
  }

  function handleSubmit(evt){
    evt.preventDefault();
    addColor(formData);
    history.push('/colors');
  }

  return (
    <div className="AddColorForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Color Name: </label>
        <input required="required" name="name" placeholder="Name" onChange={handleChange}/>
        <br/>
        <label htmlFor="hex">Color Code: </label>
        <input type="color" required="required" name="hex" onChange={handleChange}/>
        <br/>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default AddColorForm;