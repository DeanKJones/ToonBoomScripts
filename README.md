# ToonBoomScripts

Adding Scripts
--
  ```
  Windows -> Script Editor:
  File -> Import Script -> locate the downloaded .js file and add it.
  ```
  ```
  Navigate to the scene location on your harddrive. Copy the .js file into the scripts folder. 
  Open the script editor window in Toon Boom. The script should appear in the list of scripts. 
  Its Location should show "Scene"
  ```
  
Running Scripts
--
```
  Locate the script in the list. 
  Click Play/Debug -> Run and select the desired function.
```

TB_SetSceneForColor
--
A custom script to automate the scene set up for Color Art. Running the setSceneToColor() function will:
```
Duplicate pencil strokes onto the Overlay Layer
Convert the Line Art Layer strokes from Pencil to Brush
Create Color Art from Line Art
```
The user will be promted with an input to choose the Element Layer the script will run on. The user will need to type out the name of the layer then run the script.
All frames will be prepared.
  
