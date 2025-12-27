import express from "express";


const app = express();

const port = 3000;





app.get ("/", (req, res ) => {

    const today = new Date("December 28, 2025 01:15:00");
    let day = today.getDate();


    let type = "a Weekday";
    let adv = "its a time for hardwork";

    if (day === 0 || day === 6 ) {
        type = "the Weekend";
        adv = "it's time to have fun ";
    }

    res.render ("index.ejs", {

        dayType : type,
        advice: adv,
    });
});






app.listen(port, ()=> {
    console.log(`Server running on port ${port}.`);
});