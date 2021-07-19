import { useHistory } from 'react-router-dom';
import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const history = useHistory();

  const addMeetupHanlder = (meetupData) => {
    fetch(
      'https://react-meetups-b4cd6-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHanlder} />
    </section>
  );
};

export default NewMeetupPage;
