"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[307],{3749:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"The-Benefits-of-a-Single-Incident-Management-System","metadata":{"permalink":"/The-Benefits-of-a-Single-Incident-Management-System","source":"@site/blog/2024-06-04-unified-incident-management.md","title":"The Benefits of a Single Incident Management System","description":"How many monitoring tools do you have?","date":"2024-06-04T00:00:00.000Z","tags":[{"label":"monitoring","permalink":"/tags/monitoring"},{"label":"incident-management","permalink":"/tags/incident-management"}],"readingTime":1.68,"hasTruncateMarker":false,"authors":[{"name":"Hrishikesh Barua","title":"Founder @IncidentHub.cloud","url":"https://hrishikeshbarua.bio.link","imageURL":"https://storage.googleapis.com/ihub-static-storage/me.jpeg","key":"hrish"}],"frontMatter":{"slug":"The-Benefits-of-a-Single-Incident-Management-System","title":"The Benefits of a Single Incident Management System","authors":["hrish"],"tags":["monitoring","incident-management"]},"unlisted":false,"nextItem":{"title":"Monitoring Your Third-Party Cloud and SaaS Services is Critical","permalink":"/Monitoring-Your-Third-Party-Cloud-SaaS-Services-is-Critical"}},"content":"How many monitoring tools do you have?\\n\\nChances are at least 2-3. One tool usually does not cover all cases, and it\u2019s usually a combination of self-managed and managed tools. \\nSelf-managed gives you more control over custom configurations and cost. Managed ones take away the headache of running it yourself.\\n\\nPrometheus is the de-facto standard for monitoring these days if you have a modern application stack and you want to manage your own\\n monitoring. It is metrics-based, i.e., it uses metrics as the source of data from all the monitored systems. There are \\n [ready-made exporters](https://prometheus.io/docs/instrumenting/exporters/) for almost all popular infrastructure components. \\n You can send your application and business metrics to Prometheus too with \\n [OpenTelemetry exporters](https://opentelemetry.io/docs/specs/otel/metrics/sdk_exporters/prometheus/).\\n\\nThis model does not work for all aspects of your service. E.g. If you want to monitor external properties like your website, or use synthetic\\n monitoring to check your customer-facing APIs from global locations, you could use something like Pingdom or UptimeRobot. This becomes another source of \\n data about your service\'s uptime.\\n\\n### Many Monitors, One Incident Management System\\nA downside of having more than one monitoring system in place, regardless of the need, is that you have multiple sources of data. You have to\\n consult multiple systems if you want to know the overall status. However, it is important that you receive alerts in one single incident and \\n on-call management system. This allows a single place from where your on-call teams can get paged.\\n\\nSo ensuring that all your monitoring tools can integrate with your on-call system is crucial.\\n\\nA typical Prometheus setup might look like:\\n\\n![Monitoring setup](/img/unified-monitoring-1.png)\\n\\nIf you have other monitoring systems, you should be able to route those alerts into your on-call/incident response system. Most tools support this:\\n\\n![Monitoring setup](/img/unified-monitoring-2.png)\\n\\n[IncidentHub](https://incidenthub.cloud/) monitors your external SaaS and cloud providers and notifies you when they have incidents. \\nIt can easily integrate into your existing incident management system.\\n\\n![Monitoring setup](/img/unified-monitoring-3.png)\\n\\nIf you\u2019re using PagerDuty, just add a PagerDuty channel and you\u2019re good to go. Check out the [documentation](https://docs.incidenthub.cloud/channels) for more."},{"id":"Monitoring-Your-Third-Party-Cloud-SaaS-Services-is-Critical","metadata":{"permalink":"/Monitoring-Your-Third-Party-Cloud-SaaS-Services-is-Critical","source":"@site/blog/2024-05-20-monitoring-third-party-cloud--saas-services-critical.md","title":"Monitoring Your Third-Party Cloud and SaaS Services is Critical","description":"If you have a software-based business, you are using at least a few cloud based tools. It does not matter if you are a solo developer, or part of a 50-member team in a large organization. Take this random list and chances are you are using at least half of them:","date":"2024-05-20T00:00:00.000Z","tags":[{"label":"monitoring","permalink":"/tags/monitoring"}],"readingTime":2.52,"hasTruncateMarker":false,"authors":[{"name":"Hrishikesh Barua","title":"Founder @IncidentHub.cloud","url":"https://hrishikeshbarua.bio.link","imageURL":"https://storage.googleapis.com/ihub-static-storage/me.jpeg","key":"hrish"}],"frontMatter":{"slug":"Monitoring-Your-Third-Party-Cloud-SaaS-Services-is-Critical","title":"Monitoring Your Third-Party Cloud and SaaS Services is Critical","authors":["hrish"],"tags":["monitoring"]},"unlisted":false,"prevItem":{"title":"The Benefits of a Single Incident Management System","permalink":"/The-Benefits-of-a-Single-Incident-Management-System"}},"content":"If you have a software-based business, you are using at least a few cloud based tools. It does not matter if you are a solo developer, or part of a 50-member team in a large organization. Take this random list and chances are you are using at least half of them:\\n- Zoom\\n- Google Workspace\\n- Slack\\n- Public cloud/PaaS - GCP/AWS/Azure/Render/Heroku/Railway/DigitalOcean/Hetzner\\n- PagerDuty/Opsgenie\\n- Cdnjs\\n- DockerHub\\n- GitLab/GitHub\\n- TravisCI/CircleCI/Semaphore\\n- Let\u2019s Encrypt\\n\\nYour entire business - irrespective of org or market size - including your development tools, collaboration/communication tools, infrastructure and hosting, monitoring, even email - is dependent on services that you don\u2019t control. They are provided by other vendors.\\n\\nOf course, you pay for some of them and they all have SLAs. Having an SLA does not translate to 100% uptime. Companies will try their best to meet SLAs - which promise a percentage of uptime (usually 99.xx). There are going to be incidents in your providers at some point, and the effect will cascade to the service that you provide to your customers. This means that your own product\u2019s SLA can be breached due to causes outside your control.\\n\\nCan you not ask the service provider to notify you directly when this happens? Unlikely, unless you are a really big enterprise. However, most of them have public status pages where you can sign up to receive these alerts over SMS, email, Slack, etc.\\n\\nThe downside is - if you have 50 such services, you have to sign up on 50 pages, one by one. If you want to change your notification channel (another Slack channel, or SMS instead of Slack), you have to edit it on each of those 50 pages.\\n\\nHow does knowing about such issues help you?\\nA few examples (true stories) will illustrate this\\n\\n- Public cloud outages that are yet to impact your applications. If you get to know beforehand that your cloud vendor has an ongoing incident in your region, you can take preventive steps so that your applications are not affected.\\n- Paging service outages. Your on-call teams can miss alerts because your paging service is unable to send alerts.\\n- Delayed/missing messages in your communication tool. Your remote teams are not in sync because your comm tool is dropping only some, not all, messages.\\n- Your hosted Git repo is throwing errors, while your customer waits for a critical bug fix.\\n\\nKnowing that there is something wrong with the SaaS/cloud provider gives you an opportunity to do something about it, proactively.\\n\\nThere is no single place, no easy way where you can\\n\\n- Choose services to monitor\\n- Choose a channel to receive alerts\\n\\nThis is why we built [IncidentHub](https://incidenthub.cloud/) - based on years of real-world experience. The UI is very simple so that receiving your first alert does not involve more than 2 steps. Check out the demo video below, and try it out yourself at [https://incidenthub.cloud/](https://incidenthub.cloud/)\\n\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/3w-g7fYFtIg\\" frameborder=\\"0\\" gesture=\\"media\\" allow=\\"autoplay; encrypted-media\\" allowfullscreen></iframe>\\n\\nOriginally published at [https://www.linkedin.com/feed/update/urn:li:activity:7196385217270415361/](https://www.linkedin.com/feed/update/urn:li:activity:7196385217270415361/)"}]}}')}}]);