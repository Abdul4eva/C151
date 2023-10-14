// Registering component in log-component.js
AFRAME.registerComponent('move-box', {
    schema: {
      moveX: {type: 'number', default: 1},
    },
    tick: function () {
       this.data.moveX = this.data.moveX+0.01
    var pos=this.e1.getAttribute("position")
    pos.x=this.data.moveX
    this.e1.setAttribute("position",{x:pos.x, y:pos.y, z:pos.z})
      }
  });

