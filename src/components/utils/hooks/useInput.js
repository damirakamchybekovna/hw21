// castom  хук- озубуз тузгон хук кастомный хук деп аталат, биз кастомный хукту бир состояние кайра кайталанганда биз кастомный хук тузуп иштетсек болот

// import { useState } from "react"

// export const useInput = (validateState) => {
//     const [enteredValue, setEnteredValue] = useState('')
//     const [isTouched, setTouched] = useState(false);//тийдиби тийбедиби деген значения

//     const valueIsValid = validateState(enteredValue)//true false болгонун текшерет проверкада
//     const hasError = !valueIsValid && isTouched //бул жерде ошибка бар текшерет 

import { useState } from "react";

export const useInput = (validateState) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateState(enteredValue) // true || false
  const hasError = !valueIsValid && isTouched 

  const valueChangeHandler = (event) => {
      setEnteredValue(event.target.value)
  }

  const inputBlurHandler = (event) => {
      setIsTouched(true)
  }

  return {
      value: enteredValue,
      isValid: valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
  }

};