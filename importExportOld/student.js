// Import & Export Module - Common JS

const nm = "Sonam";

const marks = (math, sci) => {
 console.log(math + sci);
}
// module.exports = nm;
module.exports = { nm, marks };