const { age, graduation, date } = require ('../../lib/utils');

module.exports = {
  index (req, res) {
    return res.render ("teachers/index");
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
  
    let { avatar_url, name, birth_date, education_level, class_type, subjects_taught } = req.body;
    
    return
    //return res.redirect (`/teachers${id}`);
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