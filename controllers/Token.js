
const root = (req, res) => {
    res.json({Client_Id: process.env.API_KEY, Client_Secret: process.env.API_SECRET})
}

export { root }