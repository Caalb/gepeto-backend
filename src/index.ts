import * as express from "express";
import { Request, Response } from "express";

const app = express();
class Person {
  sayHello() {
    return "Hello World";
  }
}
app.get("/", (req: Request, res: Response) => {
  res.send(new Person().sayHello());
});

app.listen(3000, () => console.log("Server running on port 3000"));

export default Person;
