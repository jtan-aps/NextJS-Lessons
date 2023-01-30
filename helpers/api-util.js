export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-8c50f-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const eventsData = [];

  for (const key in data) {
    if (data[key].isFeatured) {
      eventsData.push({
        id: key,
        ...data[key] // Grabs all data from "data" with a given key.
      });
    }
  }

  return eventsData;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
