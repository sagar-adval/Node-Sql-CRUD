const db = require('../../models');

exports.getCoursesList = async (req, res) => {
    try{
        const list = [
            {
                    tutor: 'Sagar',
                    course: 'Node.js',
                    description: 'asdasdasd'
                },
                {
                    tutor: 'Shivam',
                    course: 'Sequelize',
                    description: 'asdasdasd'
                }
            ]
            if(!list){
                throw {statusCode: 404, status: false, message: 'No courses found.'}
            }
            return res.status(200).send({status: true, data: list})
    }catch(error){
        return res.status(error.statusCode || 500).send(error);
    }
}
