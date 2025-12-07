import express from 'express'
import { Create_student, DeleteStudent, filterByDepartment, GetAllStudents, singleStudent, sortCGPA, upDateStudent } from '../controller/studentController.js'
const router=express.Router()

router.post('/create',Create_student)

router.get('/getAll',GetAllStudents)

router.get('/single/:id',singleStudent)

router.put('/update/:id',upDateStudent)
router.delete('/delete/:id',DeleteStudent)
router.get('/department/:department',filterByDepartment)
router.get('/sort',sortCGPA)

export default router