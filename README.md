# vue-3-test

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Architecture

#### src/views 
- Contains all vue components
- Follows pages structures
- Has a *shared* folder to contain all components and layouts which can be used everywhere on the project (form inputs, pop-ins...)

##### Ex :
- views *folder*
    - page-name *folder*
        - components *folder*
            - component-name *component*
        - page-name *component*
    - another-page-name *folder*
        - components *folder*
            - another-component-name *component*
        - another-page-name *component*

#### src/styles
- Contains all styles
- Follows the *src/views* architecture

### Naming convention for components
- Explicit to its purpose
- Follows a project-specific language (ex: CarInformationCard for an information card about a car) **or** a generic name if the component is common in web projects (ex: input-text, pop-in)
