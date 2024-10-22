# Keboola home task

# FYI: Its a work-in-progres mode. There could be changes in code/description during development.

## Task

The DOC file with the task can be found [here](docs/ENGG-Frontend Homework.pdf).

## Questions

- To clarify (rethorical question): in Requirements section, point 3 is a part of point 2.
  `toto je v poriadku`
- Must haves section contain "Use a store concept to manage data retrieved from the API." - do you mean use state manager like redux or choose any method of data store I consider the best. The question is mainly related to the fact that I assume data taken from API will be static and will not change more frequently? If more frequently it will require different approach that for static data, and all the necessary implications in code.
  `naschval je tam napisane "store concept", aby sme si overili, co si za tym kandidat predstavi, ak tam das Redux, ok ... ak to nechas v komponente, tiez ok`
- in "Nice to haves" section I see filtering options. I guess we are counting with exact searching capabilities, like using proper wording of components names. If not this will require more detailed specification how it should work.
  `podla toho co chodi z API, mas sam zvolit, ktora informacia sa ti zda vhodna na zobrazenie`
- Please specify more clearly what you mean by saing "Incorporate additional functionalities or data display options that you find beneficial.". Its quite wide topic, not really describing purpose of data displaying. I guess it could be related to pagination.
  `je to na kandidatovi, nech tam da, co mu prislo vhodne`
- in nice to have section we have "Optimize the application for initial loading speed.". Please specify more detaily what are the acceptable criteria/parameters. By saying "optimize" we need to have a defined starting point and an estimated result we should achieve.
  `opat je na kandidatovi, co zvoli aby initial load bol co najrychlejsie - su na to best practices`
- When it comes to "Upon completion, push your code to the provided repository for review." should I use approach I mentioned in my email.
  I would like to push changes to repository step-by-step as things will be completed.
  `Ked to budes mat hotove, proste to pushni do repozitara, commituj si postupne, ako uznas za vhodne`
- there is an issue in a task description: The task contain wording "components" "public components". There is no components available in API endpoints. I see some links reffering to APPs/Apps details endpoints. Please clarify the task and provide a proper description.
  `Toto je z historickych dovodov, kedy sme to volali "apky", no dnes su to "komponenty". Nebrani to vypracovaniu ulohy.`
- Please set "main" branch as default.
  `Hotovo`

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

## Main app setup - around 4-5 hours - (4 hours spent)

- main app wrapper
- basic components library

## App homepage listing - around 6-8 hours (require some clarification - see above) - (8 hours spent)

- design
- API data management
- listing
- lazyloading
- pagination
- filtering

## APP details page - around 5-6 hours - (4 hours spent)

- design
- API data management
- app details
- sharable link

## CI/CD pipelines - around 5-6 hours (3 hours spent - do not continue)

- github actions
- vercel setup
- initial deploy

## Example test - 1-2 hours - (30 min spent - one test for example)

- example cypres test for detail page
  FYI: I will not cover on purpose everything with tests, as its a test task.

## Some extra optimization/fixes/documentation/etc - 1-2 hours

- everything needed to properly finish task

Estimated time: 30-36 hours

# Installation

Plesa make sure you will create ".env" file in root dir.
You can use example file ".env.example" for it.

The application can be run on linux/mac using Makefile.
For example to start app please type:

`make`

the application run on "http://localhost:8080".

In case you want to run linter or builtin tests (for now only one) please type:

`make lint`
`make test`

Additionaly to speedup development I made mocked API. To use it please make sure you will setup "KEBOOLA_API_URL" in ".env" file
pointing to "http://localhost:3100", Then run separately in new terminal window:

`make mockapi`

There is also a deployment process setup for DEV env. Please create ".vercel-token" file (you can use ".vercel-token.example"
and put your vercel token inside. Then run:

`make deploy`

It will deploy app to new projekt in vercel.

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

Based on request - do not continue

# Suggestion

## Known issues

- Searching when data is not fully loaded (not all data is loaded) - this could show strange behaviour when we already filtered some data but next portion of data is loaded on scroll
- Browser warnings "No routes matched location "/apps"" and "No routes matched location "/apps/......." - application behaves correctly, but need to find main cause of the issue
- API endpoint extremly slow response time - this causing main application performance issue with data loading.
- search box clear button
- missing menu in mobile version
- Available https://keboola-task-dev-mr.vercel.app version is in DEV STRICT mode. This cause double-renders and as a result double calls to API. In case of Production version we can remove Strict mode (more info https://react.dev/reference/react/StrictMode)

## Optimisation

- API endpoint caching
- Load all data at once (for task purposes I splitted it to separate requests) - this will help with searching issue described above, as also give a chance to add extra filtering by for example category. For now searching by category is done through search box
- Beter design implementation - for now I mad a quick design based mainly on some photo of the system I took from internet. Some styling could be optimized better.
- I'm not a big fan of css frameworks like tailwind, but have no problem to use it. Because I most commonly use sass and component related styling, I included them in to code too, to show approach. Its just few files with some super basic styling - as example.
- The components/application parts folder structure I usualy make the way it keeps a dependency logic. We could use different approach if needed.
- I usually typing inputs and outputs of particular components, additionaly some extra typing inside. The main reason for this is, it keeps the code reasonable clear still but at the same time protects from issues of wrong data flow. I believe its reasonable approach between code clearity, proper data flow, speed of development and ability to understand the code way more quickly by new commers.
- I used 2 different types of image files (PNG,SVG) placement. Some of them are loaded as assets, some as a part of the code. The reason is - if we need to somehow reduce bundle size is beter to keep media separated and load from CDN.
- When it comes to application performance we are currently on very reasonable level (around 75% to 90%). There is still room for optimisation, but currently the root problem is API endpoint which really affects some parameters. It will require deeper dive in to details.
- I made app which is responsive, but there is a room por optimisation too. It wsa not part of the task.
