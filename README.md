# Exercise to apply to ioet

This is a repository for a technical interview applying javascript knowledge.
 
The description of the exercise can be found [HERE](https://github.com/Wargosh/Ejercicio-Entrevista-ioet/blob/main/EXERCISE.md), in summary it consists of reading a text file containing information of some employees and their respective entry and exit times, the logic is to determine through a program the number of times that two employees have been during the same period of time on the same day.


## Table of Contents
1. [General Information 📋](#general-information-)
2. [Installation 🛠️](#installation-%EF%B8%8F)
3. [Resolution of the exercise 🔨](#resolution-of-the-exercise-)
4. [Running the test 🔍](#running-the-test-)


## General Information 📋

This project was developed in JavaScript language and using HTML to read files using the input file element.

For this project we used the MVC architecture pattern which works in 3 different layers that allow to separate the application logic, the user interface management and the models or objects that could be useful.

You can directly try the exercise in the following [URL](https://wargosh.github.io/Ejercicio-Entrevista-ioet/), however I recommend you to pay attention to the [Exercise resolution section](#resolution-of-the-exercise-) section to understand how the exercise was solved and the format that was accepted for the exercise.

## Installation 🛠️

For a correct installation it is recommended to download all the contents of this repository (except the /img_readme folder, its only purpose is to illustrate a little better the README, so you can safely delete it). Once downloaded and unzipped you can open the project folder in your favorite code editor or IDE and located in the project path open a terminal and run the following command:

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

When you load the file with the correct format you will see something like this:

<p align="center">
  <img src="https://github.com/Wargosh/Ejercicio-Entrevista-ioet/blob/main/img_readme/cap-file-02.PNG" alt="Table with employee data"/>
</p>

If you want to view the result of matches between employees, open the browser terminal.

*In the case of the example file you will see the following result:*

<p align="center">
  <img src="https://github.com/Wargosh/Ejercicio-Entrevista-ioet/blob/main/img_readme/cap-test-01.PNG" alt="Result in the web console"/>
</p>

This way you can check the number of matches between pairs that exist within the same time period on the same day. That in addition to returning the number of matches you can also check the array that returns with the acronym of each day in which they were crossed to be able to check it manually in a faster way.

## Running the test 🔍

For the correct execution of the tests please review the installation section and with an open terminal located in the exercise folder execute the following command:

```bash
npm run test
```

This will run all the sub-extension .spec or .test files that the command finds, for the case of this exercise all the tests were placed in a file located in the path [src/tests](https://github.com/Wargosh/Ejercicio-Entrevista-ioet/tree/main/src/test) with the file name Validator.test.js.

Then when you run the command you will see something like the image below, I tried to consider all the cases where you could send misspelled parameters.

<p align="center">
  <img src="https://github.com/Wargosh/Ejercicio-Entrevista-ioet/blob/main/img_readme/cap-test-02.PNG" alt="Running tests with Jest"/>
</p>

## Author ✒️

* **Erick Jara** - [Wargosh](https://github.com/Wargosh)
