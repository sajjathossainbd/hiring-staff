import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '453731011789-j65a46fdk0346igpjrdbdo7mh79tl763.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBZVQQRxvWZxpMzSARe6OYL4GaTVqFqmRM';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

function Meet() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsSignedIn);
      });
    };

    gapi.load('client:auth2', initClient);
  }, []);

  const handleSignIn = () => {
    gapi.auth2.getAuthInstance().signIn({
      redirect_uri: 'http://localhost:5173/dashboard/meet'
    });
  };
  const handleSignOut = () => gapi.auth2.getAuthInstance().signOut();

  const createMeeting = async () => {
    const event = {
      summary: 'Google Meet with Client',
      description: 'Meeting to discuss project updates',
      start: {
        dateTime: '2024-10-26T19:00:00+06:00', // Example time
        timeZone: 'Asia/Dhaka',
      },
      end: {
        dateTime: '2024-10-26T20:00:00+06:00',
        timeZone: 'Asia/Dhaka',
      },
      conferenceData: {
        createRequest: { requestId: 'meet123' },
      },
      attendees: [{ email: 'mdkawserferdoussafi@gmail.com' }],
    };

    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
        conferenceDataVersion: 1, // Required for Google Meet
      });
      alert(`Meeting created: ${response.result.hangoutLink}`);
    } catch (error) {
      console.error('Error creating meeting:', error);
    }
  };

  const listEvents = async () => {
    const response = await gapi.client.calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: 'startTime',
    });
    setEvents(response.result.items);
  };

  return (
    <div className="App">
      <h1>Google Meet & Calendar Integration</h1>
      {isSignedIn ? (
        <>
          <button onClick={handleSignOut}>Sign Out</button>
          <button onClick={createMeeting}>Create Google Meet</button>
          <button onClick={listEvents}>List Upcoming Events</button>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                {event.summary} — <a href={event.hangoutLink}>Join Meeting</a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <button onClick={handleSignIn}>Sign In with Google</button>
      )}
    </div>
  );
}

export default Meet;
