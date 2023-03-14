//Modal buy ticket
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

modal.addEventListener('click', () => modal.classList.remove('open'));
modalClose.addEventListener('click', () => modal.classList.remove('open'));
modalContainer.addEventListener('click', e => e.stopPropagation());
buyBtns.forEach(btn => btn.addEventListener('click', () => modal.classList.add('open')));






/**
        function showBuyTicket() {
            modal.classList.add('open')
        }
 
        function hiddenBuyTicket() {
            modal.classList.remove('open')
        }
 
        //      Vì buyBtn dùng querySelectorAll nên sẽ trả ra 1 danh sách
        //      Vì vậy cần sử dụng vòng lặp để lắng nghe sự kiện `click` của từng button
 
        for (let buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTicket)
        }
        modalClose.addEventListener('click', hiddenBuyTicket)
        modal.addEventListener('click', hiddenBuyTicket)
 
        
                Khi click vào 1 element (con) buyBtn,modalClose của 1 element (cha) modal container
                thì các thẻ bao ngoài(cha,ông,cụ) cũng bị ảnh hưởng(bật,tắt).
 
                Trong trường hợp này: khi click vào thẻ buyBtn để thực hiện hành động close event
                thì thẻ (cha) modal cũng nghe được sự kiện nên cũng sẽ tắt.
                Để ngăn chặn hành vi này(tắt event) chỉ nổi bọt đến thẻ modalContainer
                ta sẽ dùng phương thức stopPropagation()
 

        modalContainer.addEventListener('click', function (e) {
            e.stopPropagation();
        });
*/


// Menu bar header

let header = document.getElementById('header');
let mobileMenu = document.querySelector('.mobile-menu-btn');
let headerHeight = header.clientHeight;

mobileMenu.addEventListener('click', () => {
    let isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
});

// Auto close when choose menu bar

let menuItems = document.querySelectorAll('#nav li a[href*="#"]');
let menuItem = menuItems.forEach((data) => {

    if (data.nextElementSibling === null) {
        data.addEventListener('click', () => {
            header.style.height = null;
        })

    } else {
        data.addEventListener('click', (e) => {
            e.preventDefault();
        });

    }

})

// Cách 2:
// let menuItem = menuItems.forEach((data) => {

//     let isParentMenu =
//         data.nextElementSibling && data.nextElementSibling.classList.contains('subnav');

//     if (!isParentMenu) {
//         data.addEventListener('click', () => {
//             header.style.height = null;
//         })
//     } else {
//         data.addEventListener('click', (e) => {
//             e.preventDefault();
//         })
//     }
// })


// let elements = document.querySelectorAll('.list-item');
// elements.forEach(element => {
//   element.addEventListener('click', function() {
//     element.parentNode.removeChild(element);
//   });
// });



// modal.addEventListener('click', () => modal.classList.remove('open'));
// modalClose.addEventListener('click', () => modal.classList.remove('open'));
// modalContainer.addEventListener('click', e => e.stopPropagation());
// buyBtns.forEach(btn => btn.addEventListener('click', () => modal.classList.add('open')));




// let subNav = document.querySelector('#nav li .subnav');
// subNav.addEventListener('click', (subNav) => subNav.classList.add('open'));



// for(let i=0; i<3;i++) {
//     setTimeout(()=>{
//         console.log(i);
//     },0)
// }


// function creCounter (){
//     let counter = 0;
//     function tanglen () {
//         return ++counter;
//     }
//     return tanglen;
// }

// let dem1= creCounter();

// console.log(dem1());
// console.log(dem1());
// console.log(dem1());


