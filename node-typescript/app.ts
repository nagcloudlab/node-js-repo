import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get("/hello", (req: Request, res: Response) => {

})

app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});