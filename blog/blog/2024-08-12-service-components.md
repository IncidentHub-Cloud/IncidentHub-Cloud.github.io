---
slug: Monitoring-Specific-Components-and-Regions-in-Your-Third-Party-Services
title: Monitoring Specific Components and Regions in Your Third-Party Services
authors: [ hrish ]
description: How to monitor specific components and regions in your cloud and SaaS services in IncidentHub. Choose the services and geographical regions that you use.
tags: [ monitoring, components, alerting, ops ]
---



Chances are, most of your third-party cloud and SaaS dependencies are globally distributed and have many regions of operation. 
Chances are, your applications use a subset of a cloud or SaaS service. If you are monitoring such a service,
why should you receive alerts for all regions or every single component in the service?

E.g. if you use [Digital Ocean](https://incidenthub.cloud/service/digitalocean), you might be using Kubernetes in their US locations (NYC and SFO). You would want to know
only when there is an outage in one of these locations. Digital Ocean's status page gives you the option to subscribe to 
outages across the board - it’s all or nothing. This is the case with most services with a few exceptions.

### Choosing Specific Components to Monitor
You can now choose which components/regions you wish to monitor in IncidentHub. Let us continue with our Digital Ocean 
example.

You can choose to monitor all components:

<img src="/img/edit-do.png" style={{border: '1px solid #000'}} alt="Monitor all components"/>

or a subset that is relevant to you:

<img src="/img/new-monitor-do.png" style={{border: '1px solid #000'}} alt="Monitor specific components"/>

Once you save this configuration, you will be alerted only for outages that affect these components.

### Adding/Removing Components

You can always go back and edit the components later. This is helpful when you start using say, Kubernetes in a new region, 
or new components. In your IncidentHub dashboard, you should see the "Edit Components" button next to your list of services.

<img src="/img/edit-components-do.png" style={{border: '1px solid #000'}} alt="Edit components"/>

### Benefits

- This new feature will help you to receive only relevant and actionable alerts. If you are a developer you need not worry 
about receiving irrelevant alerts for components your application does not even use.
- SRE/Ops teams can react to infrastructure issues quicker without wading through noise and correlate those with outages 
reported in their own applications. 
- If you are in an IT Team with hundreds or thousands of users depending on tools like Zoom, Slack, or Google Workspace, you can 
react to issues before your users start logging helpdesk tickets.

This powerful new feature, which significantly reduces alert noise, is being rolled out to eligible services as of this writing.
Log in to your [IncidentHub account](https://incidenthub.cloud/dashboard) today to start customizing your monitoring settings. 
For a step-by-step guide on how to set up your custom monitoring preferences, check out our 
[knowledge base article](https://docs.incidenthub.cloud/welcome-to-the-incidenthub-documentation/services/monitoring-a-service). 
We would love to hear how this new feature is working for you.

Watch this blog or our [X](https://x.com/incident_hub)/[LinkedIn](https://www.linkedin.com/company/incidenthub/) 
feeds for updates on more exciting new features.
