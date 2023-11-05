import { useEffect, useState } from 'react';
import './App.css';
import AddressDetailForm from './forms/AddressDetailForm';
import ProfessionalDetailsForm from './forms/ProfessionalDetailsForm';
import UserDetailForm from './forms/UserDetailForm';
import useMultiform from './hooks/MultiformHook';

function App() {
  const [formdata,setFormData] = useState({
    firstName : '',
    lastName : '',
    street : '',
    flatNo : '',
    pincode : '',
    state :'',
    linkedIn : ''
  });

  useEffect(()=> {
    console.log(formdata);
  });

  const multiform = useMultiform(
    <UserDetailForm formData={formdata} setFormData={setFormData} />,
    <AddressDetailForm formData={formdata} setFormData={setFormData} />,
    <ProfessionalDetailsForm formData={formdata} setFormData={setFormData} />
  );
  return (
    <>
    <div className='form-container'>
      {multiform.currentPage}
    </div>
    <div class="text-center p-3">
        <button className='btn btn-primary m-2' onClick={multiform.next}>Next</button>
        <button className='btn btn-primary' onClick={multiform.previous}>Previous</button>
    </div>
    </>
  );
}

export default App;
