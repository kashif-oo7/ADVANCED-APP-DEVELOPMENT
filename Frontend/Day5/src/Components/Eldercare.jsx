import React, { useState } from 'react';
import '../css/eldercare.css';

function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='Miller'>
      <h1 style={{fontSize:"70px",marginTop:"500px"}}>Appointment Booking</h1>
    <div className='Meet'>
      <div className='about1'>


- Welcome to our appointment booking service!
<br></br>
<br></br>
- Easily schedule appointments online at your convenience.
<br></br>
<br></br>
- We offer a wide range of services to cater to various needs.
<br></br>
<br></br>
- Booking appointments is quick and simple.
<br></br>
<br></br>
- Tailor appointments to suit your schedule and preferences.
<br></br>
<br></br>
- Rest assured, your information is safe and secure with us.
<br></br>
<br></br>
- Receive prompt confirmation of your appointment via email or text.
<br></br>
<br></br>
- Get timely reminders about your upcoming appointments to stay organized.
<br></br>
<br></br>
- Enjoy 24/7 access to our booking platform.
<br></br>
<br></br>

      </div>
      <div className='No'>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label>PhoneNumber:</label>
        <input
          type="number"
          name="PhoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <label> preferedDate:</label>
        <input
          type="date"
          name=" preferredDate"
          value={formData. preferredDate}
          onChange={handleInputChange}
          required
        />
        <label> preferedTime:</label>
        <input
          type="time"
          name=" preferredTime"
          value={formData. preferredTime}
          onChange={handleInputChange}
          required
        />
        <label> additionalInfo:</label>
        <input
          type="text"
          name=" additionalInfo"
          value={formData. additionalInfo}
          onChange={handleInputChange}
          required
        />
        {/* Add similar input fields for email, phone number, preferred date, preferred time, and additional info */}
        <button type="submit">Submit</button>
      </form>
      
      <p>Phone: <a href="tel:+19787484733">978-748-4733</a></p>
      <p>Email: <a href="mailto:your@email.com">aramseivom@email.com</a></p>
      <p>Address: 12, Purasaiakam Street, Chennai, Tamilnadu, 600028</p>
    </div>
    </div>
    </div>
  );
}

export default AppointmentPage;
