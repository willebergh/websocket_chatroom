const express = require("express");
const app = express();

app.use(require("./routes"))

const PORT = 3000 | process.env.PORT;
app.listen(PORT, () => {
    console.log(`server started on port: ${PORT}.`)
})