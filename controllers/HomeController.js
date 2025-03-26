const index = (req, res) => {
  res.send("Welcome to the index page!");
};
const about = (req, res) => {
  res.send("Welcome to the about page!");
};
const contact = (req, res) => {
  res.send("Welcome to the contact page!");
};
const professional = (req, res) => {
    res.send();
};

module.exports = { index, about, contact, professional };
