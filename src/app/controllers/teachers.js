const { age, graduation, date } = require ('../../lib/utils');
const Teacher = require ('../models/Teacher');

module.exports = {
  index (req, res) {
    Teacher.all (function (teachers) {
 
      for (teacher of teachers ) {
        teacher.subjects_taught = teacher.subjects_taught.split(",");
      };
          
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
    Teacher.find(req.params.id, function (teacher) {
      if (!teacher) return res.send ("Teacher not found!");

      teacher.age = age (teacher.birth);
      teacher.graduation = graduation (teacher.education_level);
      //teacher.subjects_taught = teacher.subjects_taught.split(",");
      teacher.created_at = date(teacher.created_at).format;

      return res.render ("teachers/show", { teacher });
    })
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