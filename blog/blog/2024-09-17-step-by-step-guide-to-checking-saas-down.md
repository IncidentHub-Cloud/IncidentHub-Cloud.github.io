---
slug: A-Step-by-Step-Guide-to-Checking-if-a-SaaS-is-Down
title: A Step by Step Guide to Checking if a SaaS is Down
authors: [ hrish ]
description: How to check if a SaaS service you use and depend on is down or experiencing an outage using different methods.
tags: [ monitoring, alerting, saas, uptime, incident-management, status-pages ]
---

## Introduction

Modern businesses depend heavily on Software as a Service (SaaS). Almost all aspects of business operations - accounting, HR, payroll, marketing, IT, sales, 
support - depend on one or more SaaS applications. SaaS is not limited to being used by software development teams. Given this dependency on SaaS applications,
 their uptime becomes tightly tied to a business's uptime. Any [SaaS downtime](/Monitoring-Your-Third-Party-Cloud-SaaS-Services-is-Critical) can affect both a business's daily operations as well as the user experience.

How to check if a SaaS is experiencing downtime? Follow the steps below:

1. [Visit the SaaS Provider's Status Page](#one)
2. [Use External Monitoring Services](#two)
3. [Check Social Media](#three)
4. [Run Manual Tests](#four)
5. [Incident Communication](#five)
6. [Conclusion](#six)
7. [FAQ](#seven)
8. [Popular SaaS Service Statuses](#eight)

## Visit the SaaS Provider's Status Page {#one}
The SaaS provider's status page will have first-hand information about ongoing issues.
<!-- truncate -->
### Locate the SaaS provider's Status Page
You can find this by either doing a web search like "Zoom status page" or "OpenAI status page". You can also visit the
SaaS provider's website and look for the status page link - it is usually in the footer. Another option is to check their documentation.
If it's not available ask on their social media handles.

### Understanding Status Pages
A SaaS provider's status page will indicate if the service is experiencing any downtime. Common status indicators are
- Degraded performance
- Service disruption
- Partial outage

For example, take a look at the [OpenAI status page](https://status.openai.com/)

![OpenAI status](/img/openai-status-page.png)

Status pages also show you past incidents:

![OpenAI past incidents](/img/openai-past-incidents.png)

You can find more information about the outage by clicking on the downtime link on the status page. It will have details about which components or services are 
affected by the outage. If your SaaS has many independent locations, like a cloud provider, look for region/zone information as well. It's possible that the outage
is limited to some components or locations. Check if any of the [components or services](/Monitoring-Specific-Components-and-Regions-in-Your-Third-Party-Services) you use are in the list. If it's a cloud provider or a similar service,
check if the affected locations are among the ones that you use.

E.g. this Google Cloud outage affected Google Compute Engine in the asia-northeast1 region.

![Google Cloud incident](/img/google-cloud-incident.png)

## Use External Monitoring Services {#two}
There are many monitoring tools that can track SaaS uptime. They are designed to continuously check the availability of SaaS services. These tools 
take away the hassle of you having to check uptime manually, especially if you have many SaaS applications. Checking the status page of each SaaS application
is cumbersome. A status page monitoring tool like IncidentHub can make very easy by showing you the overall status of all your SaaS providers in one place.

### Setting Up a Monitoring Tool
IncidentHub is a monitoring tool that checks official status pages of hundreds of SaaS applications. It notifies you in real-time if there is an outage or downtime.
Setting up IncidentHub is just a few steps
- Create a free account at https://incidenthub.cloud/sign-up
- Choose the services you want to monitor
![Choose service](/img/choose-service.png)
- Choose how you want to get notified

## Check Social Media {#three}
Twitter and Reddit are popular platforms to find SaaS outage information. Users post on these platforms to find more information and to check if others 
are also experiencing similar downtimes with the service. Such platforms can often provide real-time updates from other users. A caveat here is that
if the outage is localized to some components or regions, you may not always find information about it on social media.

If your SaaS has a sub-Reddit, check the latest postings there for information. 

Other community forums where users of the SaaS hang out can also provide important outage information.

## Run Manual Tests {#four}
Running manual tests is another way to check if your SaaS is experiencing downtime. Check common functionality issues such as login failures, API errors, resource creation issues, 
and other specific functionalities. Correlate these with the official status page data, and what other users are reporting on social media. This is more of an ad-hoc method but it can
add valuable information.

## Incident Communication {#five}
It's very important to communicate with your team and your stakeholders about ongoing SaaS incidents. Your users and other business stakeholders should be
notified as soon as you know there is an outage. This helps them to plan their work accordingly, and also decreases the number of user requests and helpdesk tickets 
you might get.

Incident communication is effective when you continuously share updates as they occur. It builds trust with your users. It's even better if users can check the
status of their SaaS applications themselves on a status page or a dashboard.

![Incident dashboard](/img/incident-dashboard.png)

Create alerts in your monitoring tool to inform your team about the status of services. Monitoring tools can integrate with 
[most communication tools](https://docs.incidenthub.cloud/welcome-to-the-incidenthub-documentation/channels) like email, Slack, Discord, etc. 

## Conclusion  {#six}

In summary, you can check if your SaaS applications are down by checking the official status pages, using a monitoring tool, checking social media, and running manual tests. 
Keep communicating with your users about the current status.

This guide offers a clear method for users to quickly determine if their SaaS applications are down.

## FAQ  {#seven}

<details>
<summary>How can you locate a SaaS provider's status page?</summary>
<p>
Check the SaaS provider's website, or run a web search.
</p>
</details>
<details>
<summary>Why is an external monitoring service important to track SaaS outages?</summary>
<p>
External monitoring tools continuously check SaaS status pages and other sources for incidents. They also check multiple SaaS providers at the same time. 
Doing this yourself is impractical and time-consuming.
</p>
</details>
<details>
<summary>How can you use social media to find out about SaaS downtime?</summary>
<p>
Popular social media channels like Twitter and Reddit often have real-time updates about SaaS outages from users who are experiencing downtime. SaaS-specific subreddits can be
a good source of such information.
</p>
</details>

## Popular SaaS Service Statuses  {#eight}
[Airtable status](https://incidenthub.cloud/service/airtable)  
[Akamai status](https://incidenthub.cloud/service/akamai)  
[Azure status](https://incidenthub.cloud/service/azure)  
[Cloudflare status](https://incidenthub.cloud/service/cloudflare)  
[Coinbase status](https://incidenthub.cloud/service/coinbase)  
[Discord status](https://incidenthub.cloud/service/discord)  
[Dropbox status](https://incidenthub.cloud/service/dropbox)  
[Fortnite status](https://incidenthub.cloud/service/fortnite)  
[GitHub status](https://incidenthub.cloud/service/github)  
[Google Cloud status](https://incidenthub.cloud/service/googlecloudplatform)  
[Hetzner status](https://incidenthub.cloud/service/hetzner)  
[npm status](https://incidenthub.cloud/service/npm)  
[OpenAI status](https://incidenthub.cloud/service/openai)  
[PayPal status](https://incidenthub.cloud/service/paypal)  
[Railway status](https://incidenthub.cloud/service/railway)  
[Reddit status](https://incidenthub.cloud/service/reddit)  
[Rollbar status](https://incidenthub.cloud/service/rollbar)  
[SendGrid status](https://incidenthub.cloud/service/sendgrid)  
[Twilio status](https://incidenthub.cloud/service/twilio)  
[Vercel status](https://incidenthub.cloud/service/vercel)  
[Zapier status](https://incidenthub.cloud/service/zapier)  
