const employees = [
    {
      id: 1,
      email: "qhatwell0@google.ca",
      password: "mT3}>reNmy~d",
      tasks: [
        {
          title: "Update Database Schema",
          description: "Modify the database schema to include new columns for user tracking.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-11-20",
          category: "Development"
        },
        {
          title: "Write Unit Tests",
          description: "Create unit tests for the new user authentication feature.",
          active: false,
          newTask: true,
          completed: false,
          failed: true,
          date: "2024-11-18",
          category: "Testing"
        },
        {
          title: "Team Meeting",
          description: "Participate in the weekly team sync-up meeting.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-11-15",
          category: "Management"
        }
      ]
    },
    {
      id: 2,
      email: "mroby1@miitbeian.gov.cn",
      password: "bV9?rb*u#",
      tasks: [
        {
          title: "Design Homepage",
          description: "Create a new layout for the homepage.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-11-22",
          category: "Design"
        },
        {
          title: "Fix Bug #4321",
          description: "Resolve the issue causing a crash during login.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-11-19",
          category: "Development"
        }
      ]
    },
    {
      id: 3,
      email: "qcoggings2@dell.com",
      password: "eZ1(rr=|PxhGUAk",
      tasks: [
        {
          title: "Write Documentation",
          description: "Document the API endpoints for the new service.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-11-23",
          category: "Documentation"
        },
        {
          title: "Code Review",
          description: "Review the pull request for feature X.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-11-18",
          category: "Management"
        }
      ]
    },
    {
      id: 4,
      email: "aallright3@sciencedaily.com",
      password: "kV8=H\"%K",
      tasks: [
        {
          title: "Optimize Queries",
          description: "Improve the performance of slow SQL queries.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-11-21",
          category: "Development"
        },
        {
          title: "Setup CI/CD",
          description: "Implement a continuous integration and deployment pipeline.",
          active: false,
          newTask: true,
          completed: false,
          failed: true,
          date: "2024-11-16",
          category: "Testing"
        },
        {
          title: "Write Meeting Notes",
          description: "Summarize and share notes from the client call.",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          date: "2024-11-14",
          category: "Documentation"
        }
      ]
    },
    {
      id: 5,
      email: "hcescotti4@google.co.jp",
      password: "xO3~,Q<*|=s",
      tasks: [
        {
          title: "Design Mobile App UI",
          description: "Create wireframes and mockups for the new mobile app.",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          date: "2024-11-24",
          category: "Design"
        },
        {
          title: "Conduct Usability Test",
          description: "Test the mobile app with a group of beta users.",
          active: false,
          newTask: true,
          completed: false,
          failed: true,
          date: "2024-11-17",
          category: "Testing"
        }
      ]
    }
  ];
  
  console.log(employees);
  
const admin = [
    {"id" : 203,
    "email ": "bprince8858@gmail.com",
    "password": "prince@123"
    }

]
export const setLocalStorage =() =>{
    localStorage.setItem('employee',JSON.stringify(employees)) 
  localStorage.setItem('admin',JSON.stringify(admin))
  
}
export const getLocalStorage =() =>{
   const data = localStorage.setItem('employees',employees)
   console.log(JSON.parse(data)) 
}