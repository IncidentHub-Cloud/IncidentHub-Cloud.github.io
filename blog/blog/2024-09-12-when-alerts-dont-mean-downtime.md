---
slug: When-Alerts-Don't-Mean-Downtime-Preventing-SRE-Fatigue
title: When Alerts Don’t Mean Downtime - Preventing SRE Fatigue
authors: [ hrish ]
description: How to improve your alerts when routine deployments can trigger them leading to false alerts and causing SRE fatigue.
tags: [ monitoring, alerting, ops ]
---

### Introduction
A recent question in an SRE forum triggered this train of thought.

> How do I deal with alerts that are triggered by internal patching/release activities but don't actually cause a downtime? If we react to
these alerts we might not have time to react to actual alerts that are affecting customers.


I've paraphrased the question to reflect its essence. There is plenty to unravel here.

My first reaction to this question was that the SRE who posted this is in a difficult place with systemic issues. 

### Systemic Issues
Without knowing more about the org and their alerting policies, let's look at what we can dig out based on this question alone

- Patches/deployments trigger alerts
- The team does not react to such alerts to avoid spending valuable time that can be directed towards solving downtime that is affecting customers
- There is cognitive overhead of selectively reacting to some alerts, and ignoring others
- The knowledge of which alerts to react to is something only the SRE team knows
- Any MTTx data from such a setup are useless

The eventual impact is sub-optimal incident management, eventually affecting SLAs, and burnout in on-call folks. 

### Improving the SRE Experience
How would you approach fixing something like this? 

Some thoughts, in no particular order
- Setting the correct priority for alerts - Anything that affects customer perception of uptime, or can lead to data loss, is a P1. 
In larger organizations with independent teams responsible for their own microservices, I would extend the 
[definition of customer](https://www.linkedin.com/pulse/your-first-customer-team-hrishikesh-barua/) to any team in your org that
 depends on your service(s). If you are responsible for an API used by a downstream service, they are your customers too.

- Zero-downtime deployments - This is not as hard as it sounds if you design your systems with this goal in mind. For stateless
 web applications it is trivial to switch to a new version behind a load balancer. For stateful applications it can take a bit more work.

- Maintenance mode - This can fall into two categories - maintenance mode that has to be communicated to the customer, and maintenance 
mode that is internal - affecting other teams who consume your service. At the alerting level, you temporarily silence the specific alerts that will 
get triggered by the rollout.

- Investigate all alerts and disable useless ones - Not looking at an alert creates indeterminism and can lead to alert fatigue. The [alerting system](/The-Benefits-of-a-Single-Incident-Management-System) should be the single source of truth.

Solving such issues has to be a team effort involving the dev teams also. You can start by recognizing customer-facing uptime and 
having a sustainable on-call process as the priorities.
