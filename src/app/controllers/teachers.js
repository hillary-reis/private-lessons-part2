const { age, graduation, date } = require ('../../lib/utils');
const Teacher = require ('../models/Teacher');

module.exports = {
  index (req, res) {
    Teacher.all (function (teachers) {
      return res.render ('teachers/index', { teachers });
    });
  },
  create (req, res) {
    return res.render ('teachers/create');
  },
  post (req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send ('Please, fill all fields!!');
      };
    };

    Teacher.create (req.body, function (teacher) {
      return res.redirect (`/teachers/${teacher.id}`);
    });
  },
  show (req, res) {
    return res.render ("teachers/show");
  },
  edit (req, res) {
    return res.render ('teachers/edit');
  },
  put (req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send ('Please, fill all fields!!');
      };
    };

    return
    //return res.redirect(`/teachers/${ id }`);
  },
  delete (req, res) {
    return res.redirect ("/teachers");
  }
}