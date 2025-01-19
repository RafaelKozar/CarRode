class Road{
    constructor(x, width, laneCount=3){
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;
        this.left=x-width/2;
        this.right=x+width/2;

        const infinity=1000000;
        this.top=-infinity; 
        this.bottom=infinity;
        this.lineDashNumber = 20;

        const topLeft = {x:this.left, y:this.top};
        const topRight = {x:this.right, y:this.top};
        const bottomLeft = {x:this.left, y:this.bottom};
        const bottomRight = {x:this.right, y:this.bottom};
        this.borders = [
            [topLeft],
            [topRight]
        ]

        for(let y = -1000; y <= 0; y++){
            const x = Math.sin(y*0.01)*50;  
            this.borders[0].push({x:this.left+x, y:y});
            this.borders[1].push({x:this.right+x, y:y});    
        }
    }

    getLaneCenter(laneIndex){
        const laneWidth = this.width/this.laneCount;
        const index = Math.min(laneIndex, this.laneCount-1);   

        return this.left+laneWidth/2+index*laneWidth;
    }

    draw(ctx){
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        // ctx.setLineDash([this.lineDashNumber, this.lineDashNumber]);
        // for(let i=1; i <= this.laneCount-1; i++){
        //     ctx.beginPath();
        //     const x = lerp(this.left, this.right, i/this.laneCount);
            
        //     ctx.moveTo(x, this.top);
        //     ctx.lineTo(x, this.bottom);
        //     ctx.stroke();
        // }

        ctx.setLineDash([]);
        this.borders.forEach(border => {
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            for(let i = 1; i<border.length; i++){
                ctx.lineTo(border[i].x, border[i].y);
            }
            
            ctx.stroke();
        })
    }
}

 