import { Component, OnInit } from '@angular/core';

import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  faCircle = faCircle;

  skillUrl = "../../../assets/images/icons/";

  LanguageSkills = [];
  DbSkills = [];
  WebFrameworksSkills = [];
  MobileDevelopmentSkills = [];
  BasicsAndLibrarysSkills = [];
  DevopsSkills = [];
  OSSkills = [];
  ExtraSkills = [];
  
  constructor() { 

     //I DONT HAVE A BACKEND, SORRY


    //  LANGUAGES
     this.LanguageSkills = [
       {
         name: 'COBOL',
         image: this.skillUrl + 'cobol.png',
         level: 'skill-red'
       },
       {
         name: 'C sharp',
         image: this.skillUrl + 'csharp.png',
         level: 'skill-blue'
       },
       {
        name: 'PHP',
        image: this.skillUrl + 'php.png',
        level: 'skill-green'
      },
      {
        name: 'Ruby',
        image: this.skillUrl + 'ruby.png',
        level: 'skill-red'
      },
      {
        name: 'Python',
        image: this.skillUrl + 'python.png',
        level: 'skill-blue'
      },
      {
        name: 'C language',
        image: this.skillUrl + 'c.png',
        level: 'skill-blue'
      },
      {
        name: 'SWI Prolog',
        image: this.skillUrl + 'swipl.png',
        level: 'skill-blue'
      },
      {
        name: 'Java',
        image: this.skillUrl + 'java.png',
        level: 'skill-red'
      },
      {
        name: 'C++',
        image: this.skillUrl + 'cpp.png',
        level: 'skill-green'
      },
      {
        name: 'R language',
        image: this.skillUrl + 'r.png',
        level: 'skill-red'
      },
      {
        name: 'Golang',
        image: this.skillUrl + 'go.png',
        level: 'skill-blue'
      },
      {
        name: 'Kotlin',
        image: this.skillUrl + 'kotlin.png',
        level: 'skill-red'
      },
      {
        name: 'JavaScript',
        image: this.skillUrl + 'javascript.png',
        level: 'skill-green'
      },
      {
        name: 'Dart',
        image: this.skillUrl + 'dart.png',
        level: 'skill-red'
      },
      {
        name: 'Perl',
        image: this.skillUrl + 'perl.png',
        level: 'skill-red'
      },
     ];

    //  DB
     this.DbSkills = [
      {
        name: 'MySql',
        image: this.skillUrl + 'mysql.png',
        level: 'skill-green'
      },
      {
        name: 'PostgreSQL',
        image: this.skillUrl + 'postgresql.png',
        level: 'skill-red'
      },
      {
        name: 'MS SQL Server',
        image: this.skillUrl + 'sqlserver.png',
        level: 'skill-green'
      },
      {
        name: 'SQLite',
        image: this.skillUrl + 'sqlite.png',
        level: 'skill-blue'
      },
      {
        name: 'Oracle DB',
        image: this.skillUrl + 'oracle.png',
        level: 'skill-red'
      },
      {
        name: 'Mongo DB',
        image: this.skillUrl + 'mongodb.png',
        level: 'skill-green'
      },
      {
        name: 'Pouch DB',
        image: this.skillUrl + 'pouchdb.png',
        level: 'skill-red'
      },
      
    ];

    //WEB FRAMEWORKS
    this.WebFrameworksSkills = [
      {
        name: 'Django',
        image: this.skillUrl + 'django.png',
        level: 'skill-blue'
      },
      {
        name: 'Laravel',
        image: this.skillUrl + 'laravel.png',
        level: 'skill-green'
      },
      {
        name: 'Flask',
        image: this.skillUrl + 'flask.png',
        level: 'skill-blue'
      },
      {
        name: 'Node JS',
        image: this.skillUrl + 'nodejs.png',
        level: 'skill-blue'
      },
      {
        name: 'Vue',
        image: this.skillUrl + 'vuejs.png',
        level: 'skill-blue'
      },
      {
        name: 'React',
        image: this.skillUrl + 'react.png',
        level: 'skill-blue'
      },
      {
        name: 'Angular',
        image: this.skillUrl + 'angular.png',
        level: 'skill-green'
      },
      {
        name: '.NET Core',
        image: this.skillUrl + 'dotnetcore.png',
        level: 'skill-blue'
      },
    ];
    

    //MOBILE
    this.MobileDevelopmentSkills = [
      {
        name: 'Ionic',
        image: this.skillUrl + 'ionic.png',
        level: 'skill-red'
      },
      {
        name: 'Android Studio',
        image: this.skillUrl + 'androidstudio.png',
        level: 'skill-red'
      },
      {
        name: 'Flutter',
        image: this.skillUrl + 'flutter.png',
        level: 'skill-red'
      },
      {
        name: 'Progressive Web Applications',
        image: this.skillUrl + 'pwa.png',
        level: 'skill-blue'
      },
    ];

    //LIBRARYS AND BASICS

    this.BasicsAndLibrarysSkills = [
      {
        name: 'CSS3',
        image: this.skillUrl + 'css3.png',
        level: 'skill-green'
      },
      {
        name: 'HTML5',
        image: this.skillUrl + 'html5.png',
        level: 'skill-green'
      },
      {
        name: 'XML',
        image: this.skillUrl + 'xml.png',
        level: 'skill-blue'
      },
      {
        name: 'TypeScript',
        image: this.skillUrl + 'typescript.png',
        level: 'skill-green'
      },
      {
        name: 'JSON Web Token',
        image: this.skillUrl + 'jwt.png',
        level: 'skill-red'
      },
      {
        name: 'Express',
        image: this.skillUrl + 'express.png',
        level: 'skill-blue'
      },
      {
        name: 'JQuery',
        image: this.skillUrl + 'jquery.png',
        level: 'skill-green'
      },
      {
        name: 'Bootstrap 4',
        image: this.skillUrl + 'bootstrap.png',
        level: 'skill-green'
      },
      {
        name: 'Tailwind CSS',
        image: this.skillUrl + 'tailwindcss.png',
        level: 'skill-red'
      },
	   {
        name: 'SASS',
        image: this.skillUrl + 'sass.png',
        level: 'skill-blue'
      },
      {
        name: 'Materialize CSS',
        image: this.skillUrl + 'materializecss.png',
        level: 'skill-red'
      },
      {
        name: 'GraphQL',
        image: this.skillUrl + 'graphql.png',
        level: 'skill-red'
      },
	 
    ];

    this.DevopsSkills = [
      {
        name: 'Docker',
        image: this.skillUrl + 'docker.png',
        level: 'skill-red'
      },
      {
        name: 'Git',
        image: this.skillUrl + 'git.png',
        level: 'skill-blue'
      },
      {
        name: 'Firebase',
        image: this.skillUrl + 'firebase.png',
        level: 'skill-red'
      },
      {
        name: 'Heroku',
        image: this.skillUrl + 'heroku.png',
        level: 'skill-red'
      },
    ],
    this.OSSkills = [
      {
        name: 'Ubuntu (Server)',
        image: this.skillUrl + 'ubuntu.png',
        level: 'skill-red'
      },
      {
        name: 'Windows (Server)',
        image: this.skillUrl + 'windows.png',
        level: 'skill-green'
      },
      {
        name: 'Tails OS',
        image: this.skillUrl + 'tails.png',
        level: 'skill-blue'
      },
      {
        name: 'Debian (Server)',
        image: this.skillUrl + 'debian.png',
        level: 'skill-green'
      },
      {
        name: 'Kali (Security)',
        image: this.skillUrl + 'kali.png',
        level: 'skill-red'
      },
    ];

    this.ExtraSkills = [
      {
        name: 'Unity (Games)',
        image: this.skillUrl + 'unity.png',
        level: 'skill-blue'
      },
      {
        name: 'Blender (Games)',
        image: this.skillUrl + 'blender.png',
        level: 'skill-green'
      },
      {
        name: 'Photoshop 2017',
        image: this.skillUrl + 'photoshop.png',
        level: 'skill-blue'
      },
      {
        name: 'After Effects 2017',
        image: this.skillUrl + 'aftereffects.png',
        level: 'skill-blue'
      },
      {
        name: 'Visual Studio',
        image: this.skillUrl + 'visualstudio.png',
        level: 'skill-green'
      },
   
    ];
  }

  ngOnInit(): void {
    console.log(this.DbSkills);
  }

}
