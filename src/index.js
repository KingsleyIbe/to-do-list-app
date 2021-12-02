import _ from 'lodash';
import './css/style.css';
import items from './ultils/data';
import {updateSaver, storeData, updateStorage} from './ultils/status';
import displayListItems from './ultils/template';


displayListItems();
updateSaver();
storeData();
updateStorage();
