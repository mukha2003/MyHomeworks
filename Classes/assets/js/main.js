// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.


class Circle{
    constructor(radius){
        this.radius = radius;
    }

    draw = function(){
        let div = document.createElement('div');
        div.style.width = this.radius * 2 +'px';
        div.style.height = this.radius * 2 +'px';
        div.style.backgroundColor = "orange";
        div.style.borderRadius = '50%';
        document.getElementById('circle').innerHTML = '';
        document.getElementById('circle').append(div);
    }

    /**
     * @param {number} new_radius
     */
    set setRadius(new_radius){
        this.radius = new_radius;
    }

    get circleRadius(){
        return this.radius;
    }
    get circleDiameter(){
        return this.radius*2;
    }

    _area = function (radius){
        return (Math.PI*(Math.pow(radius,2))).toFixed(2);
    }

    _circleWidth = function(radius){
        return ((2*Math.PI)*radius).toFixed(2);
    }
}

function chowCircle(){     
    let r = +document.getElementById('rad').value;      
    let circle2 = new Circle(r);
    circle2.draw();   
    printInfo(circle2);
    document.getElementById('rad').value = ""; 
}

function printInfo (circle2){
    let circleInfo = {
        radius: circle2.circleRadius,
        diameter: circle2.circleDiameter,
        area: circle2._area(circle2.radius),
        length: circle2._circleWidth(circle2.radius)
    }
    let html = '<ul>';
    for(let k in circleInfo){
        html += `<li> ${k}: ${circleInfo[k]}</li>`;        
        document.getElementById('info').innerHTML = html;
    }
    html += '</ul>';
}

const circleKey = document.getElementById('rad');

circleKey.addEventListener('keyup', function(e){
    if(e.key=="Enter"){
        chowCircle();
    }
  });