const fs = require("fs");

module.exports = {
  entry: {
    ...buildEntries("./lambdas/notes"),
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/artifacts",
    libraryTarget: "commonjs",
  },
  target: "node",
  mode: "production",
  optimization: {
    minimize: false,
  },
};

function buildEntries(path) {
  const files = fs.readdirSync(path) || [];
  return files?.reduce((accumulator, currentValue) => {
    const name = currentValue?.split(".")?.[0];
    if (!name) return accumulator;
    return { ...accumulator, [name]: `${path}/${currentValue}` };
  }, {});
}
