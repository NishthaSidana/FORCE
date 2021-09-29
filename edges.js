class edges {
    constructor(x,y,width,height){
        var edgesoptions={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,edgesoptions)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var position=this.body.position
        push()
        rectMode(CENTER)
        fill("pink")
        rect(position.x,position.y,this.width,this.height)
        pop()
    }
    }