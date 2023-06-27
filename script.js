window.addEventListener('DOMContentLoaded', function () {
    let plus = document.querySelectorAll('.plus'),
        number = document.querySelectorAll('.main__product-num'),
        minus = document.querySelectorAll('.minus'),
        summa = document.querySelectorAll('.main__product-price'),
        calories = document.querySelectorAll('.main__product-kcall');


    let son = 0;
    let summ1 = 0;
    let calor1 = 0;

    let son1 = 0;
    let summ2 = 0;
    let calor2 = 0;
    let son2 = 0;
    let summ3 = 0;
    let calor3 = 0;
    plus[0].addEventListener('click', function () {
        if (number[0] == son) {
            son = 0
            summ1 = 0
            calor1 = 0
        }
        else {
            son++
            summ1 += 10000
            calor1 += 400
        }
        number[0].textContent = `${son}`;
        summa[0].textContent = `${summ1} sum`;
        calories[0].textContent = `${calor1} calories `;
    });
    minus[0].addEventListener('click', function () {
        if (son == 0) {
            son = 0
            summ1 = 0
            calor1 = 0
        }
        else {
            son--
            summ1 -= 10000
            calor1 -= 400
        }
        number[0].textContent = `${son}`;
        summa[0].textContent = `${summ1} sum`;
        calories[0].textContent = `${calor1} calories `;
    });
    plus[1].addEventListener('click', function () {
        if (number[1] == son1) {
            son1 = 0
            summ2 = 0
            calor2 = 0
        }
        else {
            son1++
            summ2 += 20500
            calor2 += 400
        }
        number[1].textContent = `${son1}`;
        summa[1].textContent = `${summ2} sum`;
        calories[1].textContent = `${calor2} calories `;
    });
    minus[1].addEventListener('click', function () {
        if (son == 0) {
            son1 = 0
            summ2 = 0
            calor2 = 0
        }
        else {
            son1--
            summ2 -= 20500
            calor2 -= 400
        }
        number[1].textContent = `${son1}`;
        summa[1].textContent = `${summ2} sum`;
        calories[1].textContent = `${calor2} calories `;
    });
    plus[2].addEventListener('click', function () {
        if (number[2] == son1) {
            son2 = 0
            summ3 = 0
            calor3 = 0
        }
        else {
            son2++
            summ3 += 20500
            calor3 += 400
        }
        number[2].textContent = `${son2}`;
        summa[2].textContent = `${summ3} sum`;
        calories[2].textContent = `${calor3} calories `;
    });
    minus[2].addEventListener('click', function () {
        if (son == 0) {
            son = 0
            summ1 = 0
            calor1 = 0
        }
        else {
            
            son--
            summ1 -= 20500
            calor1 -= 400
        }
        number[2].textContent = `${son}`;
        summa[2].textContent = `${summ1} sum`;
        calories[2].textContent = `${calor1} calories `;
    });


    let card = document.querySelector('.addCart'),
        pays = document.querySelector('.receipt'),
        burger5 = document.querySelector('.burger1'),
        burger4 = document.querySelector('.burger2'),
        burger = document.querySelector('.burger3');
         summ1 = document.querySelector('.summa'),
        calr = document.querySelector('.calors'),
        paydbtn = document.querySelector('.receipt__window-btn');

        card.addEventListener('click',function(){
            pays.style.display = 'block'
            burger5.textContent= `burger ${son} ta`
            burger4.textContent=`gamburger fresh ${son1} ta`
            burger.textContent=`gamburger  ${son2} ta`
            summ1.textContent = summ1+summ2+summ3
            calr.textContent =calor1+calor2+calor3
        })
        paydbtn.addEventListener(`click`,function(){
            alert('xaridingiz uchun raxmat:)')
            location.reload()
             
        })
    })
    
 