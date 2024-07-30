const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class CoursesController {
  //[GET] /course/:slug
  show(req, res) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  //[GET] /course/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //[POST] /course/store
  store(req, res, next) {
    const formData = req.body;
    const course = new Course(formData);
    course.save().then(() => res.redirect("/"));
  }
}
module.exports = new CoursesController();
