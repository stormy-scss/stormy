const path = require(`path`)
const fs = require("fs-extra")

const projectPath = path.resolve(__dirname, "..")
const srcFolder = path.join(projectPath, "src")
const distFolder = path.join(projectPath, "dist")

fs.emptyDirSync(distFolder)
fs.copy(srcFolder, distFolder, {recursive: true})
