const { age, graduation, date } = require ('../../lib/utils');

module.exports = {
  index (req, res) {
    return res.render ("students/index");
  },
  create (req, res) {
    return res.render ('students/create');
  },
  post (req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send ('Please, fill all fields!!');
      };
    };

    return
  
    //return res.redirect (`/students/${id}`);
  },
  show (req, res) {
    return res.render ("students/show");
  },
  edit (req, res) {
    return res.render ('students/edit');
  },
  put (req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send ('Please, fill all fields!!');
      };
    };

    return
    //return res.redirect(`/students/${ id }`);
  },
  delete (req, res) {
    return res.redirect ("/students");
  },
}