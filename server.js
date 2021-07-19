const express = require("express");
var faker = require("faker");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()

        }
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User())
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company())
})

app.get("/api/user/company", (req, res) => {
    res.json(new Company()),
        res.json(new User())
})

app.listen(port, () => console.log(`running on port ${port}!!!!`))