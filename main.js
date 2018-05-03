var w = window.innerWidth,
    h = window.innerHeight

// Scene
var scene = new THREE.Scene()

// Object(s)
var geo = new THREE.BoxGeometry( 1, 1, 1 ),
    mat = new THREE.MeshLambertMaterial( { color: 0xff0000 } )
    cube = new THREE.Mesh( geo, mat )
scene.add(cube)

// Lights
var hlight = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 )
scene.add( hlight )

// Camera
var camera = new THREE.PerspectiveCamera(
    70,     // field of view (FOV) in degrees
    w / h,  // aspect ratio
    0.1,    // near clipping plane
    1000    // far clipping plane
)
camera.position.set(0,2,2)
camera.lookAt(scene.position)

// Action!
var renderer = new THREE.WebGLRenderer( { antialias:true, alpha:true } )
renderer.setSize( w, h )
document.body.appendChild( renderer.domElement ) // add to DOM
function animate() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render( scene, camera )
    requestAnimationFrame( animate )
}
animate()