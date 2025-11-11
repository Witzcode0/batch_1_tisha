import React, { useEffect, useState } from 'react'
import { createStudent, deleteStudent, getStudents, updateStudent } from '../api/studentAPI'

const initialForm = {
  id: "",
  name: "",
  age: ""
}

function StudentCRUD() {
    const [students, setStudents] = useState([])
    const [form, setForm] = useState(initialForm)
    const [isEdit, setIsEdit] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        loadStudents();

        
    }, [])

    const loadStudents = async () => {
        try {
            const data = await getStudents();
            setStudents(data)
        } catch (error) {
            console.error(error)
        }
    }

    // console.log(students, "------>>>>>")

    const handleChage = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        if(!form.id || !form.name || !form.age){
          setError("Please fill all fields");
          return
        }

        if (isEdit){
          await updateStudent(Number(form.id), String(form.name), Number(form.age));
        }else{
          await createStudent(Number(form.id), String(form.name), Number(form.age));
        }

        setForm(initialForm);
        setIsEdit(false)
        await loadStudents();
      }catch(err){
        setError(err.message);
      }
    }

    const handleEdit = (student) => {
      setForm({
        id: student.id,
        name: student.name,
        age:student.age
      });

      setIsEdit(true)
    } 

    const handleDelete = async (id) => {
      if(!window.confirm(`Are you sure you want to delete ID number: ${id} student? `)){
        return;
      }
      try{
        await deleteStudent(id);
        await loadStudents();
      }catch(err){
        setError(err.message);
      }

    }



    return (
          <div className="card p-4 shadow-sm border-0">
      <div className="row g-4">
        {/* 🧾 Add Student Form */}
        <div className="col-lg-4">
          <h5 className="mb-3 text-primary fw-bold">{isEdit ? "Edit Student" : "Add New Student" }</h5>
          {
            error && (
              <div className='alert alert-danger' role='alert'>
                {error}
              </div>
            )
          }
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">ID</label>
              <input type="text" className="form-control" name='id' onChange={handleChage} value={form.id} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" name='name' onChange={handleChage} value={form.name} required />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Age</label>
              <input type="number" className="form-control" name='age' onChange={handleChage} value={form.age} required />
            </div>

            <button className="btn btn-primary w-100">{isEdit ? "Edit Student" : "Add Student" }</button>
          </form>
        </div>

        {/* 🧮 Students Table */}
        <div className="col-lg-8">
          <h5 className="mb-3 text-success fw-bold">Students List</h5>

          <div className="table-responsive">
            <table className="table align-middle table-bordered table-striped shadow-sm">
              <thead className="table-primary text-center">
                <tr>
                  <th style={{ width: "10%" }}>ID</th>
                  <th style={{ width: "35%" }}>Name</th>
                  <th style={{ width: "15%" }}>Age</th>
                  <th style={{ width: "25%" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center text-muted py-3">
                      No students found
                    </td>
                  </tr>
                ) : (
                  students.map((s) => (
                    <tr key={s.id}>
                      <td className="text-center">{s.id}</td>
                      <td>{s.name}</td>
                      <td className="text-center">{s.age}</td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(s)}>
                          ✏️ Edit
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(s.id)}>🗑 Delete</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
}

export default StudentCRUD