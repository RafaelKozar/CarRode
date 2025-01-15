myCanvas.height = window.innerHeight;
myCanvas.width = 200; 

const ctx = myCanvas.getContext('2d');
const road = new Road(myCanvas.width/2, myCanvas.width*0.9);
const car = new Car(road.getLaneCenter(0), 100, 30, 50);


animate();

function animate(){
    car.update();
    myCanvas.height = window.innerHeight;    
    ctx.save();
    ctx.translate(0, -car.y);    
    road.draw(ctx);
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}
