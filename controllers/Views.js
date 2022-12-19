const root = (req, res) => {
    res.sendFile('/views/index.html', {
        root: `${__dirname}/../`
    });
};

const test = (req, res) => res.json({status: 200, message: "Views test route successful.."});

export { test, root }