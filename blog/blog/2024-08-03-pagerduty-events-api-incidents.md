---
slug: Integrate-Your-Monitoring-System-With-PagerDutys-Events-API-V2
title: Integrate Your Monitoring System With PagerDuty Using Events API V2
authors: [ hrish ]
description: Integrate your incident generation tool with PagerDuty with its Events API V2. Get a PagerDuty integration key and create and resolve incidents directly from the API.
tags: [ monitoring, pagerduty, on-call, ops ]
---

## Introduction
PagerDuty's Events API V2 lets you push events from your monitoring systems to PagerDuty. You can push such events when
there is a triggered, updated, or resolved incident.

### Incident Lifecycle
The lifecycle of an incident will typically go through these states

| State        | Triggered By     | Source                   |
|--------------|------------------|--------------------------|
| Triggered    | Automatic        | Monitoring system        |
| Acknowledged | On-call Engineer | PagerDuty app/Phone call |
| Updated      | Automatic        | Monitoring system        |
| Resolved     | On-call Engineer | PagerDuty app/Phone call |


You can either use any of the [PagerDuty client SDKs to send events](https://developer.pagerduty.com/docs/ZG9jOjExMDI5NTg2-api-client-libraries), or roll out your own. 

## PagerDuty Integration
Many self-hosted and SaaS monitoring tools have inbuilt PagerDuty integration. This involves getting a PagerDuty API key and add it to your monitoring
tool's configuration.

### How To Get a PagerDuty Integration Key
You can generate a PageDuty integration key from your PagerDuty account. You can [follow these steps](https://docs.incidenthub.cloud/welcome-to-the-incidenthub-documentation/
channels/pagerduty-integration) to get they API key

### Integrating With the PagerDuty API
A typical event push will look look like this (example in NodeJS):

```javascript
import { event } from "@pagerduty/pdjs";

.....
    event({
        "data": {
            "routing_key": "Your-Routing-Key-Here",
            "event_action": "trigger",
            "dedup_key": DEDUP_KEY,
            "payload": {
                "summary": "Event processor in us-east-1",
                "source": "rnmd-2398.xyzcloud.io",
                "severity": "critical",
                "timestamp": "2024-07-17T08:42:58.315+0000",
            },
            "links": [
                {
                    "href": "https://incidenthub.cloud/dashboard",
                    "text": "Go to dashboard",
                },
            ],
        },
.....
```
When your monitoring system sends this event to trigger an incident, it's important to have a unique DEDUP_KEY. This field
determines whether subsequent events for this incident will be grouped together in PagerDuty. When your system sends an update, or 
a resolved event, the DEDUP_KEY must match the one sent during the trigger call. In other words, the DEDUP_KEY must be unique per incident.

IncidentHub integrates with PagerDuty and uses the incident's public URL as the DEDUP_KEY as that is unique globally, 
and also remains the same for an incident. Each incident update event has the same DEDUP_KEY.

Let us look at a Google Cloud example. An [incident affecting Anthos Service Mesh](https://status.cloud.google.com/incidents/UqqtFekMWsNKUV7uuztP) 
in Nov 2023 went through 4 updates including trigger and resolve. The URL remained the same for the incident as it went through the lifecycle.

![Google cloud incident lifecycle](/img/google-cloud-incident-lifecycle.png)

## Conclusion
Integrating with the PagerDuty API is straightforward. While integrating make sure you keep these things in mind:
- Map your monitoring system's alert priorities to the appropriate PagerDuty levels
- Use the correct DEDUP_KEY for each case
- Provide additional details about the incident using the custom fields. E.g. in the example above, you can provide more information about the incident
using a custom link pointing to the dashboard

References
- [PagerDuty Events API V2](https://developer.pagerduty.com/api-reference/YXBpOjI3NDgyNjU-pager-duty-v2-events-api)
- [PagerDuty Client Libraries](https://developer.pagerduty.com/docs/ZG9jOjExMDI5NTg2-api-client-libraries)


