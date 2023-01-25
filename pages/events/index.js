import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "./events-search";
import { Fragment } from "react";

function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <Fragment>
      <EventsSearch />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export default EventsPage;
