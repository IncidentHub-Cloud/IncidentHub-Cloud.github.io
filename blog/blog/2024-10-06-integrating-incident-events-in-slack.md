---
slug: Integrate-Incident-Alerts-Into-Your-Slack-Workspace
title: Integrate Incident Alerts Into Your Slack Workspace
authors: [hrish]
description: Integrate your incident events with Slack using incoming webhooks. Receive IncidentHub alerts directly in your Slack channel.
tags: [alerting, slack, ops, webhook]
---

<head>
<meta property="og:image" data-rh="true" content="https://storage.googleapis.com/ihub-static-storage/blog/slack.jpg" />
<meta name="twitter:image" data-rh="true" content="https://storage.googleapis.com/ihub-static-storage/blog/slack.jpg" />
<meta name="author" content="Hrishikesh Barua"/>
</head>

## Introduction

Staying on top of your third-party Cloud and SaaS service outages is crucial to maintain the reliability of your own applications.
Like many modern teams, [Slack](/The-Rising-Role-of-Slack-in-Incident-Management) might be your communication tool of choice. You can keep up with such incidents by pushing these events to a Slack channel.

There are different ways of pushing incident events to Slack. In this article we will explore how to integrate IncidentHub incident lifecycle
events using an incoming webhook. An incoming webhook can be used to send incident trigger, update, and resolve events to a specific Slack channel.

Note that IncidentHub also has an option to integrate with custom webhooks, which is different from Slack's webhooks. If you are using
Slack, choose the Slack option. For a custom webhook server, choose the
[Webhook option](https://docs.incidenthub.cloud/welcome-to-the-incidenthub-documentation/channels/webhook-integration). The format of the Slack webhook
payload is different from that of the Slack webhook.

## Slack Incoming Webhook Configuration

You must have the correct permissions on your Slack workspace to be able to do this.

Follow these steps to configure an incoming webhook in your Slack workspace.
<!-- truncate -->
- Create a new channel where you want to receive your incident alerts, or choose an existing channel.
- Follow the steps in the [Slack documentation](https://api.slack.com/messaging/webhooks) to create an incoming webhook.
- Copy the webhook URL. 

### Best Practices

- Give your app a descriptive name. This name will show up as the poster in the channel when there are incident alerts.
- Do not save the webhook URL anywhere in your laptop or mobile phone.

## IncidentHub Account Configuration

- Login to your IncidentHub account and click on Channels -> Add -> Slack
- Add a Name and Description
- Under "Slack Webhook URL", paste your webhook URL that you had copied earlier.

![Add to Slack](/img/add-to-slack.png)

IncidentHub will now send you incident events to your chosen Slack channel.

![Slack alerts](/img/slack-alerts.png)

## Conclusion

Slack offers a fast, interactive, and collaborative way of responding to incident alerts. The easiest way of integrating Slack with IncidentHub is
using the "Slack" option in the "My Channels" section in your IncidentHub dashboard.

## FAQ

<details>
<summary>Can I add multiple Slack channels in my IncidentHub account?</summary>
<p>
Yes. You can add multiple Slack channels to your IncidentHub account. The number of channels is only limited by your subscription plan.
</p>
</details>
<details>
<summary>What information is sent by IncidentHub in a Slack message?</summary>
<p>
IncidentHub sends all the key details of the incident - the title, and the last updated date and time of the incident. The title is also linked to 
the incident itself. It also includes a link to the service's status page.
</p>
</details>
<details>
<summary>When should I choose Slack to receive IncidentHub alerts?</summary>
<p>
You can choose Slack to receive alerts if it's the primary means of communication with your team. 
</p>
</details>
<details>
<summary>What are the benefits of using Slack for incident alerts?</summary>
<p>
Slack is a popular means of communication between team members. It offers real-time notifications, whether you are on a desktop or a mobile phone.
You can directly forward incident event messages to other team members and create threads and tag people. These features enable quicker response times and
better team co-ordination compared to other channels like email.
</p>
</details>
<details>
<summary>Are Slack webhooks secure?</summary>
<p>
Slack webhooks have a secret token embedded in the webhook URL. IncidentHub stores this URL in an encrypted form so it is not accessible to anyone. 
However, you should ensure that you do not copy or store the webhook URL anywhere in your laptop or mobile phone in the process of configuring the webhook.
</p>
</details>

You might also be interested in [Integrate Incident Alerts With Discord Using Webhooks](/Integrate-Incident-Alerts-With-Discord-Using-Webhooks)