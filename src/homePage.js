import Icon from './to-do-list.png';

const pageLayout = function () {
	const content = document.getElementById('content');

	const header = document.createElement('div');
	content.appendChild(header);
	header.setAttribute('id', 'header');

	const sidebar = document.createElement('div');
	content.appendChild(sidebar);
	sidebar.setAttribute('id', 'sidebar');

	const main = document.createElement('div');
	content.appendChild(main);
	main.setAttribute('id', 'main');

	headerLayout();
	sidebarLayout();
	homeLayout();
};

const headerLayout = function () {
	const header = document.getElementById('header');

	const attr = document.createElement('a');
	header.appendChild(attr);
	attr.setAttribute('href', 'https://www.flaticon.com/free-icons/list');
	attr.setAttribute('title', 'list icons');

	const myIcon = new Image();
	myIcon.src = Icon;
	myIcon.setAttribute('id', 'icon');
	header.appendChild(myIcon);

	const toDo = document.createElement('h1');
	header.appendChild(toDo);
	toDo.innerHTML = 'To-Do List';

	const addButton = document.createElement('button');
	addButton.setAttribute('id', 'addButton');
	header.appendChild(addButton);
	addButton.innerHTML = 'Add Task';
};

const sidebarLayout = function () {
	const sidebar = document.getElementById('sidebar');

	const homeDiv = document.createElement('div');
	homeDiv.setAttribute('id', 'home');
	homeDiv.setAttribute('class', 'current');
	sidebar.appendChild(homeDiv);
	const home = document.createElement('h3');
	homeDiv.appendChild(home);
	home.innerHTML = 'Home';

	const todayDiv = document.createElement('div');
	todayDiv.setAttribute('id', 'today');
	todayDiv.setAttribute('class', '');
	sidebar.appendChild(todayDiv);
	const today = document.createElement('h3');
	todayDiv.appendChild(today);
	today.innerHTML = 'Today';

	const weekDiv = document.createElement('div');
	weekDiv.setAttribute('id', 'week');
	weekDiv.setAttribute('class', '');
	sidebar.appendChild(weekDiv);
	const week = document.createElement('h3');
	weekDiv.appendChild(week);
	week.innerHTML = 'Week';

	const projectsDiv = document.createElement('div');
	projectsDiv.setAttribute('id', 'projects');
	projectsDiv.setAttribute('class', '');
	sidebar.appendChild(projectsDiv);
	const projects = document.createElement('h3');
	projectsDiv.appendChild(projects);
	projects.innerHTML = 'Projects';
};

const homeLayout = function () {
	createTable();
	createForm();
};

const createTable = function () {
	const main = document.getElementById('main');

	const table = document.createElement('div');
	main.appendChild(table);
	table.setAttribute('id', 'table');

	const tableHead = document.createElement('div');
	table.appendChild(tableHead);
	tableHead.setAttribute('id', 'tableHead');

	const task = document.createElement('h3');
	task.setAttribute('id', 'task');
	tableHead.appendChild(task);
	task.innerHTML = 'Task';
	const due = document.createElement('h3');
	due.setAttribute('id', 'due');
	tableHead.appendChild(due);
	due.innerHTML = 'Due Date';
};

const createForm = function () {
	const main = document.getElementById('main');

	const form = document.createElement('form');
	main.appendChild(form);
	form.setAttribute('id', 'taskForm');
	form.setAttribute('action', '');
	form.setAttribute('onsubmit', 'return false');

	const nameLabel = document.createElement('label');
	nameLabel.setAttribute('id', 'nameLabel');
	form.appendChild(nameLabel);
	nameLabel.innerHTML = 'Task Name';
	const nameInput = document.createElement('input');
	form.appendChild(nameInput);
	nameInput.setAttribute('type', 'text');
	nameInput.setAttribute('required', '');
	nameInput.setAttribute('id', 'formName');
	nameInput.setAttribute('name', 'formName');

	const dateLabel = document.createElement('label');
	dateLabel.setAttribute('id', 'dateLabel');
	form.appendChild(dateLabel);
	dateLabel.innerHTML = 'Task Date';
	const dateInput = document.createElement('input');
	form.appendChild(dateInput);
	dateInput.setAttribute('type', 'date');
	dateInput.setAttribute('required', '');
	dateInput.setAttribute('id', 'formDate');
	dateInput.setAttribute('name', 'formDate');

	const desLabel = document.createElement('label');
	form.appendChild(desLabel);
	desLabel.innerHTML = 'Description';
	const desInput = document.createElement('textarea');
	form.appendChild(desInput);
	desInput.setAttribute('id', 'formDes');

	const buttonsDiv = document.createElement('div');
	form.appendChild(buttonsDiv);
	buttonsDiv.setAttribute('id', 'buttonsDiv');

	const submitButton = document.createElement('button');
	buttonsDiv.appendChild(submitButton);
	submitButton.innerHTML = 'Submit Task';
	submitButton.setAttribute('type', 'submit');
	submitButton.setAttribute('id', 'submitButton');

	const closeButton = document.createElement('button');
	buttonsDiv.appendChild(closeButton);
	closeButton.innerHTML = 'Close';
	closeButton.setAttribute('type', 'button');
	closeButton.setAttribute('id', 'closeButton');
};

export { pageLayout, headerLayout, sidebarLayout, homeLayout, createTable };
