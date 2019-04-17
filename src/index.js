import _ from 'lodash';
var element = document.createElement('div');
element.innerHTML = _.join(['wang', 'chen', 'qing'], '-');
document.body.appendChild(element);


// function getComponent() {
//   return import(/* webpackChunkName:"lodash" */ 'lodash').then(({ default: _ }) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['wang', 'chen', 'qing'], '-');
//     return element;
//   })
// }

// getComponent().then(element => {
//   document.body.appendChild(element);
// });