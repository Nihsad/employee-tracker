# Challenge 12 - Employee Tracker

## Description
This application is a command-line application built with Node.js, Inquirer, and PostgreSQL that allows the user to view and manage the departments, roles, and employees within their company. The application provides options to view, add and update various records in the database.

## Table of Contents
- [Challenge 12 - Employee Tracker](#challenge-12---employee-tracker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Database Schema](#database-schema)
    - [department](#department)
    - [role](#role)
    - [employee](#employee)
  - [Features](#features)
  - [Video Walkthrough](#video-walkthrough)
  - [Credit](#credit)
  - [License](#license)

## Installation
1. Clone the repository:
    ```
    git clone https://github.com/your-username/employee-tracker.git
    cd employee-tracker
    ```
2. Install the necessary packages:
    ```
    npm install
    ```
3. Install inquirer version 8.2.4:
   ```
   npm install inquirer@8.2.4
   ```
4. Set up your PostgreSQL database and update credentials in the `.env` file (don't forget to rename the .env file as well!).
5. run the database schema and seed files to set up the database:
    ```
    psql -U your_db_user
    \i db/schema.sql
    \i db/seeds.sql
    \q
    ```

## Usage
1. Start the application:
   ```
   node index.js
   ```
2. Follow the prompts in the command-line interface to interact with the database. The application provides the following options:
   - View all departments
   - View all roles
   - View all employees
   - View employees by manager
   - View employees by department
   - View department budget
   - Add a department
   - Add a role
   - Add an employee
   - Update an employee role
   - Update employee manager
   - Delete a department
   - Delete a role
   - Delete an employee
3. To exit the CLI, either select `Exit` from the menu, or press `Command + .` (iOS) or `Control + C` (Windows).

## Database Schema
The database schema includes three tables: `department`, `role`, and `employee`.

### department
    id: SERIAL PRIMARY KEY
    name: VARCHAR(30) UNIQUE NOT NULL

### role
    id: SERIAL PRIMARY KEY
    title: VARCHAR(30) UNIQUE NOT NULL
    salary: DECIMAL NOT NULL
    department_id: INTEGER NOT NULL REFERENCES department(id)

### employee
    id: SERIAL PRIMARY KEY
    first_name: VARCHAR(30) NOT NULL
    last_name: VARCHAR(30) NOT NULL
    role_id: INTEGER NOT NULL REFERENCES role(id)
    manager_id: INTEGER REFERENCES employee(id)

## Features
- **View All Departments:** Displays a formatted table showing department names and department IDs.
- **View All Roles:** Displays a formatted table with job titles, role IDs, department names, and salaries.
- **View All Employees:** Displays a formatted table with employee IDs, first names, last names, job titles, departments, salaries, and managers.
- **View Employees by Manager:** Prompts the user to select a manager and displays a formatted table showing the employee IDs, first names, last names, and job titles of the employees under that manager.
- **View Employees by Department:** Prompts the user to select a department and displays a formatted table showing the employee IDs, first names, last names, and job titles of the employees in that department.
- **View Department Budget:** Prompts the user to select a department and displays the total utilized budget of that department, which is the combined salaries of all employees in that department.
- **Add a Department:** Prompts the user to enter the name of the department and adds it to the database.
- **Add a Role:** Prompts the user to enter the name, salary, and department for the role and adds it to the database.
- **Add an Employee:** Prompts the user to enter the employee’s first name, last name, role, and manager and adds the employee to the database.
- **Update an Employee Role:** Prompts the user to select an employee to update and their new role, then updates this information in the database.
- **Update Employee Manager:** Prompts the user to select an employee and their new manager, then updates this information in the database.
- **Delete a Department:** Prompts the user to select a department to delete and removes it from the database.
- **Delete a Role:** Prompts the user to select a role to delete and removes it from the database.
- **Delete an Employee:** Prompts the user to select an employee to delete and removes their record from the database.

These features ensure comprehensive management of the company's employee database, providing essential tools for viewing, adding, updating, and deleting records.

## Video Walkthrough
[Watch the video walkthrough here](https://drive.google.com/file/d/1H6ppPICWRG2ALO7yhQzjSfckOs6q5VNO/view?usp=sharing)

## Credit
Many thanks to Stephen Woosley and classmates Sara Hines, William Kalish, Jordan Heersink and Austin Allen for their help troubleshooting a difficult database issue I encountered.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License. See the LICENSE file for details. 