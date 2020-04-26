const path = require("path");

module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "../piblic/index.html"))
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(_dirname, "../piblic/stats.html"))
    })

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(_dirname, "../piblic/exercise.html"))
    })
}