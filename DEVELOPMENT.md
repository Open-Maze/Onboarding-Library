# Onboarding library OpenMaze development guide

This guide provides instructions on how to set up your development environment, use the code, deploy the application, and contribute to the Onboarding Library OpenMaze project.

Version currently deployed on NPM: ![NPM Version](https://img.shields.io/npm/v/onboarding-library-openmaze)

## Built with

- [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
- [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
- [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
- [![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
- [![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
- [![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
- [![Husky](https://img.shields.io/badge/Husky-4B32C3?style=for-the-badge&logo=github&logoColor=white)](https://typicode.github.io/husky/#/)

## Installation

1. Clone the repository to your local machine using:

```bash
git clone https://github.com/Open-Maze/Onboarding-Library.git
```

2. Install the required dependencies using:

```bash
npm install
```

## Usage

We use Storybook to view and develop components because this is a library which does not contain a front-end in which components can be viewed. In order to run storybook use the following command:

```bash
npm run storybook
```

## Testing the library inside a target project.

In order to test the library inside of a project without publishing it to the NPM library you need to follow the following steps.

1. run the following code in order to build and pack a local version of the library:

```bash
npm run build-pack
```

2. Navigate to the project you want to use for the library and make sure a previous version isnt installed by running:

```bash
npm uninstall "file:../Onboarding-Library/onboarding-library-openmaze-0.4.0.tgz"
```

3. We've noticed that the '.next' folder sometimes caches data from the library so in order guarantee nothing of the previous library version remains you should delete the '.next' folder from your project. It will be generated again once you run the project.

4. Install the new version of the library by running the following command. Remember to change the `*.*.*` to match the version you packed following the semantic versioning structure.

```bash
npm install "file:../Onboarding-Library/onboarding-library-openmaze-*.*.*.tgz"
```

## Commit Conventions

We use [commitlint](https://commitlint.js.org/#/) to ensure that our commit messages remain consistent. This helps us generate changelogs and navigate the project history more easily.

Commitlint checks if your commit messages meet the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/). In other words, your commit messages should be structured as follows:

```bash
<commit-type>: <commit-message>
```

## Deployment

Deploying a new version of the library involves several steps:

1. **Merge Changes:** Ensure all changes you want to deploy have been merged into the main branch.

2. **Create a New Release:** Navigate to the '[Releases](https://github.com/Open-Maze/Onboarding-Library/releases)' section of the GitHub repository and draft a new release. Assign an appropriate version number and title, following semantic versioning principles. Make sure this is the same version as in the package.json file. NPM will use the version number in the package.json file for their versioning.

3. **Automatic Workflow:** Creating a new release triggers the 'release-package.yml' workflow. This GitHub Actions workflow automatically builds and publishes the updated package to NPM.

Remember, the version number should be updated following the principles of semantic versioning. This means incrementing the:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

This process ensures that the deployed package on NPM is always up-to-date with the main branch of the GitHub repository.
