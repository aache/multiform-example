function UserDetailForm({ formData, setFormData }) {

    const handleFirstNameChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, firstName: e.target.value });
      };
    
      const handleLastNameChange = (e) => {
        setFormData({ ...formData, lastName: e.target.value });
      };
    return (
    <>
<div className="container">
  <h1>User Details</h1>
  <form className="border p-4">
    <div className="form-group">
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" className="form-control" id="firstName" placeholder="Enter your first name" onChange={handleFirstNameChange}/>
    </div>
    <div className="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" className="form-control" id="lastName" placeholder="Enter your last name" onChange={handleLastNameChange} />
    </div>
  </form>
</div>
    </>
    );
}

export default UserDetailForm;