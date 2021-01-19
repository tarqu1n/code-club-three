# Running
> `npm install`
> `npm run dev`

# Tutorial

## Basic Setup

Three, requires a **scene** to hold 3d objects, a **camera** to give the user a view into the scene and a **renderer** to draw the objects in the scene from the persective of the camera.

A main loop, or render loop, is created which draws the scene over and over so any changes can be seen.

## Geometry Basics

All Geometry is made up of 3 things; **vertices** are a set of points in the space of a coordinate system, **edges** are lines which connect vertices together and **faces** are 2d planes which fill the space between 3 or more edges. N.B ThreeJs only uses exactly 3 edges per face (triangles) but other programs also use quads or ngons.

Geometical objects can be place in the scene but without information about how the geometry should be displayed they will not be visible. As such we must assign a **material** to tell the renderer how the geometry of the object should be displayed.


##TODO
- Non basic materials and lighting
- Movement and animation