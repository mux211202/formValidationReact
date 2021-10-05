import {useState, useEffect, useRef} from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = (props) => {
	// const nameInputRef = useRef(); -- just for instance
	const {
		enteredValue: enteredName, 
		hasError: nameHasError, 
		valueIsValid: nameIsValid,
		inputChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		resetInputFunction: resetNameInput
		} = useInput((value)=>value.trim() !== '');

	const {
		enteredValue: enteredMail, 
		hasError: mailHasError, 
		valueIsValid: mailIsValid,
		inputChangeHandler: mailChangeHandler,
		inputBlurHandler: mailBlurHandler,
		resetInputFunction: resetMailInput
		} = useInput((value)=>value.includes('@') && value.length > 1);
	
	
	
	
	let formIsValid = false;
	if(nameIsValid && mailIsValid) {
		formIsValid = true;
	} 
	
	const formSubmitionHandler = event =>{
		event.preventDefault();
		if (!enteredName) {
			return;
		}
		console.log(enteredName);
		// console.log(nameInputRef.current.value); using refs(just for the example)
		resetNameInput();
		resetMailInput();
	}

	const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
	const emailnputClasses = mailHasError ? 'form-control invalid' : 'form-control';
	
	return (
		<form  onSubmit={formSubmitionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input 
				// ref={nameInputRef} 
				type='text' value={enteredName} 
				id='name'
				onBlur={nameBlurHandler} 
				onChange={nameChangeHandler}/>
				{nameHasError && <p className = 'error-text'>Name must not be empty</p>}
			</div>
			<div className={emailnputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input 
				// ref={nameInputRef} 
				type='text' value={enteredMail} 
				id='email'
				onBlur={mailBlurHandler} 
				onChange={mailChangeHandler}/>
				{mailHasError && <p className = 'error-text'>Email is not valid</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
