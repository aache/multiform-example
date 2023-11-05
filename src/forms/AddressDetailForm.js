function AddressDetailForm(){
    return (
        <><div class="container">
        <h1>Address</h1>
        <form class="border p-4">
          <div class="form-group">
            <label for="street">Street</label>
            <input type="text" class="form-control" id="street" placeholder="Enter your street" />
          </div>
          <div class="form-group">
            <label for="flatNo">Flat No</label>
            <input type="text" class="form-control" id="flatNo" placeholder="Enter your flat number" />
          </div>
          <div class="form-group">
            <label for="pincode">Pincode</label>
            <input type="text" class="form-control" id="pincode" placeholder="Enter your pincode" />
          </div>
          <div class="form-group">
            <label for="state">State</label>
            <input type="text" class="form-control" id="state" placeholder="Enter your state" />
          </div>
        </form>
      </div>
      
        </>
    )

}

export default AddressDetailForm;