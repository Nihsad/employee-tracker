require('dotenv').config();
const inquirer = require('inquirer');

const {
    getDepartments,
    getRoles,
    getEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    getEmployeesByManager,
    getEmployeesByDepartment,
    deleteDepartment,
    deleteRole,
    deleteEmployee,
    getDepartmentBudget
} = require('./db/queries');

const mainMenu = async () => {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Update employee manager',
            'View employees by manager',
            'View employees by department',
            'Delete a department',
            'Delete a role',
            'Delete an employee',
            'View department budget',
            'Exit'
        ]
    });

    switch (action) {
        case 'View all departments':
            const departments = await getDepartments();
            console.table(departments);
            break;
        case 'View all roles':
            const roles = await getRoles();
            console.table(roles);
            break;
        case 'View all employees':
            const employees = await getEmployees();
            console.table(employees);
            break;
        case 'Add a department':
            const { name: deptName } = await inquirer.prompt({
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:'
            });
            await addDepartment(deptName);
            console.log(`Added department: ${deptName}`);
            break;
        case 'Add a role':
            const { title, salary, department_id } = await inquirer.prompt([
                { type: 'input', name: 'title', message: 'Enter the title of the role:' },
                { type: 'input', name: 'salary', message: 'Enter the salary for the role:' },
                { type: 'input', name: 'department_id', message: 'Enter the department ID for the role:' }
            ]);
            await addRole(title, salary, department_id);
            console.log(`Added role: ${title}`);
            break;
        case 'Add an employee':
            const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
                { type: 'input', name: 'first_name', message: 'Enter the first name of the employee:' },
                { type: 'input', name: 'last_name', message: 'Enter the last name of the employee:' },
                { type: 'input', name: 'role_id', message: 'Enter the role ID for the employee:' },
                { type: 'input', name: 'manager_id', message: 'Enter the manager ID for the employee (leave blank if none):', default: null }
            ]);
            await addEmployee(first_name, last_name, role_id, manager_id);
            console.log(`Added employee: ${first_name} ${last_name}`);
            break;
        case 'Update an employee role':
            const { employee_id, new_role_id } = await inquirer.prompt([
                { type: 'input', name: 'employee_id', message: 'Enter the ID of the employee to update:' },
                { type: 'input', name: 'new_role_id', message: 'Enter the new role ID for the employee:' }
            ]);
            await updateEmployeeRole(employee_id, new_role_id);
            console.log(`Updated employee ID ${employee_id} with role ID ${new_role_id}`);
            break;
        case 'Update employee manager':
            const { emp_id, new_manager_id } = await inquirer.prompt([
                { type: 'input', name: 'emp_id', message: 'Enter the ID of the employee to update the manager for:' },
                { type: 'input', name: 'new_manager_id', message: 'Enter the new manager ID for the employee:' }
            ]);
            await updateEmployeeManager(emp_id, new_manager_id);
            console.log(`Updated employee ID ${emp_id} with manager ID ${new_manager_id}`);
            break;
        case 'View employees by manager':
            const { manager_id_view } = await inquirer.prompt([
                { type: 'input', name: 'manager_id_view', message: 'Enter the manager ID to view their employees:' }
            ]);
            const employeesByManager = await getEmployeesByManager(manager_id_view);
            console.table(employeesByManager);
            break;
        case 'View employees by department':
            const { dept_id_view } = await inquirer.prompt([
                { type: 'input', name: 'dept_id_view', message: 'Enter the department ID to view its employees:' }
            ]);
            const employeesByDepartment = await getEmployeesByDepartment(dept_id_view);
            console.table(employeesByDepartment);
            break;
        case 'Delete a department':
            const { dept_id_delete } = await inquirer.prompt([
                { type: 'input', name: 'dept_id_delete', message: 'Enter the ID of the department to delete:' }
            ]);
            await deleteDepartment(dept_id_delete);
            console.log(`Deleted department ID ${dept_id_delete}`);
            break;
        case 'Delete a role':
            const { role_id_delete } = await inquirer.prompt([
                { type: 'input', name: 'role_id_delete', message: 'Enter the ID of the role to delete:' }
            ]);
            await deleteRole(role_id_delete);
            console.log(`Deleted role ID ${role_id_delete}`);
            break;
        case 'Delete an employee':
            const { emp_id_delete } = await inquirer.prompt([
                { type: 'input', name: 'emp_id_delete', message: 'Enter the ID of the employee to delete:' }
            ]);
            await deleteEmployee(emp_id_delete);
            console.log(`Deleted employee ID ${emp_id_delete}`);
            break;
        case 'View department budget':
            const { dept_id_budget } = await inquirer.prompt([
                { type: 'input', name: 'dept_id_budget', message: 'Enter the department ID to view its total budget:' }
            ]);
            const totalBudget = await getDepartmentBudget(dept_id_budget);
            console.log(`Total budget for department ID ${dept_id_budget}: $${totalBudget}`);
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }

    mainMenu();
};

mainMenu();
