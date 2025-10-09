import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { eventsData } from '../data/MockData';

const Calendar = () => {
  const [events, setEvents] = useState(eventsData);

  const handleDateClick = (arg) => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { title, start: arg.dateStr, id: Date.now().toString() }]);
    }
  };

  const handleEventClick = (arg) => {
    if (window.confirm(`Delete event '${arg.event.title}'?`)) {
      arg.event.remove();
      setEvents(events.filter((event) => event.id !== arg.event.id));
    }
  };

  return (
    <div className="page-content">
      <h1 className="calendar-heading">Calendar</h1>

      <button
        onClick={() => handleDateClick({ dateStr: new Date().toISOString().split('T')[0] })}
        className="add-event-button"
      >
        Add New Event
      </button>

      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
          height="auto"
        />
      </div>

      {/* Upcoming Events List */}
      <div className="event-list">
        <h3>Upcoming Events</h3>
        <ul>
          {events
            .filter(event => new Date(event.start) >= new Date())
            .map(event => (
              <li key={event.id}>
                {event.title} - {new Date(event.start).toLocaleDateString()}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;