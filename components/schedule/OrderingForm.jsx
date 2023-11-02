import React from "react"
import styles from "../../styles/schedule/orderingForm.module.css"

const OrderingForm = ({ onClosePopupHandler }) => {
  return (
    <div className={styles.container}>
      <input type="text" id="name" name="name" placeholder="Name" required />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="E-mail"
        required
      />
      <input
        type="text"
        id="mobileNumber"
        name="mobileNumber"
        placeholder="Mobile Number"
        pattern="[0-9]{10}"
        title="Please enter a 10-digit mobile number"
      />
      <textarea type="text" id="address" name="address" placeholder="Address" />
      <button type="submit" value="Submit" onClick={onClosePopupHandler}>
        Submit
      </button>
    </div>
  )
}

export default OrderingForm
