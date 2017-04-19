## Bloc Jams

This project is a small Single Page Application that allows a user to play songs from a selection of albums retrieved from the database.

## Collections View

This page is where the user would select the album they want to listen to by either selecting the photo or any of the link words beneath.
![Bloc Jams Collections View](https://github.com/dwaite498/bloc-jams-angular/blob/master/BlocJamsIndex.png)

## Album View

This page is where the magic happens. A user can select the play button on any of the songs and play them. The song numbers change to play buttons(or pause buttons if the song is alreayd playing) and allows the user to start and stop any song at will. The player bar at the bottom also allows the functionality of skipping songs and starting and stopping at will.
![Bloc Jams Album View](https://github.com/dwaite498/bloc-jams-angular/blob/master/BlocJamsAlbum.png)

## Configuration

The project uses Grunt to run tasks in development. Thoroughly review our [resource on using Grunt](https://www.bloc.io/resources/using-grunt) before using this application. It may also help to review [our resource on NPM and `package.json` files](https://www.bloc.io/resources/npm-and-package-json).

Install the project dependencies by running:
```
$ npm install
```

## Run the Application

Run the application using the Gruntfile's `default` task:

```
$ grunt
```

The default task runs a simple server on port 3000. To view it in a any browser, go to [http://localhost:3000](http://localhost:3000).

>Note that unless the application is run [via Live Preview in Brackets](#use-in-brackets-live-preview), the browser will need to be refreshed to view the most recent changes.


## Grunt plugins

A list of the Grunt plugins in this application.

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from our development folders and puts them in the folder that will be served with the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your distribution folder (`dist`) so that logic in your stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node web application framework with robust configuration options.
