import React, { useRef, useState } from "react"
import styles from "../../styles/schedule/orderingForm.module.css"
import Swal from "sweetalert2"

const OrderingForm = ({ onClosePopupHandler }) => {
  const nameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const mobileNumberRef = useRef(null)
  const addressRef = useRef(null)

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    mobileNumber: false,
  })

  const validateMobileNumber = (number) => {
    // Validate a 11-digit mobile number
    const mobileNumberRegex = /^[0-9]{11}$/
    return mobileNumberRegex.test(number)
  }

  const handleInputChange = (ref, fieldRef) => {
    ref.current.style.border = ""
    setValidationErrors({ ...validationErrors, [fieldRef]: false })
  }

  const validateField = (field) => {
    const fieldValue = field.current.value
    const isValid =
      fieldValue &&
      (field === mobileNumberRef ? validateMobileNumber(fieldValue) : true)

    if (!isValid) {
      field.current.style.border = "1px solid red"
      setValidationErrors({ ...validationErrors, [field.current.name]: true })
    }

    return isValid
  }

  const alert = () => {
    const requiredFields = [nameRef, lastNameRef, emailRef, mobileNumberRef]
    const hasError = requiredFields.some((field) => !validateField(field))

    if (!hasError) {
      Swal.fire("dank je", "Formulier succesvol ingediend!", "success")
      onClosePopupHandler()
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        ref={nameRef}
        onChange={() => handleInputChange(nameRef, "name")}
        style={{ border: validationErrors.name ? "1px solid red" : "" }}
        required
      />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        ref={lastNameRef}
        required
        onChange={() => handleInputChange(lastNameRef, "lastName")}
        style={{ border: validationErrors.lastName ? "1px solid red" : "" }}
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="E-mail"
        ref={emailRef}
        required
        onChange={() => handleInputChange(emailRef, "email")}
        style={{ border: validationErrors.email ? "1px solid red" : "" }}
      />
      <input
        type="text"
        id="mobileNumber"
        name="mobileNumber"
        placeholder="Mobile Number"
        pattern="[0-9]{10}"
        title="Please enter a 10-digit mobile number"
        ref={mobileNumberRef}
        onChange={() => handleInputChange(mobileNumberRef, "mobileNumber")}
        style={{ borde: validationErrors.mobileNumber ? " 1px solid red" : "" }}
      />
      <textarea
        type="text"
        id="address"
        name="address"
        placeholder="Address"
        ref={addressRef}
      />
      <button type="submit" value="Submit" onClick={alert}>
        Submit
      </button>
    </div>
  )
}

export default OrderingForm
