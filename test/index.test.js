const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

const char = {
  id: 1,
  name: "Rick Sanchez",
  gender: "Male",
  species: "Human",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1"
    },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  status: "Alive"
}
const char2 = {
  id: 2,
  name: "Morty Smith",
  gender: "Male",
  species: "Human",
    origin: {
    name: "unknown",
    url: ""
    },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  status: "Alive"
}

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(Object.keys(response.body)).toEqual([
        "id",
        "name",
        "gender",
        "species",
        "origin",
        "image",
        "status",
      ]);
    });

    it("Si hay un error responde con status: 500", () => {
      return agent
       .get("/rickandmorty/character/0")
       .send()
       .then(response => expect(response.statusCode).toBe(500))
    })

    // it("Si hay un error responde con status: 500", async () => {
    //   const response = await agent.get("/rickandmorty/character/0");
    //   expect(response.statusCode).toBe(500);
    // });
  });

  describe("GET /rickandmorty/login", () => {
    it("Si la información de login es correcta responde access: true", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=tatoapuros@gmail.com&password=Dni3566753"
      );
      expect(response.body).toEqual({
        access: true,
      });
    });

    it("Si la información de login es incorrecta responde access: false", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=incorrecto@gmail.com&password=123456"
      );
      expect(response.body).toEqual({
        access: false,
      });
    });
  });

  describe('POST /rickandmorty/fav', () => {
    it('Lo que envíes por body debe ser devuelto en un arreglo', () => {
      return agent.post('/rickandmorty/fav', char)
      .send(char)
      .then(response => expect(response.body).toEqual([char]))
 
      
    });

    it('Si envias un nuevo elemento por body, devolver un arreglo que incluye un elemento enviado previamente', async () => {
      agent.post('/rickandmorty/fav',char2)
      .send(char2)
      .then(response => expect(response.body).toEqual([char,char2]))
    });
  });
  
  describe('DELETE /rickandmorty/fav/:id', () => {
    it('Si no hay un personaje con ese ID, devuelve un arreglo con los elementos sin modificar', async () => {
      const response = await agent.delete('/rickandmorty/fav/0')
      expect(response.body).toEqual([char,char2])
    })
    it('Si envias un id por params, elimina el elemento que corresponda', async () => {
      const response = await agent.delete('/rickandmorty/fav/1')
      console.log(response.body);
      expect(response.body).toEqual([char2])
    
    })
  })
});
