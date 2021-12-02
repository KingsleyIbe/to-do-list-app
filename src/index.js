import _ from 'lodash';
import './css/style.css';
// import items from './ultils/data.js';
import {updateSaver, storeData, updateStorage} from './ultils/status.js';
import displayListItems from './ultils/template.js';


displayListItems();
updateSaver();
storeData();
updateStorage();
