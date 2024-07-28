const Employees = [
  {
    _id: "100",
    name: "Jason",
    designation: "Senior Sales Manager",
    department: "Sales & Marketing",
  },
  {
    _id: "101",
    name: "Millan",
    designation: "Production Manager",
    department: "Production",
  },
  {
    _id: "103",
    name: "Pedro",
    designation: "Senior Backend Engineer",
    department: "Production",
  },
  {
    _id: "104",
    name: "Faizan",
    designation: "Accounts Manager",
    department: "Finance",
  },
];
export const getAllEmployees = () => {
    return Employees
}

export const getEmployeeById = (id) => {
    const employeeFound = Employees.find(emp => emp._id == id)
    if(!employeeFound){
        throw new Error(`Employee not found by id: ${id}.` )
    }
    return employeeFound
}

export const createEmployee = (data) => {
  if(Object.values(data).some(field => field?.trim() === "")){
    throw new Error("All fields are required.")
  }
  Employees.push(data)
  return Employees.slice(-1)
}