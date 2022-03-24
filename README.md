# ExampleProject
This sample project mimics the basic User Search feature from GitHub.com.

<img src="https://openmodus.com/github-search/github-search.jpg" width="400" />

This application allows you to
* search for users
* navigate paginated results via Prev & Next 
* see the search total count
* see each user's stars count, followers total, email info/link, avatar, etc.
* click on a user name/login to navigate to GitHub.com.

This sample uses both the GraphQL and the REST API for demonstration purposes.


## Note

* The search results returned from GitHub is limited to maximum of 1000 records even if there are more records that match the search criteria.
* The search uses the GraphQL API in order to bring back the users records with the desired nested properties (REST API cannot directly do this, but requires multiples calls to fetch the detail per user record). The downside, however, is that the GitHub GraphQL API does not provide the skip/limit operation for the search which means the direct click-to-go-to-page links can't be made available as the cursor-based pagination only can go back or forward a step at a time. The available search arguments are documented here: https://docs.github.com/en/graphql/reference/queries
* Following and Unfollowing calls the REST API endpoints rather than using mutation for updates in GraphQL API.
* This uses a temp token which will expire after review

## Live Demo

Project is deployed at: https://www.openmodus.com/github-search
(Mobile-friendly)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
