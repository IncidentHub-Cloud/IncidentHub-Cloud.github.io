---
slug: Monitoring-Third-Party-Vendors-As-An-Ops-Engineer-SRE
title: Monitoring Third Party Vendors as an Ops Engineer/SRE
authors: [hrish]
description: Stop hacking together scripts to monitor public status pages. Use a status page aggregator that gives you a summary of all your Cloud and SaaS status pages.
tags: [monitoring, sre, ops, cloud, saas]
---

Why should you monitor your third-party Cloud and SaaS vendors if you are in SRE/Ops?

As part of an SRE team, your primary responsibility is ensuring the reliability of your applications. What makes you
responsible for monitoring services that you don't even manage? Third-party services are just
like yours - with SLAs. And outages happen, affecting you as well as many others who depend on them.

It's a no-brainer that you should know when such outages happen to be on top of things if/when it affects your running applications.

Most of your third party dependencies will have a public [status page](/How-To-Monitor-Public-Status-Pages-of-Cloud-Providers-a-Step-by-Step-Approach) or a Twitter account 
where they publish updates on their outages. Here are some seemingly easy ways to monitor these pages
- Subscribe to the RSS feed of these pages
- Follow the Twitter account
- Sign up for Slack, Email, SMS notifications on the status page itself if the page supports these
<!-- truncate -->
But if you have tried it, it's not that easy
- Not all pages have RSS feeds
- Some have Slack, Email, SMS integration - some don't
- Some don't have a Twitter account
- You need to sign up on all of these pages one by one, and all services may not support the same notification channel

You can easily end up doing this one by one for 10-15 or more service providers. Let's do a quick check. 
Which services in this list below do you use in your stack?

- DNS - [GCP](https://incidenthub.cloud/service/googlecloudplatform)/GoDaddy/[UltraDNS](https://incidenthub.cloud/service/ultradns)/Route53
- Cloud/PaaS - [GCP](https://incidenthub.cloud/service/googlecloudplatform)/[AWS](https://incidenthub.cloud/service/aws/[Azure](https://incidenthub.cloud/service/azure)/[DigitalOcean](https://incidenthub.cloud/service/digitalocean)/Heroku/Render/[Railway](https://incidenthub.cloud/service/railway)/[Hetzner](https://incidenthub.cloud/service/hetzner)
- Observability - [Grafana Cloud](https://incidenthub.cloud/service/grafanacloud)/[DataDog](https://incidenthub.cloud/service/datadog)/[New Relic](https://incidenthub.cloud/service/newrelic)/[SolarWinds](https://incidenthub.cloud/service/solarwindsobservability)
- On-call management - PagerDuty/[OpsGenie](https://incidenthub.cloud/service/opsgenie)
- Email - [Google Workspace](https://incidenthub.cloud/service/googleworkspace)/[Zoho](https://incidenthub.cloud/service/zoho)
- Communication - [Zoom](https://incidenthub.cloud/service/zoom)/[Slack](https://incidenthub.cloud/service/slack)
- Collaboration - [Atlassian Jira](https://incidenthub.cloud/service/jira)/[Confluence](https://incidenthub.cloud/service/confluence)
- Source code - [GitLab](https://incidenthub.cloud/service/gitlab)/[GitHub](https://incidenthub.cloud/service/github)
- CI/CD/GitOps - [TravisCI](https://incidenthub.cloud/service/travisci)/[CircleCI](https://incidenthub.cloud/service/circleci)/[CodeFresh](https://incidenthub.cloud/service/codefresh)
- CDN/Content delivery/ - [Cloudflare](https://incidenthub.cloud/service/cloudflare)/[CDNJS](https://incidenthub.cloud/service/cdnjs)/[Fastly](https://incidenthub.cloud/service/fastly)/[Akamai](https://incidenthub.cloud/service/akamai)
- SMTP providers - SMTP.com/[SendGrid](https://incidenthub.cloud/service/sendgrid)
- Payments - [PayPal](https://incidenthub.cloud/service/paypal)/[Stripe](https://incidenthub.cloud/service/stripe)
- Artifact Repo - [Maven](https://incidenthub.cloud/service/maven)/[DockerHub](https://incidenthub.cloud/service/dockerhub)
- Develope APIs - Apple Dev Platform/Meta Platform
- LLM APIs - [OpenAI](https://incidenthub.cloud/service/openai)/[Anthropic](https://incidenthub.cloud/service/anthropic)/[Portkey](https://incidenthub.cloud/service/portkey)
- Marketing - MailChimp/[Hubspot](https://incidenthub.cloud/service/hubspot)
- Auth - [Okta](https://incidenthub.cloud/service/okta)/Clerk/Auth0

This is a small list. You may not have all of these, or may have more/others, but you get the point.

Like any self-respecting Ops Engineer/SRE, you would probably want to whip up a script and write this check-pages-and-notify-in-one-place
tool by yourself. I know, because I've worked in Ops/SRE roles for the better part of my career, and [NIH](https://en.wikipedia.org/wiki/Not_invented_here) 
is a very real thing. Here's why it's not a great idea
- Any software you write has to be maintained. Say your org starts using a new service which does not have an RSS feed on the status page. What now?
- Who monitors the monitor? How do you know when your script is not running?
- You probably have better uses for your time

IncidentHub was built to solve precisely these problems - so you can focus on what's important, and hand off monitoring third-party services 
to something that was built with that goal in mind. So stop hacking together scripts to monitor public status pages, and [try it out](https://incidenthub.cloud/).
