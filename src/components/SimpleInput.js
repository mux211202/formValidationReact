import {useState, useEffect, useRef} from 'react';
const SimpleInput = (props) => {
	// const nameInputRef = useRef(); -- just for instance
	const [enteredName, setEnteredName] = useState('');
	const [enteredMail, setEnteredMail] = useState('');
	const [mailIsTouched, setMailIsTouched] = useState(false);
	const [nameIsTouched, setNameIsTouched] = useState(false);
	
	const nameIsValid = enteredName.trim() !== '';
	const mailIsValid = enteredMail.trim() !=='' && enteredMail.includes('@') && enteredMail.length > 4;
	const nameInputIsInvalid = !nameIsValid && nameIsTouched;
	const mailInputIsInvalid = !mailIsValid && mailIsTouched;
	let formIsValid = false;

	if(nameIsValid && mailIsValid) {
		formIsValid = true;
	} 
	
	const inputBlurHandler = event => {
		if(event.target.id === 'email'){
			setMailIsTouched(true);
		}
		if(event.target.id === 'name'){
			setNameIsTouched(true);
		}
		setNameIsTouched(true);
	}
	const inputChangeHandler = event => {
		if(event.target.id === 'email'){
			setEnteredMail(event.target.value);
		}
		if(event.target.id === 'name'){
			setEnteredName(event.target.value);
		}
	}
	const resetFormFunction = () => {
		setEnteredName("");
		setEnteredMail("")
		setNameIsTouched(false);
		setMailIsTouched(false);
	}
	const formSubmitionHandler = event =>{
		event.preventDefault();

		setNameIsTouched(true);
		
		if (!enteredName) {
			return;
		}

		console.log(enteredName);
		// console.log(nameInputRef.current.value); using refs(just for the example)
		
		resetFormFunction();
	}
	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
	const emailnputClasses = mailInputIsInvalid ? 'form-control invalid' : 'form-control';
	return (
		<form  onSubmit={formSubmitionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input 
				// ref={nameInputRef} 
				type='text' value={enteredName} 
				id='name'
				onBlur={inputBlurHandler} 
				onChange={inputChangeHandler}/>
				{nameInputIsInvalid && <p className = 'error-text'>Name must not be empty</p>}
			</div>
			<div className={emailnputClasses}>
				<label htmlFor='email'>Your Email</label>
				<input 
				// ref={nameInputRef} 
				type='text' value={enteredMail} 
				id='email'
				onBlur={inputBlurHandler} 
				onChange={inputChangeHandler}/>
				{mailInputIsInvalid && <p className = 'error-text'>Email is not valid</p>}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
