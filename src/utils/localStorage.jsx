// localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        TaskTitle: "Finalize Project Proposal",
        TaskDescription: "Prepare and finalize the proposal for the upcoming client project.",
        TaskDate: "2025-01-21",
        category: "Project Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Attend Safety Training",
        TaskDescription: "Participate in the company’s mandatory safety training session.",
        TaskDate: "2025-01-23",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        TaskTitle: "Update CRM Records",
        TaskDescription: "Ensure all customer records in the CRM are accurate and up to date.",
        TaskDate: "2025-01-25",
        category: "Customer Relations",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Riya",
    email: "e2@e.com",
    password: "123",
    taskNumbers: {
      total: 4,
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        TaskTitle: "Organize Team Building Activity",
        TaskDescription: "Plan and organize a team-building activity for the department.",
        TaskDate: "2025-01-22",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Send Weekly Status Update",
        TaskDescription: "Compile and send the weekly status report to stakeholders.",
        TaskDate: "2025-01-19",
        category: "Reports",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        TaskTitle: "Backup Server Data",
        TaskDescription: "Ensure all server data is backed up and stored securely.",
        TaskDate: "2025-01-24",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Coordinate Vendor Payments",
        TaskDescription: "Work with the finance team to ensure timely vendor payments.",
        TaskDate: "2025-01-23",
        category: "Finance",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Kabir",
    email: "e3@e.com",
    password: "123",
    taskNumbers: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        TaskTitle: "Design Marketing Strategy",
        TaskDescription: "Collaborate with the marketing team to design a new Q1 strategy.",
        TaskDate: "2025-01-20",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Conduct Product Training",
        TaskDescription: "Train the sales team on the features of the new product line.",
        TaskDate: "2025-01-23",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        TaskTitle: "Evaluate Customer Feedback",
        TaskDescription: "Review and analyze customer feedback for product improvements.",
        TaskDate: "2025-01-26",
        category: "Feedback",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Meera",
    email: "e4@e.com",
    password: "123",
    taskNumbers: {
      total: 3,
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        TaskTitle: "Draft Policy Updates",
        TaskDescription: "Write and distribute the updated company policies.",
        TaskDate: "2025-01-22",
        category: "Policy Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Plan Quarterly Meeting",
        TaskDescription: "Organize the agenda and logistics for the Q1 meeting.",
        TaskDate: "2025-01-23",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Create Training Schedule",
        TaskDescription: "Prepare a schedule for the upcoming e training sessions.",
        TaskDate: "2025-01-24",
        category: "Training",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Ananya",
    email: "e5@e.com",
    password: "123",
    taskNumbers: {
      total: 3,
      active: 3,
      newTask: 2,
      completed: 0,
      failed: 0,
    },
    tasks: [
      {
        TaskTitle: "Write Product FAQ",
        TaskDescription: "Draft a comprehensive FAQ document for the new product.",
        TaskDate: "2025-01-21",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Develop Social Media Plan",
        TaskDescription: "Plan the posts and schedule for the next social media campaign.",
        TaskDate: "2025-01-20",
        category: "Social Media",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        TaskTitle: "Test Software Updates",
        TaskDescription: "Perform tests to ensure new software updates are working correctly.",
        TaskDate: "2025-01-22",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

export default employees;


const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123"
};

// console.log(employees, admin);

// export const setLocalStorage=()=>{
// localStorage.setItem('employees',JSON.stringify(employees)) 
// localStorage.setItem('admin',JSON.stringify(admin)) 
// }
// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem('employees')) 
//   console.log(employees)
//   const admin = JSON.parse(localStorage.getItem('admin'))
   
//   return {employees,admin}     
//   // console.log(employees, admin); // Log the retrieved data
// };



// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem('employees') || '[]'); // Default empty array
//   const admin = JSON.parse(localStorage.getItem('admin') || 'null'); // Default null

//   if (!employees.length || !admin) {
//     console.error('Data localStorage mein nahi mila');
//     return { employees: [], admin: null };
//   }

//   console.log(employees, admin);
//   return { employees, admin };
// };


// Data ko localStorage me set karna
// export const setLocalStorage = () => {
//   localStorage.setItem('employees', JSON.stringify(employees));
//   localStorage.setItem('admin', JSON.stringify(admin));
// };

// // Data ko localStorage se get karna
// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem('employees'));
//   const admin = JSON.parse(localStorage.getItem('admin'));

//   // Agar data null ho, toh error print karo
//   if (!employees || !admin) {
//     console.error('Data localStorage me nahi hai');
//     return { employees: [], admin: null };
//   }

//   console.log(employees, admin);  // Console me print karo
//   return { employees, admin };
// };

// // Set karne ke baad data ko get karo
// setLocalStorage();  // Pehle data set karo





// Function to set data in localStorage
export const setLocalStorage = () => {
  try {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
    // console.log("Data successfully set in localStorage.");
  } catch (error) {
    console.error("Error setting data in localStorage:", error);
  }
};

// Function to get data from localStorage
export const getLocalStorage = () => {
  try {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    if (!employees || !admin) {
      console.error("Data not found in localStorage.");
      return { employees: [], admin: null };
    }

    // console.log("Retrieved data from localStorage:", { employees, admin });
    return { employees, admin };
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return { employees: [], admin: null };
  }
};

// Testing the functions
// setLocalStorage(); // Set the data
// getLocalStorage(); // Retrieve the data





