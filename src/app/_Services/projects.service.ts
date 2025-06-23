import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    { id: 0,
      name: "CPU cooling",
      pictures: ["../../assets/fancontrol1.jpg","../../assets/fancontrol2.png","../../assets/fancontrol3.png"],
      projectLink: "https://github.com/YowoSK/regulator",
      summary: "Raspberry pi regulator for active cooling of procesor based on tempreture.",
      description: "This project involves the creation of an active cooling system for a Raspberry Pi. The process began with the acquisition of various components, including a resistor, cables, a transistor, pin cables, a fan, and a small board. These components were carefully soldered together to form the hardware part of the cooling system. The software part of the system is managed by a Python script. This script is responsible for regulating the temperature of the CPU. It does this by controlling the speed of the fan mounted on the Raspberry Pi. When the CPU temperature rises, the script increases the fan speed to cool it down, and when the CPU temperature drops, it decreases the fan speed. This combination of hardware and software results in an efficient active cooling system that prevents the Raspberry Pi from overheating, ensuring optimal performance at all times.",
      tags: [Tag.PYTHON, Tag.LINUX, Tag.RASPBERRY]},
    // { id: 1,
    //   name: "Face Mask detector",
    //   pictures: ["../../assets/image2.png","../../assets/image2.png","../../assets/image2.png"],
    //   projectLink: "linkGIT",
    //   summary: "A Python project that detect if a person is wearing a face mask or not.",
    //   description: "This project is made in Python and uses OpenCV to capture and process images and videos from the camera. The project also uses Keras, TensorFlow, or PyTorch to build and train a convolutional neural network (CNN) model that can classify the images as with_mask or without_mask. The project can perform face mask detection on real-time video streams or on new images. The project is inspired by the DataFlair and GeeksforGeeks tutorials on face mask detection.",
    //   tags: [Tag.PYTHON, Tag.OPENCV]},
    // TODO
    {
      id: 2,
      name: "Codergames",
      pictures: [],
      projectLink: "https://gitlab.kosickaakademia.sk/dtits",
      summary: "CoderGames is a project made by a group of students from KASV for DTIS.",
      description: "The project was created by students from KASV to enhance their collaboration and programming skills. This project was built using Angular with a Bootstrap front-end.",
      tags: [Tag.ANGULAR, Tag.COLLABORATION]
    },
    { id: 3,
      name: "Password generator",
      pictures: ["../../assets/generator1.png","../../assets/generator2.png"],
      projectLink: "https://github.com/YowoSK/PasswordGenerator",
      summary: "Tool made for creating strong passwords for online accounts and services.",
      description: "Password Generator allows the user to set the length of the password and choose whether to include numbers, uppercase letters, and special characters. The application also displays the generated password in a text field that can be copied to the clipboard.",
      tags: [Tag.JAVA]},
    { id: 4,
      name: "Sudoku game",
      pictures: ["../../assets/sudoku1.png","../../assets/sudoku2.png"],
      projectLink: "http://www.yowo.sk/sudoku/sudoku.html",
      summary: "This project involves the creation of a Sudoku game that can be played in browser.",
      description: "This project involves the creation of a Sudoku game that can be played in a web browser. The game board is generated using JavaScript and styled with CSS to provide a visually appealing and intuitive interface. The game includes a timer to track the time taken to solve the puzzle, a counter to keep track of wrong attempts, and an auto-solve button.",
      tags: [Tag.HTMLCSS, Tag.JAVASCRIPT]},
    { id: 5,
      name: "Calculator",
      pictures: ["../../assets/calculator1.png","../../assets/calculator2.png"],
      projectLink: "http://yowo.sk/calculator/calc.html",
      summary: "A web-based calculator that can perform basic arithmetic operations.",
      description: "This project is made in HTML, CSS, and JavaScript and uses the DOM manipulation and event handling features to create a user-friendly interface for a calculator. The project can perform addition, subtraction, multiplication and division calculations on user input. The project also displays the current expression and the result on the screen.",
      tags: [Tag.JAVASCRIPT, Tag.HTMLCSS]},
    { id: 6,
      name: "Pexeso app",
      pictures: ["../../assets/pexeso1.png","../../assets/pexeso2.png","../../assets/pexeso3.png"],
      projectLink: "https://github.com/YowoSK/Android-Pexeso",
      summary: "An engaging memory matching game designed for Android.",
      description: "The Pexeso app is a memory matching game that challenges players to find pairs of identical cards. Developed using kotlin (java) for Android devices, the app offers a user-friendly interface, multiple difficulty levels, and a variety of themes to keep the gameplay fresh and engaging.",
      tags: [Tag.JAVA, Tag.ANDROID]},
      { id: 7,
        name: "SSD Destroyer",
        pictures: ["../../assets/destroyer1.png"],
        projectLink: "https://github.com/YowoSK/SSD-Terminator/tree/main",
        summary: "Tool for testing the lifespan of an SSD, works by repeatedly writing and deleting a file.",
        description: "This repository contains a Python script for testing the lifespan of an SSD. The script works by repeatedly writing and deleting a file, simulating typical disk usage.",
        tags: [Tag.PYTHON]},
      {
        id: 8,
        name: "TS5 Homebase Stress Test",
        pictures: ["../../assets/teamspeak1.png"],
        projectLink: "https://community.teamspeak.com/t/ts5-homebase-community-test-exclusive-badge/36418",
        summary: "Event to stress test the new TeamSpeak 5 Homebase feature.",
        description: "The aim is to gather performance data for the Homebase feature in the TeamSpeak client. Participants will follow specific actions and instructions to help improve the functionality of the feature. The participants’ output is a file that contains details of the test results.",
        tags: [Tag.TESTING]
      },
      {
        id: 9,
        name: "Hackathon 2023",
        pictures: ["../../assets/hackaton1.png"],
        projectLink: "https://github.com/TELIT-Hackathon2023/6-kasv",
        summary: "This is a project that contains part of the TELIT-Hackathon2023.",
        description: "The project is part of TELIT-Hackathon2023’s collaborative software development effort. The project, which is built in React, has the functionality to compare PDF files and determine congruence in the meaning of the PDFs. This tool is designed to make the job of DTIS sales employees easier.",
        tags: [Tag.COLLABORATION, Tag.REACT]
      },
      {
        id: 10,
        name: "ASQ it",
        pictures: [],
        projectLink: "https://github.com/YowoSK/asqit",
        summary: "ASQ it is a web game that present quiz questions dynamically.",
        description: "ASQ it is a web quiz that allows users to manage and present quiz questions. It features a SQLite database for storing questions, an Express.js server for handling requests, and a front-end interface for users to interact with the quiz.",
        tags: [Tag.HTMLCSS, Tag.JAVASCRIPT, Tag.SQLITE,]
      },
      {
        id: 11,
        name: "Hackathon 2024",
        pictures: [],
        projectLink: "https://github.com/YowoSK/Hackaton24-VICTUS-3",
        summary: "This is a project that contains part of the TELIT-Hackathon2024.",
        description: "VICTUS-VALIDATOR is a comprehensive web-based platform developed during a hackathon to streamline document validation and enhancement, enabling users to extract text from PDFs, validate documents against templates, and generate autofill suggestions for incomplete sections. It features a robust backend powered by Flask and OpenAI's language model.",
        tags: [Tag.REACT, Tag.PYTHON, Tag.COLLABORATION]
      }
  ];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);
    if(project === undefined){
      throw new TypeError('Project with id:' + id + 'has not been find')
    }
    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project){
      let foundAll = true;

      filterTags.forEach(function (filterTag){
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
