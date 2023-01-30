import Link from "next/link";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  //const featuredEvents = getFeaturedEvents();

  const { featuredEvents } = props;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  // Before Video
  // const response = await fetch(
  //   "https://nextjs-course-8c50f-default-rtdb.firebaseio.com/events.json"
  // );

  // const data = await response.json();

  // const eventsData = [];

  // for (const key in data) {
  //   if (data[key].isFeatured) {
  //     eventsData.push({
  //       id: key,
  //       title: data[key].title,
  //       description: data[key].description,
  //       location: data[key].location,
  //       date: data[key].date,
  //       image: data[key].image,
  //       isFeatured: data[key].isFeatured,
  //     });
  //   }
  // }

  const eventsData = await getFeaturedEvents();

  return {
    props: {
      featuredEvents: eventsData,
    },
    revalidate: 1800
  };
}
