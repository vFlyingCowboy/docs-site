---
sidebar_position: 1
---
# Development Team SOP

## A Word from the founder
Thank you for stepping up and fulfilling a leadership position in the Club. As a Staff member, Club members will look to you for leadership and guidance. You should strive to provide that, in order to make our members’ experience here a great one!

Everything you do here should focus on providing a quality experience for TPC members. I ask you to lead by example, in words and actions. Your contributions to the Club in this manner are greatly appreciated and valued. You have a direct impact on retaining members and growing the Club.

Let’s make this Club a great place for flightsim enthusiasts to be a part of

## 1. Scope Of Responsibility

### 1.1 Development Team Lead
1. The Dev Team Lead is responsible for all team members.

2. Responsible for upkeep and maintenance of the TPC Web Servers and associated components.

3. Directs Dev Team Members in the various projects in development and deployment

### 1.2 Deputy Development Team Lead
1. Assists Dev Team Lead in their duties and can fill in as the Dev Team lead in the case of absence or vacation.

2. Acts a delegate to the Dev Team Lead and has the same responsibilities as such.

### 1.3 Development Team Member
1. Aid the Dev Team lead and Deputy Dev Team Lead by developing code and projects to an acceptable level for The Pilot Club Production environment.

2. Developers are expected to put aside at least 2 hours per week to work on TPC related web services.

3. Each developer will be assigned to a team from the following list. Developers may request to put on a team but the Dev Team Lead / Deputy Dev Team Lead may assign them to another team based on experience.

    1. Discord Bot Team
    2. Core API Team
    3. Flight Crew Portal Team
    4. Database Management and Outline team
    5. Quality Assurance Team
    6. Devops Team
    7. Trust and Safety Team
    8. Floater / Misc Team 
   
4. The outline for each one of these teams can be found in the Teams Folder of this section.

## 2. Development Processes

### 2.1 Project Conception
1. Each Project shall be approved by either the Founder of The Pilot Club and/or the Dev Team lead.

2. Should any member of the Dev Team wish to propose a project, they should first ask the Deputy Dev Team Lead and/or Dev Team Lead to verify that project can and will improve The Pilot Club web service footprint.

3. After Approval, members should refer to Section 2.2 of this document for the development process.

4. Should the project need a new DNS record added to the domain and/or need SSO credentials, the Dev Team Lead shall execute those requests within 48 hours of request, once approval from the TPC Founder has been received.

### 2.2 Development Processes on Projects
1. After a project has been approved for development, the Dev Team Lead or Deputy Dev Team Lead shall create a GitHub repository (as applicable) for the project to reside.

2. Members of the Dev Team may develop in their own ways, so long as the code resides in GitHub as the primary source for the code.
    1. Member shall test their code prior to submitting a pull request or code review. This allows for the members to debug and make corrections on their own without having numerous corrections needing to be made.
    2. Members shall not code from the main or development branch of the repository that they are working on as this eliminates the mistake of pushing code to the production/development environment that causes errors or does not work. All development code shall be done in a branch that is designated as such.

### 2.3 Code Review
1. Once code is ready for deployment to the production and/or development environment, the Dev Team Lead and/or Deputy Dev Team Lead shall review the code via GitHub Pull request. All team members shall request a review via GitHub Pull Request Reviewers function.

    1. Code review consists of verifying that the developed code works as advertised and will not cause any issues once in the production and/or development environment.

        1. If code needs further work, the reviewer will make notes within the pull request with what needs to be completed.

        2. If no further changes need to be made, the code shall be approved and pushed to production within 48 hours (unless extenuating circumstances exist).

### 2.4 Deployment Of Projects
1. Once a code review has been completed and approved, a GitHub action will automatically push a docker image to Digital Ocean for server usage.

2. Should the project be new, the Dev Team Lead and/or Deputy Dev Team Lead shall create a folder within the “Deployments” repository when deploying the project.

## 3. Production Environment

**All code that has been approved for the production shall be deployed to the TPC Kubernetes Cluster unless otherwise specified.**

### 3.1 Access to the Production Environment

1. Access to The Pilot Club Development Production Environment shall only be given to designated individuals by direction of the Dev Team Lead

    1. Members with Server Access shall not disseminate the log on credentials to anyone not approved by the Dev Team Lead.

### 3.2 Request for Access

1. Should any member of The Pilot Club Dev Team feel as if they need access to the Production Environment, they may request it from the Dev Team Lead at dev-lead@thepilotclub.org

## 4. New Team Members

### 4.1 Application Process

1. Members of The Pilot Club may apply to the Dev Team at anytime via https://forms.gle/tDnudHRUXx1GWFpD8

2. Applications will be reviewed as they are received. An application does not constitute an interview nor does it constitute a position within the Dev Team.

### 4.2 Interview Process

1. The Pilot Club requires interviews for all candidates interested in joining a staff team including the Development Team.

2. During the Interview process the following personal shall be present:

    1. TPC Dev Team Lead

    2. TPC Deputy Dev Team Lead

    3. TPC Founder

3. Questions asked during the interview process shall be prepared at least 24 hours prior to the interview

### 4.3 Rejection from the Dev Team

1. Should your application or interview process not be adequate to be accepted on to the Dev Team, applying members shall receive a rejection notice within 7 days of the interview.

### 4.4 Acceptance to the Dev Team

1. Should an applicant be deemed as a good fit for The Pilot Club Dev Team, the applicant shall receive an email within 7 days of the interview with further instructions.