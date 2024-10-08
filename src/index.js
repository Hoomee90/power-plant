import './scss/styles.scss';
import 'bootstrap';
import { stateControl, changeStateFunctions } from './js/utils.js'

window.onload = () => {
  document.querySelector('#feed').onclick = () => {
    const newState = stateControl(changeStateFunctions.feed);
    document.querySelector('#soil-value').innerText = `${newState.soil}`;
  };
  document.querySelector('#water').onclick = () => {
    const newState = stateControl(changeStateFunctions.water);
    document.querySelector('#water-value').innerText = `${newState.water}`;
  };
  document.querySelector('#spotlight').onclick = () => {
    const newState = stateControl(changeStateFunctions.spotlight);
    document.querySelector('#light-value').innerText = `${newState.light}`;
  };

};