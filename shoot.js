AFRAME.registerComponent("bullets", {
    init: function(){
        this.shootBullet()
    },

    shootBullet: function(){
        window.addEventListener("keydown", (e) => {
            if (e.key === "z"){
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry", {
                    primitive: "sphere",
                    radius: 0.05
                })
            bullet.setAttribute("material", "color", "black")
            var cam = document.querySelector("#camera")
            pos = cam.getAttribute("position")
            bullet.setAttribute("position", {
                x: pos.x,
                y: pos.y,
                z: pos.z
            })
            bullet.setAttribute("velocity", {
                x: 0,
                y: 0,
                z: -1
            })
            var camera = document.querySelector("#camera").object3D
            var direction = new THREE.Vector3()
            camera.getWorldDirection(direction)
            console.log(direction)
            bullet.setAttribute("velocity", direction.multiplyScalar(-10))
            var scene = document.querySelector("#scene")
            scene.appendChild(bullet)
            }
        })
    }
})