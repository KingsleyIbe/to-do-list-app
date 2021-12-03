import _ from 'lodash';
import './css/style.css';
import { userActions, saveData, updateStorage } from './ultils/status.js';
import displayListItems from './ultils/template.js';


displayListItems();
userActions();
saveData();
updateStorage();

