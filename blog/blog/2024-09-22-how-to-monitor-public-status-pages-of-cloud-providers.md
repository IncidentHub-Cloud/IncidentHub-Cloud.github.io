---
slug: How-To-Monitor-Public-Status-Pages-of-Cloud-Providers-a-Step-by-Step-Approach
title: How To Monitor Public Status Pages of Cloud Providers - a Step-by-Step Approach
authors: [hrish]
description: Monitoring the public status pages of your cloud providers is a crucial part of your monitoring to ensure business operations continuity.
tags: [status-pages, monitoring, ops, cloud]
---

<head>
<meta property="og:image" data-rh="true" content="https://storage.googleapis.com/ihub-static-storage/blog/statuspagemonitor.jpg" />
<meta name="twitter:image" data-rh="true" content="https://storage.googleapis.com/ihub-static-storage/blog/statuspagemonitor.jpg" />
</head>

## Introduction

Incident updates on the public status pages of your cloud providers are often the first indication that they might have an outage.
Providers also post updates about upcoming and ongoing maintenance on their status pages. Thus, monitoring your cloud
status pages becomes crucial to your business operations. This article will guide you through the process of 
effectively monitoring such status pages.

1. [Identify Your Cloud Providers](#identify-your-cloud-providers)
2. [Locate Their Public Status Pages](#locate-their-public-status-pages)
3. [Understand the Status Page Structure](#understand-the-status-page-structure)
4. [Configure Notifications](#configure-notifications)
5. [Best Practices](#best-practices)
6. [Include in Your Incident Response Plan](#incident-response-plan)
7. [Use a Monitoring Tool](#use-a-monitoring-tool)
8. [Conclusion](#conclusion)
9. [FAQ](#faq)

## Identify Your Cloud Providers
Work with your Dev/Ops/SRE and IT teams to come up with a comprehensive list of your cloud providers.
Any service that is not managed by your teams is by definition a cloud service. Although we focus on
Cloud providers - i.e. providers that let you deploy your services on their infrastructure - this article is equally 
applicable to any of your external SaaS vendors.

## Locate Their Public Status Pages
Every cloud provider has a public status page. You can find the link either on their company website, or by doing a web search.
The status page software is either managed by your cloud provider, or outsourced to another service like Atlassian Statuspage or 
Instatus. Many observability and incident management providers like Incident.io and BetterStack also offer public status pages.

## Understand the Status Page Structure
There is no official standard for status page formats but most of them use a similar visual layout.
The common terms used to describe incident states are "Major/Minor outage", "Maintenance", "Informational", "Monitoring",
and "Resolved".

Status pages will have any ongoing incidents at the top, followed by a list of components or services, followed by past 
incidents. Clicking on the ongoing incident link will take you to a detailed description of the incident. 

An example from the Twilio status page:

![Twilio status](/img/twilio-incident.png)

## Configure Notifications
Instead of periodically visiting status pages you can choose to sign up to receive notifications when there is an incident created, updated or resolved.
Depending on your provider, status pages offer different modes of notification.
- SMS
- Slack
- Email
- RSS feed
- Google Chat
- Discord
- Webhooks

Some status pages offer only one or two options, or sometimes no options at all. 
If the status page is managed by someone other than your cloud provider, your cloud provider
can choose to enable/disable some of the available notification options. For an example, both [DigitalOcean](https://status.digitalocean.com/)
 and [Mailgun](https://status.mailgun.com/) use Atlassian Statuspage. DigitalOcean allows you to subscribe using many channels:

![DigitalOcean status](/img/digital-ocean-status-page.png)

whereas Mailgun has disabled all options

![Mailgun status](/img/mailgun-status.png)

This is as of this writing. Providers can modify these options over time depending on their business requirements.

### Notification Challenges
Your notifications should be delivered in a way that ensures the right team in your organization receives the alerts.
If the team uses Slack that is where you want the notifications. If it's Discord, the notifications should go to a Discord channel.

The status pages used by your providers can have different notification options, which can pose a challenge. They might not
offer the option you want. Some providers may have your chosen option, some might not. See the section on [Use a Monitoring Tool](#use-a-monitoring-tool) on how
to mitigate this.

## Best Practices

### Filtering Your Monitors
Cloud providers have many, sometimes hundreds, services in different locations across the globe. A cloud provider's status page
shows incidents across all of them. Your team should receive notifications only for the services they use, and in the regions they use them in. 
Most status pages have an option to choose the services and the regions. Utilize this feature so that your team is not flooded with unnecessary
notifications.

E.g. The [Fastmail status page](https://fastmailstatus.com) which is hosted by [Instatus](https://instatus.com) has options to sign up for notifications for specific components:
![Fastmail status notifications](/img/fastmail-status.png)

In some large cloud providers like [Google Cloud](https://incidenthub.cloud/service/googlecloudplatform), it can become difficult to sign up for specific components and regions.
Let's say you use Google Kubernetes Engine in us-central1. Currently the [Google Cloud status page](https://status.cloud.google.com/) offers no way to receive notifications for only GKE in us-central1.

### Do Periodic Reviews
Status pages keep changing. Your cloud provider may choose to add/remove services, switch to a different status page provider, or add/remove notification modes. 

### Have a Single View Across All Providers
To check if any of your cloud providers have an outage, a single visual way where all your providers show up is a must. In the absence of a dedicated monitoring tool that monitors your cloud
 provider status pages, a poor substitute will be your notification channel. If it's Slack, you can configure the  notifications to go into a specific Slack channel. However, it can be difficult
  to search for past incidents as well as look at ongoing incidents with Slack. 

## Include in Your Incident Response Plan
Irrespective of your chosen notification mode, ensure that your incident response plan includes cloud provider alerts. Determine the right priority of such alerts so that your team can
 respond effectively. Include cloud provider alerts in your incident response plans so that teams can correlate alerts from other parts of your systems with cloud provider alerts to dig down faster into the root cause.

## Use a Monitoring Tool
As noted in the previous sections, there are various challenges to monitoring cloud providers' status pages by yourself, unless you have only one or two such providers. There are various tools which aim to solve these pain points.
 [IncidentHub](https://incidenthub.cloud) is a SaaS tool created specifically to solve these challenges faced by Dev/Ops/SRE and IT Teams. You can [create a free account](https://incidenthub.cloud/sign-up)
  which comes with 20 status page monitors and try it out.

IncidentHub monitors [hundreds](https://incidenthub.cloud/services) of cloud provider status pages periodically. It can send you notifications over the medium you choose - Email, Slack, PagerDuty, Discord, MS Teams, etc. 
IncidentHub also gives you a single dashboard where you can view ongoing and past incidents with your cloud providers:
![Availability page](/img/availability-page.png)

### The Benefits of Using a Monitoring Tool
The benefits of using a dedicated tool which monitors cloud status pages:
- Offers a single normalized view across cloud providers' status pages
- Hides the complexity of different status page formats
- Detects and handles changing status page formats over time
- Lets you choose the notification mode you want for alerts
- Offers notification modes not available in the status page

## Conclusion
Monitoring public status pages of cloud providers should form a key part of your monitoring strategy to maintain operational effectiveness and customer trust. 
Your team can stay informed and responsive during cloud service disruptions. There are various challenges in doing this by yourself - heterogeneous status page formats, 
non-overlapping notification modes, non-standard incident updates, and changing status page structures. A status page monitoring tool like IncidentHub can mitigate all these issues.

## FAQ
<details>
<summary>Why should I monitor my cloud provider status pages?</summary>
<p>
Your cloud providers publish information about ongoing incidents and maintenance on their public status pages. Such disruptions can affect your business operations.
</p>
</details>
<details>
<summary>What if I am not able to locate a cloud provider's status page?</summary>
<p>
Cloud providers have a link to their status page on their website or you can find it using web search. 
If you are unable to locate it please get in touch with us at [support@incidenthub.cloud](mailto:support@incidenthub.cloud) and we will try our best to help you.
</p>
</details>
<details>
<summary>What is the best way to receive notifications?</summary>
<p>
The best way to receive notifications about cloud provider incidents is specific to your team. Discuss with your team what would make it most effective. 
</p>
</details>
<details>
<summary>Is there a standard status page format?</summary>
<p>
There is no standard for a status page format. However, many cloud providers use one of the popular status page services like Atlassian Statuspage or Instatus. 
Providers using the same status page service will have a similar format. Some providers have their own format - like Google Cloud and Amazon Web Services. 
</p>
</details>
<details>
<summary>What are the benefits of using a dedicated status page monitoring tool?</summary>
<p>
A dedicated status page monitoring tool smoothens out the differences between different cloud providers' status pages and gives you the option to receive notifications
in your chosen way.
</p>
</details>
