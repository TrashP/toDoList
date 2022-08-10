import Edit from './edit.png';
import Delete from './delete.png';
import { checkRow, editRow, deleteRow, desRow } from './rowEvents.js';
import { filterToday } from './today.js';
import { filterWeek } from './week.js';
import { projectsArray, Project } from './projects.js';

const taskArray = [];

const Task = (name, date, des) => {
	const taskName = name;
	const taskDate = date;
	const taskDes = des;
	let check = false;

	const addRow = function () {
		const table = document.getElementById('table');

		const tableRow = document.createElement('div');
		table.appendChild(tableRow);
		tableRow.setAttribute('class', 'tableRow');

		const check = document.createElement('input');
		tableRow.appendChild(check);
		check.setAttribute('type', 'checkbox');
		check.setAttribute('class', 'check');

		const taskDiv = document.createElement('div');
		tableRow.appendChild(taskDiv);
		taskDiv.setAttribute('class', 'taskDiv');

		const rowName = document.createElement('p');
		rowName.setAttribute('class', 'rowText');
		taskDiv.appendChild(rowName);
		rowName.innerHTML = this.taskName;
		const due = document.createElement('p');
		due.setAttribute('class', 'rowText');
		taskDiv.appendChild(due);
		due.innerHTML = this.taskDate;

		const attrEdit = document.createElement('a');
		tableRow.appendChild(attrEdit);
		attrEdit.setAttribute(
			'href',
			'https://www.flaticon.com/free-icons/edit'
		);
		attrEdit.setAttribute('title', 'edit icons');

		const editIcon = new Image();
		editIcon.src = Edit;
		editIcon.setAttribute('class', 'edit');
		tableRow.appendChild(editIcon);

		const attrDel = document.createElement('a');
		tableRow.appendChild(attrDel);
		attrDel.setAttribute(
			'href',
			'https://www.flaticon.com/free-icons/delete'
		);
		attrDel.setAttribute('title', 'delete icons');

		const delIcon = new Image();
		delIcon.src = Delete;
		delIcon.setAttribute('class', 'delete');
		tableRow.appendChild(delIcon);

		const that = this;
		checkRow(check, tableRow, rowName, due, that);
		editRow(editIcon, rowName, due, that, tableRow);
		deleteRow(delIcon, tableRow, that);
		desRow(taskDiv, tableRow, that);

		filterToday(tableRow, due);
		filterWeek(tableRow, due);

		checkedTasks(check, tableRow, rowName, due, that);
	};

	return { taskName, taskDate, taskDes, check, addRow };
};

const openForm = function () {
	document.getElementById('taskForm').style.display = 'flex';
};

const closeForm = function () {
	document.getElementById('taskForm').style.display = 'none';
};

const clearForm = function () {
	document.getElementById('formName').value = '';
	document.getElementById('formDate').value = '';
	document.getElementById('formDes').value = '';
};

const addTask = function () {
	const addButton = document.getElementById('addButton');
	addButton.addEventListener('click', function () {
		openForm();
		clearForm();
		submitTask();
	});
};

const closeTask = function () {
	const closeButton = document.getElementById('closeButton');
	closeButton.addEventListener('click', function () {
		closeForm();
		clearForm();
	});
};

const submit = function () {
	const formName = document.getElementById('formName');
	const formDate = document.getElementById('formDate');
	const formDes = document.getElementById('formDes');

	if (formName.checkValidity() && formDate.checkValidity()) {
		if (
			document.getElementById('home').classList.contains('current') ||
			document.getElementById('today').classList.contains('current') ||
			document.getElementById('week').classList.contains('current')
		) {
			const task = Task(formName.value, formDate.value, formDes.value);
			taskArray.push(task);
			task.addRow();
		} else if (
			document.getElementById('projects').classList.contains('current')
		) {
			const project = Project(
				formName.value,
				formDate.value,
				formDes.value
			);
			projectsArray.push(project);
			project.addRow();
			project.addProject(formName, projectsArray.indexOf(project));
		}
		closeForm();
	}
};

const submitTask = function () {
	const submitButton = document.getElementById('submitButton');
	submitButton.addEventListener('click', submit);
	formValidation();
};

const formValidation = function () {
	const nameInput = document.getElementById('formName');

	nameInput.addEventListener('input', () => {
		nameInput.setCustomValidity('');
		nameInput.checkValidity();
	});

	nameInput.addEventListener('invalid', () => {
		if (nameInput.value === '') {
			nameInput.setCustomValidity('Enter your task name!');
		}
	});
};

const checkedTasks = function (check, tableRow, rowName, due, that) {
	if (that.check == true) {
		check.checked = true;
		tableRow.style.backgroundColor = 'lightgray';
		rowName.style.textDecoration = 'line-through';
		due.style.textDecoration = 'line-through';
	} else if (that.check == false) {
		tableRow.style.backgroundColor = 'rgb(227, 245, 227)';
		rowName.style.textDecoration = '';
		due.style.textDecoration = '';
	}
};

export {
	taskArray,
	addTask,
	submitTask,
	closeTask,
	openForm,
	closeForm,
	clearForm,
	submit,
	formValidation,
	Task,
};
