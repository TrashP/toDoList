import {
	taskArray,
	openForm,
	closeForm,
	submit,
	formValidation,
} from './addTasks.js';
import { filterToday } from './today.js';
import { filterWeek } from './week.js';
import { projectsArray, taskHandler } from './projects.js';
import Arrow from './up-arrow.png';

const desRow = function (taskDiv, tableRow, that) {
	taskDiv.addEventListener('click', function handler() {
		const table = document.getElementById('table');
		tableRow.style.borderBottom = '0';

		const desDiv = document.createElement('div');
		desDiv.setAttribute('class', 'desDiv');
		desDiv.style.paddingLeft = '50px';

		const attrArrow = document.createElement('a');
		attrArrow.setAttribute(
			'href',
			'https://www.flaticon.com/free-icons/up-arrow'
		);
		attrArrow.setAttribute('title', 'up arrow icons');
		desDiv.appendChild(attrArrow);

		const arrow = new Image();
		arrow.src = Arrow;
		arrow.setAttribute('class', 'arrow');
		desDiv.appendChild(arrow);

		const description = document.createElement('p');
		desDiv.appendChild(description);
		description.innerHTML = 'Description';
		description.setAttribute('class', 'description');

		const des = document.createElement('p');
		desDiv.appendChild(des);
		des.innerHTML = that.taskDes;
		desDiv.style.borderBottom = '2px solid rgb(141, 245, 141)';

		table.insertBefore(desDiv, tableRow.nextSibling);
		if (
			tableRow.nextSibling &&
			tableRow.nextSibling.nextSibling &&
			tableRow.nextSibling.nextSibling.classList.contains('desDiv')
		) {
			tableRow.nextSibling.nextSibling.remove();
		}
		hideDes(arrow);
	});
};

const hideDes = function (arrow) {
	arrow.addEventListener('click', function () {
		arrow.parentNode.previousSibling.style.borderBottom =
			'2px solid rgb(141, 245, 141)';
		arrow.parentNode.remove();
	});
};

const checkRow = function (check, tableRow, rowName, due, that) {
	check.addEventListener('change', function () {
		if (check.checked) {
			that.check = true;
			tableRow.style.backgroundColor = 'lightgray';
			rowName.style.textDecoration = 'line-through';
			due.style.textDecoration = 'line-through';
		} else {
			that.check = false;
			tableRow.style.backgroundColor = 'rgb(227, 245, 227)';
			rowName.style.textDecoration = '';
			due.style.textDecoration = '';
		}
	});
};

const editRow = function (editIcon, rowName, due, that, tableRow) {
	editIcon.addEventListener('click', function () {
		if (
			editIcon.parentNode.nextSibling &&
			editIcon.parentNode.nextSibling.classList.contains('desDiv')
		) {
			editIcon.parentNode.nextSibling.remove();
			editIcon.parentNode.style.borderBottom =
				'2px solid rgb(141, 245, 141)';
		}
		openForm();
		formValidation();
		document.getElementById('formName').value = that.taskName;
		document.getElementById('formDate').value = that.taskDate;
		document.getElementById('formDes').value = that.taskDes;

		const submitButton = document.getElementById('submitButton');
		submitButton.removeEventListener('click', submit);
		submitButton.removeEventListener('click', taskHandler);

		submitButton.addEventListener('click', function handler() {
			if (
				document.getElementById('formName').checkValidity() &&
				document.getElementById('formDate').checkValidity()
			) {
				that.taskName = document.getElementById('formName').value;
				that.taskDate = document.getElementById('formDate').value;
				that.taskDes = document.getElementById('formDes').value;

				rowName.innerHTML = that.taskName;
				if (
					document
						.getElementById('projects')
						.classList.contains('current')
				) {
					const sidebarProjects = document.querySelector(
						`[data-number='${projectsArray.indexOf(that)}']`
					);
					sidebarProjects.innerHTML = that.taskName;
				}
				due.innerHTML = that.taskDate;
				filterToday(tableRow, due);
				filterWeek(tableRow, due);
				submitButton.removeEventListener('click', handler);
				closeForm();
			}
		});
	});
};

const deleteRow = function (delIcon, tableRow, that) {
	delIcon.addEventListener('click', function () {
		if (
			delIcon.parentNode.nextSibling &&
			delIcon.parentNode.nextSibling.classList.contains('desDiv')
		) {
			delIcon.parentNode.nextSibling.remove();
		}
		if (document.getElementById('projects').classList.contains('current')) {
			projectsArray.splice(projectsArray.indexOf(that), 1);
		} else {
			taskArray.splice(taskArray.indexOf(that), 1);
		}
		tableRow.remove();
	});
};

export { desRow, checkRow, editRow, deleteRow };
