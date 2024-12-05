"This application was developed for Web
Application module, as coursework portfolio project @ WIUT by student ID: 00016042"

Short about this project :
This is a project created for the WAD module as a portfolio project. This project is aimed to show the ability to work with backend and frontend, including API development and SPA creation as well.

It was required to choose a project that we should do according to our student id and accordingly to that rule i must choose a Simple blog among the list.

The created simple blog project includs both backend and Frontend parts. 
The backend Api part was built  using ASP.NET Core and Entity Framework. As it was required it has a CRUD operations for Post, and Category.
CRUD activities are managed by various kinds of controllers.  Here are the list of them :
-->Endpoints**: [Provide details of key API endpoints]
-->Database: Uses a code-first approach with migrations to manage the database schema.
-->Swagger Documentation: The API is fully documented using Swagger, providing detailed descriptions of each endpoint.

To construct the backend API, the following NuGet packages are needed:
1. ASP.NET Core:
The primary Entity Framework package for database operations is called 
   -'Microsoft.EntityFrameworkCore'.
   -'Microsoft.EntityFrameworkCore.SqlServer' - this enables Entity Framework interoperability with SQL Server database.
   -'Microsoft.EntityFrameworkCore.Tools': Entity Framework migration management tools.

   'Swashbuckle.AspNetCore'  that provides a Swagger integration for API documentation.
  to install these packages the user should give the following commands to the package manager console:
  Install-Package Microsoft.AspNetCore.App
  Install-Package Microsoft.EntityFrameworkCore
  Install-Package Microsoft.EntityFrameworkCore.SqlServer
  Install-Package Microsoft.EntityFrameworkCore.Tools
  Install-Package Swashbuckle.AspNetCore
Alternatively you can also install these packages via opening the NuGet Package Manager window in visual studio as well

The project includs also Frontend part. The frontend was built with Angular and is completely connected with the backend API for executing CRUD operations. 
Here are the main features of the Frontend part :
 -Design is responsive to all devices.
-CRUD operations to manage entities.
-Angular services for managing API requests and displaying data.
 
while doing the frontend part there are some instalatins as well.
Since the frontend was developed using angular the following commands should be given :

npm install @angular/core
npm install @angular/common
npm install @angular/router
npm install @angular/forms

Moreover, the boostrap was used for the UI and styling. therefore, it should be given this command: 
npm install bootstrap

For Font Awesome used for icons: 
npm install font-awesome

For Angular Material: 
npm install @angular/material @angular/cdk

For Angular Flex Layout  used for responsive layouts:
npm install @angular/flex-layout

For HTTP Client used for sending HTTP queries to the API:
npm install @angular/common/http

If the user manage to install and import the mentioned packages the project will work correctly.


GitHub repository
The project is hosted on GitHub and is accessible through the following link: https://github.com/00016042/WAD.CODEBASE.00016042.git 



