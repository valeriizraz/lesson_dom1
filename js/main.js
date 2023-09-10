'use strict';

const del = document.querySelector('.ads');
del.remove();

const propsList = document.querySelectorAll('.props__list');

const itemFour =
document.querySelector('.item_two .content .props__list .props__item_four');

const listFour = document.querySelectorAll('.props__item_four');

listFour[2].after(itemFour);

const itemTwo =
document.querySelectorAll('.item_six .content .props__list .props__item_two');
propsList[2].append(itemTwo[0]);
propsList[2].append(itemTwo[1]);

const propListThree = document.querySelectorAll('.props__item_five');

const propListFour = document.querySelectorAll('.props__item_three');

propsList[3].append(propListFour[0], propListFour[1], propListFour[2],
  propListFour[3], propListFour[4], propListFour[5], propListFour[6]);

  propsList[4].append(propListThree[0], propListThree[1], propListThree[2],
    propListThree[3], propListThree[4], propListThree[5], propListThree[6],
    propListThree[7]);




// const propsItemES6 = document.querySelectorAll('.props__item_two');
// console.log(propsItemES6);

