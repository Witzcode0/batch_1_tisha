import React, { useEffect, useState } from 'react'
import { getStudents } from '../api/studentAPI'

function StudentCRUD() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        loadStudents();

        
    }, [])

    const loadStudents = async () => {
        try {
            const data = getStudents();
            setStudents(data)
        } catch (error) {
            console.error(error)
        }
    }

    console.log(students, "------>>>>>")



    return (
        <div className='card p-4'>
            <div className="row">
                <div className="col-lg-5">
                    <form action="">
                        <div className="mb-2">
                            <label htmlFor="">ID</label>
                            <input type="text" className='form-control' required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Name</label>
                            <input type="text" className='form-control' required />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Age</label>
                            <input type="text" className='form-control' required />
                        </div>

                        <div className="d-flex gap-2">
                            <button className='btn btn-primary'>Add Student</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-7">
                    <h5>Students List</h5>
                    <table className='table-responsive'>
                        <thead className='table table-light'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        No students found
                                    </td>
                                </tr>
                            ) : (
                                students.map((s) => (
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{s.name}</td>
                                        <td>{s.age}</td>
                                        <td>
                                            <button className="btn btn-sm btn-warning me-2">
                                                Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default StudentCRUD