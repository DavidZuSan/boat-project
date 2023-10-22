import { createServer, Model } from "miragejs";

type Boat = {
  id: number;
  name: string;
};

const boats: Boat[] = [
  { id: 1, name: "Boat A" },
  { id: 2, name: "Boat B" },
  { id: 3, name: "Boat C" },
  { id: 4, name: "Boat D" },
];

export function makeServer() {
  const server = createServer({
    models: {
      boat: Model.extend({}),
    },

    fixtures: {
      boats: boats,
    },

    seeds(server) {
      server.loadFixtures();
    },

    routes() {
      this.logging = true;
      this.namespace = "api";

      this.get("/boats", (schema) => {
        return schema.db.boats;
      });
    },
  });

  return server;
}
