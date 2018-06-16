# HomeStead

- Visit [HomeStead](https://obscure-fortress-66993.herokuapp.com/) for demo.

## Purpose

HomeStead is a web based SaaS application designed to be used by HOAs, Planned Communities, and Apartment Boards in order to dynamically manage their communities while also organically fostering a sense of community.

Within the application, community members may plan and publish events, post classified, participate in resource sharing programs, and find necessary information from/exchange messages with community managers.  Community managers may also post account balances to each member and view and organize messages from users.  


## Tech Used

<b>Built with</b>
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Express.js](https://www.npmjs.com/package/express)
- [Handlebars.js](https://www.npmjs.com/package/express-handlebars)
- [Moment.js](https://momentjs.com/)
- [Bootstrap](https://getbootstrap.com/docs/3.3/)
- [JawsDB](https://elements.heroku.com/addons/jawsdb)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Passport](http://www.passportjs.org/)
- [Gulp](https://gulpjs.com/)
- [FlatPickr](https://flatpickr.js.org/)
- [FullCalendar.io](https://fullcalendar.io/)

- HTML5, CSS3, SCSS, Javascript, and jQuery

# Getting Started

- Fork or clone the GitHub repo to your machine.
- Ensure that you have Node.js, MySQL and Gulp installed on your machine.
- If you have a password that protects your MySQL root user, enter that password in the connection.js file in the cloned repo.
- In your CLI, navigate to the cloned directory. `npm install` the dependencies and run `npm start`

  `npm install`

  `npm start`

- Once started, you are able to view the project on `http://localhost:3000/`

- 🎉Happy developing!🎉


# Linting

Before you push your branch up to the `develop` branch, ensure you lint your code.

run `npm run -s eslint .` this will show if you have any ESLint errors or warnings.
If you have any errors, please fix them. if you have warnings that could slide, push your code up or talk with a team member.


# Development 👨‍💻

The command `npm start` will automatically launch the project. navigate to `http://localhost:3000/`

The files watched by gulp are the client js and sass files.

Client side js files are located at `public/assets/js/*.js`. Editing these files and saving will kick off a gulp build and auto refresh your development workspace.

Sass files are located at `sass/partials/*.scss`. Editing these files and saving will kick off a gulp build and auto refresh your development workspace.

If you're editing any file outside of `public/assets/js` or `sass/partials`, we recommend running `npm run watch`, this runs nodemon, which watches all of our files.


### Branching process

- Master is a 🔒protected branch🔒. This means we need at least 1 approval before we merge into our master branch. (having the master branch protected helps so we know for sure what is going into master, and noone can accidentally push code to it and break our site)
- Develop will be the branch we create branches off of. Develop will be merged into master at the end of every day.
- This screenshot 👇 illustrates this process
- Feature A and Feature B are branches where we code our tasks. Once finished with making your edits, we merge that branch into develop. At the end of everyday, develop gets merged into master.
- Then develop is updated with the latest version of master, and the process happens all over again.

![screenshot](./public/assets/images/branching.jpg)


### Find a bug or want to add an issue? 🕵️

- Document what the issue is, if you can find the root problem, write whatever you have down
- Go to the Issues tab, create a new issue
- Assign it to yourself if you want to work on that issue, or leave it blank and someone else can assign themselves to it if they want to take on the challenge
- Add a label to it. Most are going to be bugs or enhancement
- [See bucky talk about this in more detail](https://www.youtube.com/watch?v=YshvUGgF_3o)

