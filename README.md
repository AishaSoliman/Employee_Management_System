Employee Management System: 

Table of Contents:
    - Features
    - Technologies Used
    - Installation and Setup
    - Usage
    - Future Enhancements
    - Checklist & Considerations
    - Additional Considerations and Implementations


Features:
    - View, create, edit, and delete employees
    - View, create, edit, and delete departments
    - View, create, edit, and delete companies

Technologies Used:
    - React
    - React Router
    - Tailwind CSS
    - React Toastify (for notifications)
    - Backend API (to be integrated)

Installation and Setup:
    Prerequisites:
        - Node.js (v12 or higher)
        - npm or yarn
    Steps:
        1- Clone the repository:
            git clone https://github.com/AishaSoliman/Employee_Management_System.git
            cd Employee_Management_System

        2- Install dependencies
            npm install
            npm install styled-components
            npm install react-toastify
            

        3- Start the React application
            Run Vite Frontend
            npm run dev
            React will run on http://localhost:3000

        3- run the Django backend
            python manage.py runserver 9000
            django will run on http://localhost:9000
        

Usage: 
    Viewing Employees:
        - Navigate to the Employees page to view a list of all employees.
        - Click on "View Profile" to see details of an employee.
    Creating a New Employee:
        - Click on the "Create" button at the bottom of the Employees list page.
        - Fill in the form and click "Submit" to create a new employee.
    Editing an Employee:
        - Click on the "Edit" button next to an employee's entry.
        - Update the form fields and click "Submit" to save changes.
    Deleting an Employee
        - Click on the "Delete" button next to an employee's entry.
        - a pop up will be shown

Future Enhancements: 
    Planned Features
        - Integration with Backend API: Implement the integration between the frontend and backend APIs for creating and editing employees.
        - Authentication and Authorization: Implement user authentication and authorization to restrict access to certain functionalities.
        - Validation: Add validation for mobile numbers and email addresses.
        - Role-based Access Control: Implement role-based access control to restrict functionalities based on user roles.
        - Hire-date Functionality: Add the functionality to manage hire dates for employees.

Checklist and Consederations:
    Frontend
        Implemented employee listing, creation, editing, and deletion pages
            Status: Done
        Implemented department and company management pages
            Status: Done
        Validate all required fields are filled:
            Status: Done
        Validate email addresses and mobile numbers are in the correct format:
            Status: Not done
        Ensure that the Department field in Employee page only shows departments related to the selected company:
            Status: Not done
        Handle errors and show appropriate & user-friendly messages:
            Status: Done

    Backend
        Validate all required fields are filled:
            Status: Done
        Validate email addresses and mobile numbers are in the correct format:
            Status: Not done
        Automatically calculate the number of departments and employees in the company:
            Status: Done
        Automatically calculate the number of employees in the department:
            Status: Done
        Automatically calculate the number of days an employee has been with the company based on the hiring date:
            Status: Not done
        Ensure that the Department field in Employee models only accepts departments related to the selected company:
            Status: Not done
        Handle cascading deletions by ensuring either related records are properly managed or preventing the deletion if necessary:
            Status: Done
        Handle errors and throw appropriate error codes and messages accordingly:
            Status: Done

Additional Considerations and Implementations:
    - The project uses React Router for client-side routing.
    - Tailwind CSS is used for styling the application.
    - React Toastify is used for displaying notifications.
    - The project is structured with a focus on maintaining readability and scalability.
    - The JSON file (employeesTest.json) containing the employee data is placed in the src directory and fetched on the client side.
    - The JSON file (departentsTest.json) containing the departments data is placed in the src directory and fetched on the client side.
    - The JSON file (companyTest.json) containing the companies data is placed in the src directory and fetched on the client side.
    - Comprehensive error handling is not yet implemented.
    - Tests are not yet included in the project.
