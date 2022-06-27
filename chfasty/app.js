// const brandBox = Array.from(document.querySelectorAll('.BRAND_SELECTOR'));
const brandBox = document.querySelectorAll('.LOGO');

    const brandFrame = document.querySelector('#BRANDS').lastElementChild;

console.log(brandBox);




for (box = 0; box < brandBox.length; box++) {
  console.log(brandBox[box])
  brandBox[box].addEventListener('mouseenter', e => {
    e.currentTarget.after(brandFrame)
    console.log(brandFrame.childNodes);
  });
}

  
  





// const storeMapBox = document.querySelector('#BRANDS');

//     box.addEventListener('mouseenter', e => {
//       let boxId = `#${e.currentTarget.classList[0]}`;
//       const selectedBox = document.querySelector('use');
//       selectedBox.setAttribute('class', `${boxId.slice(1)}`);
//       selectedBox.setAttribute('xlink:href', `${boxId}`);
//       e.currentTarget.classList.add('BRAND_ACTIVE');

//     });
//     box.addEventListener('mouseleave', e => {
//       e.currentTarget.classList.remove('BRAND_ACTIVE');
//     });
//   });
// }

// boxSelect();

// for (i = 0; i <= brandBox2.length; i++) {
//   brandFrame.removeChild(brandBox2[i])
// }
