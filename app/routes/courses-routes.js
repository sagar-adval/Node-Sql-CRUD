    const courses = require("../controllers/courses-controller");
  
    var router = require("express").Router();

    router.get('/', courses.getCoursesList);
    
    module.exports = router;
  