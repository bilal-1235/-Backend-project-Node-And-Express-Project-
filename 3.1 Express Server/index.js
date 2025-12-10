import express from "express";

const app = express();
const port = 3000;

app.get("/" , (req , res  )=> {
  res.send("<h1>Hello This is the Bilal  Backhand Project </h1>")
});


app.get("/aboutme" , (req , res  )=> {
  res.send("<h1>Hello This is the Bilal  Full Stack Developer Coming Soon  </h1>")
});


app.get("/Contact" , (req , res  )=> {
  res.send("<h1>Contact on the Linkdin </h1>")
});


app.get("/" , (req , res  )=> {
  res.send("<h1>Hello This is the Bilal  Backhand Project </h1>")
});

app.listen(port, () => {
  console.log(`Server Running  on port  ${port}.`);
})
