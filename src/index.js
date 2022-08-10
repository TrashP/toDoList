import './homePage.css';
import { pageLayout } from './homePage.js';
import { addTask, closeTask } from './addTasks.js';
import { todayPage, homeTable } from './today.js';
import { weekPage } from './week.js';
import { projectsPage } from './projects.js';

pageLayout();
addTask();
closeTask();
todayPage();
weekPage();
homeTable();

projectsPage();
