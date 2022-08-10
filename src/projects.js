import { createTable } from './homePage.js';
import { switchTab, taskForm } from './today.js';
import { Task, taskArray } from './addTasks.js';

let projectsArray = [];

const projectsPage = function () {
	const projects = document.getElementById('projects');
	projects.addEventListener('click', function () {
		switchTab(projects);
		projectsTable();
		document.getElementById('task').innerHTML = 'Projects';
		document.getElementById('due').innerHTML = 'Completion Date';
		projectForm();
	});
};

const projectForm = function () {
	document.getElementById('addButton').innerHTML = 'Add Project';
	document.getElementById('nameLabel').innerHTML = 'Project Name';
	document.getElementById('dateLabel').innerHTML = 'Project Date';
	document.getElementById('submitButton').innerHTML = 'Submit';
};

const projectsTable = function () {
	const table = document.getElementById('table');
	table.remove();
	createTable();
	for (let i = 0; i < projectsArray.length; i++) {
		projectsArray[i].addRow();
	}
};

const Project = (name, date, des) => {
	const prototype = Task(name, date, des);
	let projectTaskArray = [];

	const addProject = function (formName, index) {
		const sidebar = document.getElementById('sidebar');

		const projectsDiv = document.createElement('div');
		projectsDiv.setAttribute('class', '');
		sidebar.appendChild(projectsDiv);
		const projects = document.createElement('h6');
		projectsDiv.appendChild(projects);
		projects.setAttribute('data-number', `${index}`);
		projects.innerHTML = `${formName.value}`;
		projectsTasks(projectsDiv);
	};

	const projectsTasks = function (projectsDiv) {
		projectsDiv.addEventListener('click', function () {
			switchTab(projectsDiv);
			taskForm();
			const table = document.getElementById('table');
			table.remove();
			createTable();
			for (let i = 0; i < projectTaskArray.length; i++) {
				if (taskArray.includes(projectTaskArray[i])) {
					projectTaskArray[i].addRow();
				} else {
					projectTaskArray.splice(
						projectTaskArray.indexOf(projectTaskArray[i]),
						1
					);
					i--;
				}
			}
			addProjectTasks(projectsDiv);
		});
	};

	const addProjectTasks = function (projectsDiv) {
		const submitButton = document.getElementById('submitButton');
		submitButton.para = projectsDiv;
		submitButton.arrayPara = projectTaskArray;
		submitButton.removeEventListener('click', taskHandler);
		submitButton.addEventListener('click', taskHandler);
	};

	return Object.assign({}, prototype, {
		addProject,
		projectTaskArray,
		taskHandler,
	});
};

const taskHandler = function (evt) {
	if (evt.currentTarget.para.classList.contains('current')) {
		const formName = document.getElementById('formName');
		const formDate = document.getElementById('formDate');
		const formDes = document.getElementById('formDes');

		if (formName.checkValidity() && formDate.checkValidity()) {
			const task = Task(formName.value, formDate.value, formDes.value);
			evt.currentTarget.arrayPara.push(task);
			taskArray.push(task);
			task.addRow();
		}
	}
};

export { projectsPage, projectsArray, Project, taskHandler };
