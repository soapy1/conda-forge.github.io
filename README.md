# [conda-forge.org](https://conda-forge.org)
[![deploy](https://github.com/conda-forge/conda-forge.github.io/workflows/deploy/badge.svg)](https://github.com/conda-forge/conda-forge.github.io/actions?query=workflow%3Adeploy)

## Overview
This repository
- is the home of the source code of conda-forge's documentation.
- provides an [issue tracker](https://github.com/conda-forge/conda-forge.github.io/issues) for conda-forge related questions and issues that are **not specific to individual feedstocks**.

If you have questions or need help, please check out our documentation for a [list of ways to interact with us](https://conda-forge.org/docs/user/how_to_get_help.html).

## Improving the docs

- You can help to improve the documentation! It is version-controlled in the [conda-forge.github.io repository on GitHub](https://github.com/conda-forge/conda-forge.github.io).   The source text is stored in the src/ subdirectory and is formatted using Python’s [reStructuredText system](https://docutils.sourceforge.io/rst.html).

- The docs are built on GitHub Actions and run the `.ci_scripts/update_docs` script.
  We are glad to know that you would like to contribute. To build the docs locally, follow the steps mentioned below:
1.  [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the [conda-forge.github.io](https://github.com/conda-forge/conda-forge.github.io)        repository to your own GitHub user account.
2.  [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this fork onto your computer.
3.  Go into the main folder. </br>
    Run the following commands.  
      *  `conda env create -f ./.ci_scripts/environment.yml`
      *  `conda activate conda-forge-docs`
      *  `cd newsfeed && pip install --no-deps .`
      *  `cd ../src`
      *  `make html`
4.  Make and commit your changes.
5.  Submit a [pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) to the main repository proposing your changes.

**Note: "All changes must be made in the `/src` folder and NOT in the `/docs` folder. Html files in the ./docs folder are auto generated "**

## conda-forge dev meetings

We hold biweekly meetings every second Wednesday from 17:00-18:00 (UTC). Feel free to stop by with the help of this [Google Calendar invite](https://calendar.google.com/calendar/u/0/r/eventedit/copy/Z2lraDk2a205cGUxdDkxYmNybXQxMGIxMGtfMjAxOTA3MjRUMTcwMDAwWiBzY29wYXR6QG0/c2hsb2thcHJpbmNlc3MxMDFAZ21haWwuY29t?scp=ALL&sf=true).

Our [meeting notes](https://conda-forge.org/docs/orga/minutes/00_intro.html) record important points discussed during the meetings and serve as a record for upcoming meetings. We make use of [HackMd](https://hackmd.io/) and a [template](https://github.com/conda-forge/conda-forge.github.io/blob/main/misc/DEV_MEETING_TEMPLATE.md) to create the meeting notes.

We encourage contributors to join the meetings and learn more about and from the community.
