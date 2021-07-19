import React, { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

<<<<<<< HEAD
const NewMeetupForm = (props) => {
=======
const NewMeetupForm = () => {
>>>>>>> f3e2ede3f46a8f9293e81fa38ed3c5f00e4f9b1f
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

<<<<<<< HEAD
    props.onAddMeetup(meetupData);
  };

=======
    console.log(meetupData);
  };
>>>>>>> f3e2ede3f46a8f9293e81fa38ed3c5f00e4f9b1f
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            cols='30'
            rows='10'
            required
            ref={descriptionInputRef}
          ></textarea>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
