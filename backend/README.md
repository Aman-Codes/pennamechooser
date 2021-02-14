# ScrapeMaster
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![MIT](https://img.shields.io/github/license/Aman-Codes/ScrapeMaster?color=blue)

ScrapeMaster is a web scrapper which scrapes various online platforms. It is built using node.js and puppeteer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Your machine should have npm (or yarn) and Node.js installed to use it locally.

## Setup and Installation

### Setting up the repository locally

1. First fork the repo to your account.  
   Go to the forked repo and clone it to your local machine:

```sh
git clone https://github.com/Your_Username/ScrapeMaster.git
```

This will make a copy of the code to your local machine.

2. Now move to the `ScrapeMaster` directory.

```sh
cd ScrapeMaster
```

3. Now check the remote of your local code by:

```sh
git remote -v
```

The response should look like:

```sh
origin	https://github.com/Your_Username/ScrapeMaster.git (fetch)
origin	https://github.com/Your_Username/ScrapeMaster.git (push)
```

To add upstream to remote, run:

```sh
git remote add upstream https://github.com/Aman-Codes/ScrapeMaster.git
```

Again run `git remote -v`, the response should look like:

```sh
origin	https://github.com/Your_Username/ScrapeMaster.git (fetch)
origin	https://github.com/Your_Username/ScrapeMaster.git (push)
upstream	https://github.com/Aman-Codes/ScrapeMaster (fetch)
upstream	https://github.com/Aman-Codes/ScrapeMaster (push)
```

4. Once the remote is set, install all the necessary dependencies by the following command:

```sh
npm install
```
### Run locally

Run the below command to start the server:

```sh
npm run dev
```

### Contributing

We really like contributions in several forms, see [CONTRIBUTING.md](https://github.com/Aman-Codes/ScrapeMaster/blob/main/docs/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/Aman-Codes/ScrapeMaster/blob/main/docs/CODE_OF_CONDUCT.md)
