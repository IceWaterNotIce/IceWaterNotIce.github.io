# Unity - Dynamic Shader - Scanline Effect

## Effect you will get

![alt text](gif-1.gif)

## Steps

1. Create a new Unity project with Universal 3D.
![alt text](image-4.png)
1. In Project assets Folder, Right click "Create > Shader Graph > BuiltIn > Lit Shader Graph" and name as "Scanline".
![alt text](image.png)
![alt text](image-1.png)
1. Create or import a model to scene, and assign the material to it.
![alt text](image-6.png)
1. Open the "Scanline" shader graph editor.
![alt text](image-7.png)
1. Create new nodes
    1. "Input > Geometry > Position"
    1. "Channel > Split"
    1. "Math > Basic > Multiply"
    1. "Math > Range > Fraction"
1. Connect the nodes as shown below.
![alt text](image-8.png)
1. save asset
![alt text](image-9.png)
now you can see the scanline effect on the model.
![alt text](image-10.png)
1. Create new nodes
    1. "Input > Basic > Time"
    1. "Math > Basic > Multiply"
    1. "Math > Basic > Add"
1. Connect the nodes as shown below.
![alt text](image-11.png)
1. save asset
![alt text](image-9.png)
now you can see the scanline effect on the model.
![alt text](gif.gif)
1. Create new nodes
    1. "Input > Basic > Power"
    1. "Input > Basic > Color"
    1. "Math > Basic > Multiply"
1. Connect the nodes as shown below.
![alt text](image-12.png)
1. save asset
![alt text](image-9.png)
now you can see the scanline effect on the model.
![alt text](gif-1.gif)
