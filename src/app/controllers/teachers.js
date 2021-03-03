const { age, graduation, date } = require ('../../lib/utils');
const db = require ('../../config/db');

module.exports = {
  index (req, res) {
    db.query(`SELECT * FROM teachers`, function (err, results) {
      if (err) return res.send ("Database Error!");

      return res.render ("teachers/index", { teachers: results.rows });
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

    const query = `
      INSERT INTO teachers (
        avatar_url,
        name,
        birth_date,
        education_level,
        class_type,
        subjects_taught,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `

    const values = [
      req.body.avatar_url,
      req.body.name,
      date(req.body.birth_date).iso,
      req.body.education_level,
      req.body.class_type,
      req.body.subjects_taught,
      date(Date.now()).iso,
    ];

    db.query(query, values, function (err, results) {
      if (err) return res.send ("Database Error!");

      return res.redirect (`/teachers/${results.rows[0].id}`);
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