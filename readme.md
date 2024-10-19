# Keboola home task

# FYI: Its a work-in-progres mode. There could be changes in code/description during development.

## Task

The DOC file with the task can be found [here](docs/ENGG-Frontend Homework.pdf).

## Questions

- To clarify (rethorical question): in Requirements section, point 3 is a part of point 2.
- Must haves section contain "Use a store concept to manage data retrieved from the API." - do you mean use state manager like redux or choose any method of data store I consider the best. The question is mainly related to the fact that I assume data taken from API will be static and will not change more frequently? If more frequently it will require different approach that for static data, and all the necessary implications in code.
- in "Nice to haves" section I see filtering options. I guess we are counting with exact searching capabilities, like using proper wording of components names. If not this will require more detailed specification how it should work.
- Please specify more clearly what you mean by saing "Incorporate additional functionalities or data display options that you find beneficial.". Its quite wide topic, not really describing purpose of data displaying. I guess it could be related to pagination.
- in nice to have section we have "Optimize the application for initial loading speed.". Please specify more detaily what are the acceptable criteria/parameters. By saying "optimize" we need to have a defined starting point and an estimated result we should achieve.
- When it comes to "Upon completion, push your code to the provided repository for review." should I use approach I mentioned in my email.
  I would like to push changes to repository step-by-step as things will be completed.
- there is an issue in a task description: The task contain wording "components" "public components". There is no components available in API endpoints. I see some links reffering to APPs/Apps details endpoints. Please clarify the task and provide a proper description.
- Please set "main" branch as default.

## Suggestions

- Please update API list endpoint with proper error message
  currently: ""errorMessage": "Parameter offset must be integer greater then 0"," -> should be ""errorMessage": "Parameter offset must be integer, equal or greater then 0",
- Please update API list endpoint logic to avoid supporting undefined offset and limit parameters.
- Please consider introducing caching (is not exist) in to API application listing endpoing to increase speed of loading the data
- considering the fact API application listing has limited visibility (offset, limit), we should avoid printing all data when parameters are not specified. This will avoid heavy load bot queries to underperform API.
- I dont know the reason and a range of usage of APi endpoint https://apps-api.keboola.com/apps?offset=0&limit=0, but I strongly suggest to use simplified version of data of this API endpoint ans I see it duplicates a lot of information from - for example https://apps-api.keboola.com/apps/gymbeam.app-bulkgate.
  Will be way more efficient to load simplified data for listing and get more details from details endpoint
- The API documentation for app details endpoint do not clearly specify how to call app name. It sounds more we should use app name instead of ID.

## Technology

### Main technology

Below you can find the main technology which will be used to complete the task:

- React
- TypeScript
- Rspack

### Additional packages/tools

- React router
- Tailwind
- linter
- cypress

# Estimations

FTI: Please take on mind, that the time include context-switches.
I still need to count that current project takes priority over this task and other additional activities related to current work.

## Documentation - around 1 hour

- documentation
- git setup

## Initial phase - around 8 hours - (4,5 hour spent)

- repository structure
- framework setup
- typescript setup
- linter setup
- cypress setup

## Main app setup - around 4-5 hours

- main app wrapper
- basic components library

## App homepage listing - around 6-8 hours (require some clarification - see above)

- design
- API data management
- listing
- lazyloading
- pagination
- filtering

## APP details page - around 5-6 hours

- design
- API data management
- app details
- sharable link

## CI/CD pipelines - around 5-6 hours

- github actions
- vercel setup
- initial deploy

## Example test - 1-2 hours

- example cypres test for detail page
  FYI: I will not cover on purpose everything with tests, as its a test task.

## Some extra optimization/fixes/documentation/etc - 1-2 hours

- everything needed to properly finish task

Estimated time: 30-36 hours

# Installation

TBD

# Deployment

Deployment process is done in two different ways: a dev version and STAGE version.
In this particular example staging version could be considered as PROD.
In case of a real app we can setup different environments thats will pass on necessary criteria,
like for example automated tests passing, etc.

# Environments - In progress

## Dev

The dev environment is released from localhost and will be stored under every person personal/company account.
We can eoptimise this by setting extra rules that will deploy dev based on some extra criteria like commit SHA, etc.
This will give flexibility to release multiple environments for testing purposes.

For this task purpose I use DEV env located here: https://keboola-task-dev-mr.vercel.app/

## Staging

As we said we will use STAGE as PROD for this task purpose, the STAGE can be found here:
https://keboola-task-stage-mr.vercel.app/
Its deployed by github actions and uses predefined actions secrets.
As I do not have full access to shared repo, I created a one-to-one copy on my github account and used it
to setup and verify CI/CD.

# Suggestion

TBD
