module.exports = {
  newUser: (req, res, next) => {
    const db = req.app.get("db");
    const { firstname, lastname, password } = req.body;
    db.new_user([firstname, lastname, password])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
  }
};
