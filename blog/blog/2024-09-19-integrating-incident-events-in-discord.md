---
slug: Integrate-Incident-Alerts-With-Discord-Using-Webhooks
title: Integrate Incident Alerts With Discord Using Webhooks
authors: [hrish]
description: Integrate your incident events with Discord using webhooks. Receive IncidentHub alerts directly in your Discord channel.
tags: [alerting, discord, ops, webhook]
---

<head>
<meta property="og:image" data-rh="true" content="https://storage.googleapis.com/ihub-static-storage/blog/discord.jpg" />
<meta name="twitter:image" data-rh="true" content="https://storage.googleapis.com/ihub-static-storage/blog/discord.jpg" />
</head>

## Introduction

Staying on top of your third-party Cloud and SaaS service outages is crucial to maintain the reliability of your own applications.
If Discord is your communication tool of choice, you can keep up with such incidents by pushing these events to a Discord channel.

Discord webhooks allow external applications to send messages to specific channels within a Discord server. This article describes how
to integrate Discord as a channel in your IncidentHub account using webhooks.

Note that IncidentHub also has an option to integrate with custom webhooks, which is different from Discord's webhooks. If you are using
Discord, choose the Discord option. For a custom webhook server, choose the
[Webhook option](https://docs.incidenthub.cloud/welcome-to-the-incidenthub-documentation/channels/webhook-integration).

## Discord Server Webhook Configuration

You must have the correct permissions on your Discord server to be able to do this.

Follow these steps to configure a webhook in your Discord server.

- Go to Server Settings
- Click on "Integrations" under the "APPS" section in the left navigation bar
- Click on "Create Webhook" under "Webhooks"
- Discord will create a Webhook and give it a random name.
- Click on it and edit the name to something descriptive like "IncidentHub alerts"
- Choose the channel where you want the IncidentHub alerts
- Click on "Copy Webhook URL" and keep it - you will need it in the next steps
- Click on "Save Changes"

![Discord webhook](/img/discord-webhook.png)

### Best Practices

- Give your Webhook a descriptive name. This name will show up as the poster in the channel when there are incident alerts.
- Do not save the webhook URL anywhere in your laptop or mobile phone.

## IncidentHub Account Configuration

- Login to your IncidentHub account and click on Channels -> Add -> Discord
- Add a Name and Description
- Under "Discord webhook URL", paste your webhook URL that you had copied earlier.

![Add to Discord](/img/add-to-discord.png)

IncidentHub will now send you incident events to your chosen Discord channel.

![Discord alerts](/img/discord-alerts.png)

## Conclusion

Discord offers a fast, interactive, and collaborative way of responding to incident alerts. The easiest way of integrating Discord with IncidentHub is
using the "Discord" option in the "My Channels" section in your IncidentHub dashboard.

## FAQ

<details>
<summary>Can I add multiple Discord channels in my IncidentHub account?</summary>
<p>
Yes. You can add multiple Discord channels to your IncidentHub account. The number of channels is only limited by your subscription plan.
</p>
</details>
<details>
<summary>What information is sent by IncidentHub in a Discord message?</summary>
<p>
IncidentHub sends all the important details of the incident - title, the last updated date and time of the incident, and a summary of the incident.
It also includes a link to the service's status page and a link to the incident itself on the service's status page.
</p>
</details>
<details>
<summary>When should I choose Discord to receive IncidentHub alerts?</summary>
<p>
You can choose Discord to receive alerts if it's the primary means of communication with your team. 
</p>
</details>
<details>
<summary>What are the benefits of using Discord for incident alerts?</summary>
<p>
Discord is a popular means of communication between team members. It offers real-time notifications, whether you are on a desktop or a mobile phone.
You can directly forward incident event messages to other team members and create threads and tag people. These features enable quicker response times and
better team co-ordination compared to other channels like email.
</p>
</details>
<details>
<summary>Are Discord webhooks secure?</summary>
<p>
Discord webhooks have a secret token embedded in the webhook URL. IncidentHub stores this URL in an encrypted form so it is not accessible to anyone. 
However, you should ensure that you do not copy or store the webhook URL anywhere in your laptop or mobile phone in the process of configuring the webhook.
</p>
</details>
