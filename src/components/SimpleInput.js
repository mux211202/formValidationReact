import {useState, useRef} from 'react';
const SimpleInput = (props) => {
	// const nameInputRef = useRef(); -- just for instance
	const [enteredName, setEnteredName] = useState('');
	const [nameIsTouched, setNameIsTouched] = useState(false);

	const nameIsValid = enteredName.trim() !== '';
	const nameInputBlurHandler = event => {
		setNameIsTouched(true);
	}
	const nameInputChangeHandler = event => {
		setEnteredName(event.target.value);
	}
	const formSubmitionHandler = event =>{
		event.preventDefault();

		setNameIsTouched(true);
		
		if (!enteredName) {
			return;
		}

		console.log(enteredName);
		// console.log(nameInputRef.current.value); using refs(just for the example)
		
		setEnteredName("");
		setNameIsTouched(false);
		
	}
	const nameInputIsInvalid = !nameIsValid && nameIsTouched;
	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
	return (
		<form  onSubmit={formSubmitionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input 
				// ref={nameInputRef} 
				type='text' value={enteredName} 
				id='name'
				onBlur={nameInputBlurHandler} 
				onChange={nameInputChangeHandler}/>
				{nameInputIsInvalid && <p className = 'error-text'>Name must not be empty</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
