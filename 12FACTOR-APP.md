
# The Twelve Factor App (12Factor)

  Twelve-factor app is a methodology for building distributed applications that run in the cloud and are delivered as a service.
  The twelve-factor app is a methodology for building software-as-a-service.

  The approach was developed by Adam Wiggins, the co-founder of Heroku, a platform-as-a-service which is now part of Salesforce.com. Wiggin’s goal was to synthesize best practices for deploying an app on Heroku and provide developers who are new to the cloud with a framework for discussing the challenges of native cloud applications.


  #### 12 factors developers should think about when building native cloud apps.

  **1.  Code base**

  Use one codebase, even when building cross-platform apps. Address the needs of specific devices with version control.

  **2.  Dependencies**

  Explicitly declare and isolate all dependencies.

  **3.  Configuration**

  Don’t store config as constants in code. Instead, design the app to read its config from the environment.

  **4.  Backing Services**

  Treat back-end services as attached resources to be accessed with a URL or other locator stored in config.

  **5.  Build, Release, Run**

  Strictly separate build and run stages.

  **6.  Processes**

  Execute the app as one or more stateless processes. Data that must be persistent should be stored in a stateful backing service.

  **7.  Prot Binding**

  Use port binding to export services.

  **8.  Concurrency**

  Scale out apps horizontally, not vertically.

  **9.  Disposability**

  Use fast startups and graceful shutdowns to maximize robustness.

  **10. Parity**

  Facilitate continuous deployment by ensuring that development, staging, and production environments are as similar as possible.

  **11. Logs**

  Treat logs as event streams. Logs should not be concerned with routing or storing the app’s output.






