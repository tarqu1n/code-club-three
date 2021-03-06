# Running
> `npm install`
> `npm run dev`

# Tutorial

## Basic Setup

Three, requires a **scene** to hold 3d objects, a **camera** to give the user a view into the scene and a **renderer** to draw the objects in the scene from the persective of the camera.

A main loop, or render loop, is created which draws the scene over and over so any changes can be seen. 

## Geometry Basics

All Geometry is made up of 3 things; **vertices** are a set of points in the space of a coordinate system, **edges** are lines which connect vertices together and **faces** are 2d planes which fill the space between 3 or more edges. N.B ThreeJs only uses exactly 3 edges per face (triangles) but other programs also use quads or ngons.

Geometrical objects can be place in the scene but without information about how the geometry should be displayed they will not be visible. As such we must assign a **material** to tell the renderer how the geometry of the object should be displayed. The combination of geometry and material is called a **mesh**

All faces must also have a **normal**, a vector perpendicular to the plane on which the face lies. for example a face in the x, y plane then its face normal will be a Vector3(0, 0, 1). Face normals allow the plane to be shaded correctly, a plane which is exactly facing a light source will be brighter than one which is at a 45deg angle to it.

## Raycasting

Raycasting is the process of creating a line in 3d space and checking if the any of the coordinates along that line intersect any objects within that space. This is used to interact with objects within the scene.

## TODO
- Non basic materials and lighting
- Movement and animation

## Step through
1. Walk through scene setup.
2. Look a the basics of geometry.
3. Show how a cube is constructed from its vertices and faces.
4. Show use of position, scale and rotation with cubes through implementation of a cube factory.
5. Show raycasting and how elaborate on how it can be used interact with 3d space from 2d space
6. Show basic orbiting camera through use of pythagoras

Challenge for next code club is to take a fork of the repo and use Scene2 to make model of the solar system viewed from the top down. 
Tip: Scene objects can be attached as children to other objects, any transformation made to a parent will also effect a child. https://threejs.org/docs/#api/en/core/Object3D.add