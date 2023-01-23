import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Maximillian",
    },
    {
      id: "gabby",
      name: "Gabby",
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[clientid]",
                query: {
                  clientid: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
