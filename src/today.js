import { taskArray } from './addTasks.js';
import { createTable } from './homePage.js';
let todayArray = [];

const getToday = function () {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0');
	let yyyy = today.getFullYear();

	today = yyyy + '-' + mm + '-' + dd;
	return today;
};

const todayPage = function () {
	const todayButton = document.getElementById('today');
	todayButton.addEventListener('click', function () {
		switchTab(todayButton);
		createTodayArray();
		todayTable();
		taskForm();
	});
};

const createTodayArray = function () {
	todayArray = [];
	for (let i = 0; i < taskArray.length; i++) {
		if (taskArray[i].taskDate == getToday()) {
			todayArray.push(taskArray[i]);
		}
	}
};

const todayTable = function () {
	const table = document.getElementById('table');
	table.remove();
	createTable();
	for (let i = 0; i < todayArray.length; i++) {
		todayArray[i].addRow();
	}
};

const switchTab = function (tab) {
	const sidebarDivs = document
		.getElementById('sidebar')
		.querySelectorAll('div');
	sidebarDivs.forEach((div) => div.setAttribute('class', ''));

	tab.setAttribute('class', 'current');
};

const homeTable = function () {
	const homeButton = document.getElementById('home');
	homeButton.addEventListener('click', function () {
		switchTab(homeButton);
		taskForm();
		const table = document.getElementById('table');
		table.remove();
		createTable();
		for (let i = 0; i < taskArray.length; i++) {
			taskArray[i].addRow();
		}
	});
};

const filterToday = function (tableRow, due) {
	const todayButton = document.getElementById('today');

	if (
		todayButton.classList.contains('current') &&
		due.innerHTML != getToday()
	) {
		tableRow.remove();
	}
};

const taskForm = function () {
	document.getElementById('addButton').innerHTML = 'Add Task';
	document.getElementById('nameLabel').innerHTML = 'Task Name';
	document.getElementById('dateLabel').innerHTML = 'Task Date';
	document.getElementById('submitButton').innerHTML = 'Submit Task';
};

export { todayPage, homeTable, filterToday, switchTab, taskForm };
