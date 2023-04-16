AFRAME.registerComponent("drive",{
    schema:{
        moveX:{type:"number",default:1},
    },
    tick:function(){
       
        this.data.moveX=this.data.moveX+1
        var pos=this.el.getAttribute("position")
        pos.x=this.data.moveX
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
       
    },
    update:function(){
        window.addEventListener("click",(e)=>{
            this.data.clickCounter+1;
            if (this.data.clickCounter === 1) {
                const rotation = { x: -90, y: 20, z: 180 };
                this.el.setAttribute("rotation", rotation);
              } else if (this.data.clickCounter === 2) {
                const rotation = { x: -90, y: 100, z: 180 };
                this.el.setAttribute("rotation", rotation);
              } else if (this.data.clickCounter === 3) {
                const rotation = { x: -90, y: -200, z: 180 };
                this.el.setAttribute("rotation", rotation);
              } else if (this.data.clickCounter === 4) {
                const rotation = { x: -90, y: -100, z: 180 };
                this.el.setAttribute("rotation", rotation);
                const cameraEl = document.querySelector("#camera");
                const position = { x: -90, y: 195, z: 180 };
                cameraEl.setAttribute("position", position);
              } else {
                const rotation = { x: -90, y: -100, z: 180 };
                this.el.setAttribute("rotation", rotation);
                const cameraEl = document.querySelector("#camera");
                const position = { x: -90, y: 50, z: 180 };
                cameraEl.setAttribute("position", position);
                this.data.clickCounter = 0;
              }
        })
    }
})