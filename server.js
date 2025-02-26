const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Route to serve JSON data
app.get("/data", (req, res) => {
    // Read the JSON file
    fs.readFile("data.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).send({ error: "Failed to load data." });
        }

        // Parse and send the JSON data as response
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
