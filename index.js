if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const router = express.Router();

const routes = require("./routes");
router.use(routes)

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})