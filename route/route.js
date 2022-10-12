const route =require('express').Router()

const taskControllers = require('../controlller/taskcontroller')

route.get(`/` , taskControllers.index)


route.get(`/create` , taskControllers.new)

route.get(`/edit/:id` , taskControllers.edit)


module.exports = route