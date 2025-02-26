class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.accelaration = 0.2;
        this.maxSpeed = 3;
        this.friction=0.05;
        this.angle = 0;        

        this.controls = new Controls();
    }

    update(){
        if(this.controls.forward){
            this.speed += this.accelaration;
        }
      
        if(this.controls.reverse){
            this.speed -= this.accelaration;
        }

    

        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }

        if(this.speed < -this.maxSpeed/2){
            this.speed = -this.maxSpeed/2;
        }

        if(this.speed > 0){
            this.speed -= this.friction;
        }

        if(this.speed < 0){
            this.speed += this.friction;
        }

        if (this.speed != 0) {
            const flip = this.speed < 0 ? -1 : 1;
            //flip *= -1;
            if (this.controls.left) {
                this.angle += 0.03 * flip;
            }

            if (this.controls.right) {
                this.angle -= 0.03 * flip;
            }
        }

        if(Math.abs(this.speed) < this.friction){
            this.speed = 0;
        }

        this.x -= this.speed * Math.sin(this.angle);
        this.y -= this.speed * Math.cos(this.angle);
        //this.y -= this.speed; //* Math.sin(this.angle);
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y,
            this.width,
            this.height 
        )
        ctx.fillStyle = "blue"; 

        ctx.fill();
        ctx.closePath();
        ctx.save(); 
        ctx.translate(this.x, this.y);  
        ctx.rotate(-this.angle); 
        ctx.beginPath();
        ctx.fillStyle = "black";
        
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        )
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(this.width/2, this.height/2, 10, 0, Math.PI*2);
        
        ctx.arc(-this.width/2, -this.height/2, 10, 0, Math.PI*2);
        
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.fillStyle = "red";

        ctx.arc(0, 0, 10, 0, Math.PI*2);

        ctx.fill();
        ctx.restore();
    }
}