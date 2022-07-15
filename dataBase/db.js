const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://" + process.env.DB_USER_PASS + "@blind-testdual.yncvp.mongodb.net/blind-test-dual",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}
)

.then(() => console.log('connected to MongoDb'))
.catch((err) => console.log("failed", err))