---
sidebar_position: 1
---

# GitHub Setup

## Getting Setup with GitHub

GitHub is a useful tool for us to develop code and deploy code to the production environment with little to no downtime.

- The first step you will need to do is create a GitHub account. This can be completed on their [website][github-main].

- Once you create a GitHub account, you can find our organization [here][github-tpc].
    - From there, you are able to view our repositories and be able to help out with code as you see fit.
        - Should you have a project that you are tasked with that you do not see on the list, please reach out to the Dev Team Lead, and they will give you access!

After the initial setup of GitHub, you are able to code at your own discretion, or follow one of our other guides in this section for assistance in good coding practices.

## Code Preparation For Review

**The Pilot Club Strives to have 100% uptime without any errors.** One of the most common ways web resources can break is by **human error.**

Human error is when the developer knowingly or unknowingly causes a hole in the code which creates a "bug."

**The way we avoid the "hole in the code" is by doing a code review prior to deployment to any environment other than local.**

Here are some things that you should do prior to submitting a pull request:
- Test your code
    - Testing your code allows you to check if there are any errors in it and to be able to fix those errors prior to the Pull Request.
- Ask for Help
    - Asking for help is not always a bad thing. If you are running into an issue and cannot seem to figure out a solution, ask for help.
- Google it!
    - As silly as this sounds, google any issues you may be running into and see if you can find the answer.

Once you believe your code is ready for deployment, you can open a Pull Request!

## The Pull Request

Pull Requests (PR) are a tool in GitHub that allows for project contributors to review code prior to deployment.

Here are some things to consider when opening a PR:
- Will the code merge into the branch you are wanting it to go to?
    - What we mean by this is if you are trying to submit code for the main branch, for example, will the code you have written go into that branch without errors
        - GitHub will let you know if you have "conflicts" or not and its made very noticeable if there is.
- Am I pushing to the correct branch?
    - Most if not all of our projects have a develop branch, which means at no point, would you merge directly into the main branch.
        - The develop branch is the "working" copy, which means you have tested the code and made sure it works, but it may not be ready for full release quite yet.

Once your PR is submitted, **The Pilot Club asks that you set a reviewer to it.** The reason we use the reviewer system is so that our developers get notified in the case that code needs to be reviewed.

### Who are the reviewers for TPC?

Here at TPC, there are 2 main reviewers. **The Dev Team Lead (DTL) and Deputy Dev Team Lead (DDTL).** These people can be identified buy their discord roles.

**If you are unsure of who to set as a reviewer, please set both DTL and DDTL so that someone can review your code in an expeditious manner.**

### Thats it!

Once your PR is submitted, there are some things to keep an eye out for:

- Change Requests:
    - This means that the person reviewing your code has found a way to improve what you are doing **OR** has found a bug.
        - All that is required in this situation is to fix or update what is being asked!
- Approval Of Code Changes:
    - This is pretty self-explanatory. Someone has reviewed your code and has deemed that it "Looks Good To Me"(them), and is ready for deployment!

In the off chance that your PR gets closed and your branch also gets deleted, this means that it is obvious that you had not tested your code prior to the Pull Request and we would like you to do it again.

**This does not mean that you are a bad developer**, this just means that we want you to further work on what you had submitted so that we can get good quality code the first time!


[github-main]: https://github.com
[github-tpc]: https://github.com/the-pilot-club