---
slug: The-Benefits-of-a-Single-Incident-Management-System
title: The Benefits of a Single Incident Management System
authors: [hrish]
description: It is important to have a single incident management system irrespective of how many monitoring systems you have.
tags: [monitoring, incident-management]
---

How many monitoring tools do you have?

Chances are at least 2-3. One tool usually does not cover all cases, and it’s usually a combination of self-managed and managed tools. 
Self-managed gives you more control over custom configurations and cost. Managed ones take away the headache of running it yourself.

Prometheus is the de-facto standard for monitoring these days if you have a modern application stack and you want to manage your own
 monitoring. It is metrics-based, i.e., it uses metrics as the source of data from all the monitored systems. There are 
 [ready-made exporters](https://prometheus.io/docs/instrumenting/exporters/) for almost all popular infrastructure components. 
 You can send your application and business metrics to Prometheus too with 
 [OpenTelemetry exporters](https://opentelemetry.io/docs/specs/otel/metrics/sdk_exporters/prometheus/).

This model does not work for all aspects of your service. E.g. If you want to monitor external properties like your website, or use synthetic
 monitoring to check your customer-facing APIs from global locations, you could use something like Pingdom or UptimeRobot. This becomes another source of 
 data about your service's uptime.

### Many Monitors, One Incident Management System
A downside of having more than one monitoring system in place, regardless of the need, is that you have multiple sources of data. You have to
 consult multiple systems if you want to know the overall status. However, it is important that you receive alerts in one single incident and 
 on-call management system. This allows a single place from where your on-call teams can get paged.

So ensuring that all your monitoring tools can integrate with your on-call system is crucial.

A typical Prometheus setup might look like:

![Monitoring setup](/img/unified-monitoring-1.png)

If you have other monitoring systems, you should be able to route those alerts into your on-call/incident response system. Most tools support this:

![Monitoring setup](/img/unified-monitoring-2.png)

[IncidentHub](https://incidenthub.cloud/) monitors your external SaaS and cloud providers and notifies you when they have incidents. 
It can easily integrate into your existing incident management system.

![Monitoring setup](/img/unified-monitoring-3.png)

If you’re using PagerDuty, just add a PagerDuty channel and you’re good to go. Check out the [documentation](https://docs.incidenthub.cloud/channels) for more.
