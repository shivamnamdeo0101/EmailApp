const {google} = require("googleapis")

const keyFile = "";
const scopes = [
    "https://www.googleapis.com/auth/contacts"
]

const run = async ()=>{
    const {people} = google.people({
        version:"v1",
        auth:await google.auth.getClient({

        })
    })
}