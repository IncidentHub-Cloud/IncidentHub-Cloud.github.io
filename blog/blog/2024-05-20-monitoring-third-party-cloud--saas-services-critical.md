---
slug: Monitoring-Your-Third-Party-Cloud-SaaS-Services-is-Critical
title: Monitoring Your Third-Party Cloud and SaaS Services is Critical
authors: [hrish]
description: It is critical to your business operations to monitor your third-party cloud and SaaS services and get notified before they impact your operations.
tags: [monitoring, cloud]
---
<head>
<link rel="canonical" href="https://www.linkedin.com/feed/update/urn:li:activity:7196385217270415361" />
</head>

If you have a software-based business, you are using at least a few cloud based tools. It does not matter if you are a solo developer, or part of a 50-member team in a large organization. Take this random list and chances are you are using at least half of them:
- Zoom
- Google Workspace
- Slack
- Public cloud/PaaS - [GCP](https://incidenthub.cloud/service/googlecloudplatform)/[AWS]/[Azure](https://incidenthub.cloud/service/azure)/Render/Heroku/[Railway](https://incidenthub.cloud/service/railway)/[DigitalOcean](https://incidenthub.cloud/service/digitalocean)/[Hetzner](https://incidenthub.cloud/service/hetzner)
- PagerDuty/Opsgenie
- Cdnjs
- [DockerHub](https://incidenthub.cloud/service/docker)
- [GitLab](https://incidenthub.cloud/service/gitlab)/[GitHub](https://incidenthub.cloud/service/github)
- TravisCI/CircleCI/Semaphore
- Let’s Encrypt

Your entire business - irrespective of org or market size - including your development tools, collaboration/communication tools, infrastructure and hosting, monitoring, even email - is dependent on services that you don’t control. They are provided by other vendors.

Of course, you pay for some of them and they all have SLAs. Having an SLA does not translate to 100% uptime. Companies will try their best to meet SLAs - which promise a percentage of uptime (usually 99.xx). There are going to be incidents in your providers at some point, and the effect will cascade to the service that you provide to your customers. This means that your own product's SLA can be breached due to causes outside your control.
<!-- truncate -->
Can you not ask the service provider to notify you directly when this happens? Unlikely, unless you are a really big enterprise. However, most of them have public status pages where you can sign up to receive these alerts over SMS, email, Slack, etc.

The downside is - if you have 50 such services, you have to sign up on 50 pages, one by one. If you want to change your notification channel (another Slack channel, or SMS instead of Slack), you have to edit it on each of those 50 pages.

How does knowing about such [issues](https://www.pagerduty.com/blog/managing-vendor-incidents/) help you?
A few examples (true stories) will illustrate this

- Public cloud outages that are yet to impact your applications. If you get to know beforehand that your cloud vendor has an ongoing incident in your region, you can take preventive steps so that your applications are not affected.
- Paging service outages. Your on-call teams can miss alerts because your paging service is unable to send alerts.
- Delayed/missing messages in your communication tool. Your remote teams are not in sync because your comm tool is dropping only some, not all, messages.
- Your hosted Git repo is throwing errors, while your customer waits for a critical bug fix.

Knowing that there is something wrong with the SaaS/cloud provider gives you an opportunity to do something about it, proactively.

There is no single place, no easy way where you can

- Choose services to monitor
- Choose a channel to receive alerts

This is why we built [IncidentHub](https://incidenthub.cloud/) - based on years of real-world experience. The UI is very simple so that receiving your first alert does not involve more than 2 steps. Check out the demo video below, and try it out yourself at [https://incidenthub.cloud/](https://incidenthub.cloud/)

<iframe width="560" height="315" src="https://www.youtube.com/embed/3w-g7fYFtIg" frameborder="0" gesture="media" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Originally published on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7196385217270415361/)