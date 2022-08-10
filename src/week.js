import { taskArray } from './addTasks.js';
import { createTable } from './homePage.js';
import { switchTab, taskForm } from './today.js';
let weekArray = [];

const getWeek = function () {
	const today = new Date();
	const week = [];
	for (let i = 0; i < 8; i++) {
		let nextDay = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() + i
		);

		let dd = String(nextDay.getDate()).padStart(2, '0');
		let mm = String(nextDay.getMonth() + 1).padStart(2, '0');
		let yyyy = nextDay.getFullYear();

		nextDay = yyyy + '-' + mm + '-' + dd;
		week.push(nextDay);
	}
	return week;
};

const createWeekArray = function () {
	weekArray = [];
	for (let i = 0; i < taskArray.length; i++) {
		if (getWeek().includes(taskArray[i].taskDate)) {
			weekArray.push(taskArray[i]);
		}
	}
};

const weekTable = function () {
	const table = document.getElementById('table');
	table.remove();
	createTable();
	for (let i = 0; i < weekArray.length; i++) {
		weekArray[i].addRow();
	}
};

const weekPage = function () {
	const weekButton = document.getElementById('week');
	weekButton.addEventListener('click', function () {
		switchTab(weekButton);
		createWeekArray();
		weekTable();
		taskForm();
	});
};

const filterWeek = function (tableRow, due) {
	const weekButton = document.getElementById('week');

	if (
		weekButton.classList.contains('current') &&
		!getWeek().includes(due.innerHTML)
	) {
		tableRow.remove();
	}
};

export { weekPage, filterWeek };
