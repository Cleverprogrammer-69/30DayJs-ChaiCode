// Task 1
const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1 resolved after 2 seconds")
    }, 2000);
})
resolvedPromise
    .then((value)=>{
        console.log(value)
    })

// Task 2
const rejectedPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("Something went wrong while fetching data")
    }, 2000);
})
rejectedPromise
    .then((value)=>{
        console.log(value)
    })
    .catch((error)=>{
        console.log(error)
    })

// Task 3

function fetchData(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 1100);
  });
}
fetchData('Fetching Student data...')
  .then((message) => {
    console.log(message);
    return fetchData('Fetching Courses data...');
  })
  .then((message) => {
    console.log(message);
    return fetchData('Fetching Grades data...');
  })
  .then((message) => {
    console.log(message);
    return fetchData('All data fetched successfully!');
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error('An error occurred while fetching student data:', error);
  });

// Task 4

const PatientDetails = new Promise((resolve, reject) => {
  let patient = {
    patientId: 3,
    patient_name: "Yasir",
    diagnoses: "Fever"
  }
  setTimeout(() => {
    resolve({
      data: patient,
      message: "Success"
    })
  }, 500);
})

const fetchPatientDetails = async () => {
  const patient = await PatientDetails
  console.log(patient.data)
}
fetchPatientDetails()

// Task 5

const getUserById = (userId) => {
    return new Promise ((resolve, reject) => {
    const users = [
    {
      _id: 1,
      name: "John",
      email: "john783@gc.com",
    },
    {
      _id: 2,
      name: "Vladmir",
      email: "vlad1980gc.com",
    },
    {
      _id: 3,
      name: "Usman",
      email: "usman837@gc.com",
    },
  ];
  
    setTimeout(() => {
      const user = users.find(user => user._id === userId)
      if(user){
        resolve(user)
      }
      reject(`User not found by id: ${userId}`)
    }, 6000);
})}
const fetchUser = async (userId) => {
  try {
    const response = await getUserById(userId);
    console.log(response)
  } catch (error) {
    console.error("Something went wrong while fetching user :", error)
  }
}
fetchUser(4) // will be rejected because this id is invalid

// Task 6
const getTodos = async() => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  }).then(() => {
    return fetch("https://jsonplaceholder.typicode.com/todos/199");
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
}
getTodos();

// Task 7
const getComment = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/231")
    if(!response.ok){
      console.log("Error fetching the comment")
    }
    return response.json()
  } catch (error) {
    console.error("Error fetching comment: ", error)
    return null
  }
}
const displayComment = async () => {
  const comment = await getComment();
  if (comment) {
    console.log(comment);
  } else {
    console.log("No comment fetched");
  }
};

displayComment();

// Task 8


Promise.all([resolvedPromise, rejectedPromise, PatientDetails])
  .then((results) => {
    console.log("Promise.all response",results);
  })
  .catch((error) => {
    console.error("Promise.all error : ",error);
  });
// Task 9

Promise.race([resolvedPromise, rejectedPromise, PatientDetails])
  .then((results) => {
    console.log("Promise.race response",results);
  })
  .catch((error) => {
    console.error("Promise.race error : ", error);
  });
