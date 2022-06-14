# Ejercicio ioet
 This is a repository for a technical interview applying javascript knowledge.

<!--
## Table of Contents
1. [Información General](#información-general)
2. [Tecnologías](#tecnologías)
3. [Instalación](#instalación)
4. [Colaboradores](#colaboradores)
-->

## General Information 📋

This project was developed in JavaScript language and using HTML to read files using the input file element.

For this project we used the MVC architecture pattern which works in 3 different layers that allow to separate the application logic, the user interface management and the models or objects that could be useful.

## Installation 🛠️

For a correct installation it is recommended to download all the content of this repository. Once downloaded and unzipped you can open the project folder in your favorite code editor or IDE and located in the project path open a terminal and run the following command:

```bash
npm install
```

This will download all the development dependencies needed to correctly run the tests that were performed within the project using Jest.

## Resolution of the exercise 🔨

For the resolution of this exercise the JavaScript language was chosen, to divide more specifically the objective to be fulfilled by each script, an architecture was implemented using the MVC pattern and in this way the code could be easier to maintain.

The correct format that was used as a test for the creation of the .txt file is the same that was suggested as an example in the post, several files of this type were created (one correct and several with errors) to check that the program complies with the internal validations that were defined, these files can be found in the folder [src/files](https://github.com/Wargosh/Ejercicio-Entrevista-ioet/tree/main/src/files).

*If you are trying to test with a manually created file, here is a screenshot of what the correct file format looks like.*

<p align="center">
  <img src="https://github.com/Wargosh/Ejercicio-Entrevista-ioet/blob/main/img_readme/cap-file-01.png?raw=true" alt="Correct format file"/>
</p>

*or you can copy the format and change the values*

```
RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU21:00-23:00
ASTRID=MO10:00-12:00,WE10:00-14:00,TH13:00-15:00,SU20:00-21:00
ANDRES=MO10:00-12:00,TU08:15-10:30,TH11:00-13:00,SU18:00-22:45
JUAN=MO10:30-11:00,WE12:00-15:00,FR14:00-20:00,SA15:30-19:00,SU15:00-20:00
ANA=MO07:30-11:00,WE07:00-11:00,FR18:00-22:00,SA15:30-19:00,SU16:10-20:00
```

## Running the test 🔍

For the correct execution of the tests please review the installation section and with an open terminal located in the exercise folder execute the following command:

```bash
npm run test
```

This will run all the sub-extension .spec or .test files that the command finds, for the case of this exercise all the tests were placed in a file located in the path [src/tests](https://github.com/Wargosh/Ejercicio-Entrevista-ioet/tree/main/src/test) with the file name Validator.test.js.

## Author ✒️

* **Erick Jara** - [Wargosh](https://github.com/Wargosh)
