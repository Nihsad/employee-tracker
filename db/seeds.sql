INSERT INTO department (name) VALUES ('Engineering'), ('Sales'), ('Finance'), ('Marketing'), ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 70000, 1),
('Sales Manager', 60000, 2),
('Accountant', 50000, 3),
('Marketing Specialist', 55000, 4),
('HR Manager', 65000, 5),
('DevOps Engineer', 75000, 1),
('Sales Representative', 50000, 2),
('Financial Analyst', 55000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, NULL),
('Sara', 'Brown', 3, NULL),
('Mike', 'Johnson', 4, NULL),
('Emily', 'Davis', 5, NULL),
('David', 'Wilson', 6, 1),
('Anna', 'Taylor', 7, 2),
('Robert', 'Moore', 8, 3);