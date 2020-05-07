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

  LanguageSkills = [];
  DbSkills = [];
  WebFrameworksSkills = [];
  MobileDevelopmentSkills = [];
  BasicsAndLibrarysSkills = [];
  OSSkills = [];
  ExtraSkills = [];
  constructor() { 

     //I DONT HAVE A BACKEND, SORRY


    //  LANGUAGES
     this.LanguageSkills = [
       {
         name: 'C sharp',
         image: '../../../assets/images/icons/csharp.png',
         level: 'skill-blue'
       },
       {
        name: 'PHP',
        image: '../../../assets/images/icons/php.png',
        level: 'skill-green'
      },
      {
        name: 'Ruby',
        image: '../../../assets/images/icons/ruby.png',
        level: 'skill-red'
      },
      {
        name: 'Python',
        image: '../../../assets/images/icons/python.png',
        level: 'skill-blue'
      },
      {
        name: 'C language',
        image: '../../../assets/images/icons/c.png',
        level: 'skill-blue'
      },
      {
        name: 'SWI Prolog',
        image: '../../../assets/images/icons/swipl.png',
        level: 'skill-blue'
      },
      {
        name: 'Java',
        image: '../../../assets/images/icons/java.png',
        level: 'skill-red'
      },
      {
        name: 'C++',
        image: '../../../assets/images/icons/cpp.png',
        level: 'skill-green'
      },
      {
        name: 'R language',
        image: '../../../assets/images/icons/r.png',
        level: 'skill-red'
      },
      {
        name: 'Golang',
        image: '../../../assets/images/icons/go.png',
        level: 'skill-red'
      },
      {
        name: 'JavaScript',
        image: '../../../assets/images/icons/javascript.png',
        level: 'skill-green'
      },
      {
        name: 'Dart',
        image: '../../../assets/images/icons/dart.png',
        level: 'skill-red'
      },
      {
        name: 'Perl',
        image: '../../../assets/images/icons/perl.png',
        level: 'skill-red'
      },
     ];

    //  DB
     this.DbSkills = [
      {
        name: 'MySql',
        image: '../../../assets/images/icons/mysql.png',
        level: 'skill-green'
      },
      {
        name: 'PostgreSQL',
        image: '../../../assets/images/icons/postgresql.png',
        level: 'skill-red'
      },
      {
        name: 'MS SQL Server',
        image: '../../../assets/images/icons/sqlserver.png',
        level: 'skill-green'
      },
      {
        name: 'SQLite',
        image: '../../../assets/images/icons/sqlite.png',
        level: 'skill-blue'
      },
      {
        name: 'Oracle DB',
        image: '../../../assets/images/icons/oracle.png',
        level: 'skill-red'
      },
      {
        name: 'Mongo DB',
        image: '../../../assets/images/icons/mongodb.png',
        level: 'skill-green'
      },
      
    ];

    //WEB FRAMEWORKS
    this.WebFrameworksSkills = [
      {
        name: 'Django',
        image: '../../../assets/images/icons/django.png',
        level: 'skill-blue'
      },
      {
        name: 'Laravel',
        image: '../../../assets/images/icons/laravel.png',
        level: 'skill-green'
      },
      {
        name: 'Flask',
        image: '../../../assets/images/icons/flask.png',
        level: 'skill-blue'
      },
      {
        name: 'Node JS',
        image: '../../../assets/images/icons/nodejs.png',
        level: 'skill-blue'
      },
      {
        name: 'Vue',
        image: '../../../assets/images/icons/vuejs.png',
        level: 'skill-blue'
      },
      {
        name: 'React',
        image: '../../../assets/images/icons/react.png',
        level: 'skill-blue'
      },
      {
        name: 'Angular',
        image: '../../../assets/images/icons/angular.png',
        level: 'skill-green'
      },
    ];
    

    //MOBILE
    this.MobileDevelopmentSkills = [
      {
        name: 'Ionic',
        image: '../../../assets/images/icons/ionic.png',
        level: 'skill-red'
      },
      {
        name: 'Android Studio',
        image: '../../../assets/images/icons/androidstudio.png',
        level: 'skill-red'
      },
      {
        name: 'Flutter',
        image: '../../../assets/images/icons/flutter.png',
        level: 'skill-red'
      }
    ];

    //LIBRARYS AND BASICS

    this.BasicsAndLibrarysSkills = [
      {
        name: 'CSS3',
        image: '../../../assets/images/icons/css3.png',
        level: 'skill-green'
      },
      {
        name: 'HTML5',
        image: '../../../assets/images/icons/html5.png',
        level: 'skill-green'
      },
      {
        name: 'TypeScript',
        image: '../../../assets/images/icons/typescript.png',
        level: 'skill-green'
      },
      {
        name: 'Express',
        image: '../../../assets/images/icons/express.png',
        level: 'skill-blue'
      },
      {
        name: 'JQuery',
        image: '../../../assets/images/icons/jquery.png',
        level: 'skill-green'
      },
      {
        name: 'Bootstrap 4',
        image: '../../../assets/images/icons/bootstrap.png',
        level: 'skill-green'
      },
      {
        name: 'Tailwind CSS',
        image: '../../../assets/images/icons/tailwindcss.png',
        level: 'skill-red'
      },
	   {
        name: 'SASS',
        image: '../../../assets/images/icons/sass.png',
        level: 'skill-blue'
      },
      {
        name: 'Materialize CSS',
        image: '../../../assets/images/icons/materializecss.png',
        level: 'skill-red'
      },
      {
        name: 'GraphQL',
        image: '../../../assets/images/icons/graphql.png',
        level: 'skill-red'
      },
	   {
        name: 'Progressive Web Applications',
        image: '../../../assets/images/icons/pwa.png',
        level: 'skill-red'
      },
    ];

    this.OSSkills = [
      {
        name: 'Ubuntu (Server)',
        image: '../../../assets/images/icons/ubuntu.png',
        level: 'skill-red'
      },
      {
        name: 'Windows (Server)',
        image: '../../../assets/images/icons/windows.png',
        level: 'skill-green'
      },
      {
        name: 'Tails OS',
        image: '../../../assets/images/icons/tails.png',
        level: 'skill-blue'
      },
      {
        name: 'Debian (Server)',
        image: '../../../assets/images/icons/debian.png',
        level: 'skill-green'
      },
      {
        name: 'Kali (Security)',
        image: '../../../assets/images/icons/kali.png',
        level: 'skill-red'
      },
    ];

    this.ExtraSkills = [
      {
        name: 'Unity (Games)',
        image: '../../../assets/images/icons/unity.png',
        level: 'skill-blue'
      },
      {
        name: 'Blender (Games)',
        image: '../../../assets/images/icons/blender.png',
        level: 'skill-green'
      },
      {
        name: 'Photoshop 2017',
        image: '../../../assets/images/icons/photoshop.png',
        level: 'skill-blue'
      },
      {
        name: 'After Effects 2017',
        image: '../../../assets/images/icons/aftereffects.png',
        level: 'skill-blue'
      },
      {
        name: 'Visual Studio',
        image: '../../../assets/images/icons/visualstudio.png',
        level: 'skill-green'
      },
      {
        name: 'Firebase',
        image: '../../../assets/images/icons/firebase.png',
        level: 'skill-red'
      },
    ];
  }

  ngOnInit(): void {
    console.log(this.DbSkills);
  }

}
