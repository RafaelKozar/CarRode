myCanvas.height = window.innerHeight;
myCanvas.width = 200; 

const ctx = myCanvas.getContext('2d');
const road = new Road(myCanvas.width/2, myCanvas.width*0.9);
const car = new Car(100, 100, 30, 50);


animate();

function animate(){
    myCanvas.height = window.innerHeight;
    car.update();
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}
