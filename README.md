## Google Tag Manager Integration - Voucher Network & Checkout Benefits

##### This documentation helps you successfully integrate and configure Sovendus Voucher Network and/or Checkout Benefits on your website via Google Tag Manager, as an alternative to direct code integration.

> [!WARNING]
> **Ad Blocker Impact Warning**
> Google Tag Manager is often blocked by ad blockers. We strongly recommend using a plugin or direct integration instead, as 5%–10% of traffic may be lost otherwise.

### Implementation Guide

#### Step 1 – Access Google Tag Manager

> [!INFO]
> **Getting Started with GTM**
> Log in to the GTM account for the site where you want to implement Sovendus.
>
> ![GTM Home](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-GTM-v2/main/screens/1_create_tag.png)
>
> **Quick Steps:**
>
> 1. Navigate to the **Tags** section
> 2. Click **New** to add a new tag
> 3. Give your tag a descriptive name (e.g., "Sovendus Integration")

#### Step 2 – Find and Install the Sovendus Template

> [!EXAMPLE]
> **Template Installation Process**
> Follow these steps to locate and install the official Sovendus template from the GTM gallery.
>
> **Step 2.1: Open Tag Configuration**
>
> - Click on **Tag Configuration** to open the tag type selector.
>
> ![GTM initial empty tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/2_initial_empty_tag.png)
>
> **Step 2.2: Access Template Gallery**
>
> - Click on **Discover more tag types...** to browse the community template gallery.
>
> ![GTM Import Sovendus Template](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/3_select_store.png)
>
> **Step 2.3: Search for Sovendus**
>
> - Search for **Sovendus** and select Sovendus Integration for Voucher Network and Checkout Benefits.
>
> ![GTM Import Sovendus Template 2](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/5_select_sovendus_template.png)
>
> **Step 2.4: Confirm Installation**
>
> - Click **Choose template** to add it to your GTM container.
>
> ![GTM Import Sovendus template confirm](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/6_confirm_sovendus_template.png)

#### Step 3 – Configure Traffic Numbers

> [!INFO]
> **Configuration Overview**
> Configure your Sovendus Tag with the Traffic Source and Traffic Medium Numbers provided by your Account Manager/Customer Success Manager. Choose between single or multi-country setup based on your needs.

##### Option A: Single Country/Language Configuration

> [!EXAMPLE]
> **Simple Setup for Single Market**
> Perfect for websites operating in one country or language. Simply enter your Sovendus identifiers directly.
>
> ![GTM Sovendus traffic source and medium numbers config](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/7_tm_ts_config_static.png)
>
> **Configuration Steps:**
>
> - [ ] Enter your **Traffic Source Number** (provided by Sovendus)
> - [ ] Enter your **Traffic Medium Number** (provided by Sovendus)
> - [ ] Verify the numbers match what you received from your account manager

##### Option B: Multi-Country/Language Configuration

> [!WARNING]
> **Advanced Configuration Required**
> For websites serving multiple countries or languages, you'll need to create GTM variables that dynamically return the correct identifiers.
>
> ![GTM Sovendus locale based traffic source and medium numbers config](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/8_tm_ts_config_variable.png)
>
>
> **Create Variables in GTM:**
>
> - Navigate to **Variables** section in GTM
> - Create variables that return appropriate numbers per locale
> - Variables should return empty string if country/language not supported
>
> **Variable Creation Methods:**
>
> - URL-based detection (e.g., `/en/`, `/de/`, `/fr/`)
> - Data layer variables from your website
> - Custom JavaScript variables
> - Lookup tables based on domain or subdomain
>
> **Implementation Example:**
>
> - You can use a custom JavaScript variable to determine the correct traffic source number based on the URL path.
>
>    ```javascript
>    // Example: URL-based country detection
>    function() {
>      var path = {{Page Path}};
>
>      switch (true) {
>        case path.indexOf('/de/') === 0:
>          return '12345'; // German traffic source
>        case path.indexOf('/fr/') === 0:
>          return '67890'; // French traffic source
>        default:
>          return ''; // In other cases, return empty string 
>      }
>    }
>    ```

#### Step 4 – Select Your Sovendus Products

> [!INFO]
> **Product Selection Guide**
> Choose the Sovendus products you want to integrate. Each product requires different order and customer data parameters.
>
> ![GTM Sovendus product selector](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/13_sovendus_product_selector.png)
>
> **Available Products:**
>
> - **Voucher Network** - Display relevant vouchers and offers to customers
> - **Checkout Benefits** - Show exclusive benefits during checkout process
>
> **📖 Need Parameter Details?**
> Find comprehensive parameter documentation at [Sovendus Parameter Guide](https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Parameter).

#### Step 5 – Configure hasConsent Parameter

> [!INFO]
> **Consent Management**
> The `hasConsent` parameter is critical for GDPR and privacy compliance. This parameter allows the user's provided level of consent to easily be transferred to the Sovendus integration. Sovendus will then tailor functionality accordingly, as below

> [!WARNING]
> **Please Note**
> This `hasConsent` parameter is only relevant for partners who have signed a Data Processing Agreement with Sovendus - if you are unsure, or have any queries, please reach out to your Customer Success Manager

| Scenario | Value | Description |
|----------|-------------|---------|
| ✔ Consent has been explicitly provided | `hasConsent` = `true` | The Sovendus integration loads successfully with full functionality, such as additional analytics, user recognition and personalisation of offers |
| ✘ Consent has not been explicitly provided | `hasConsent` = `false` | The Sovendus integration loads successfully, but with minimal usage data (anonymised) |

> [!INFO]
> **Consent Variable in GTM:**
> ![GTM hasConsent Parameter](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/GTM_ConsentParameter.png)
> In most cases, a GTM variable will be the best way to handle this. The exact method to determine/set this variable will depend on your particular Consent Management Platform and processes, but please see the general variable creation process below:
> - Navigate to the **Variables** section in GTM
> - Create a boolean variable (if one does not already exist) to return a `true` or `false` value, depending on the user's provided level of consent
> - This variable can pull from the Data Layer, a particular cookie value, or any other relevant value, depending on your Consent Management setup
> - Once created, add this variable to the 'hasConsent Parameter' field within the Sovendus Template, as shown with the `CookieConsentBool` example variable above

#### Step 6 – Configure Other Required Parameters

> [!WARNING]
> **Data Layer Requirements**
> Ensure your data layer contains the required order and customer information before configuring variables. If they don't exist, add them to your website's data layer implementation.
>
> **Data Layer Setup Guide:** [Google's Data Layer Documentation](https://developers.google.com/tag-platform/tag-manager/datalayer)

> [!INFO]
> **Parameter Details:**
> For detailed parameter descriptions, data types, required vs optional fields, and implementation examples, see the comprehensive [Sovendus Parameter Guide](https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Parameter).

> [!INFO]
> **Order Data Configuration**
> Map your order data from the data layer to these Sovendus parameters (order ID, value, currency, session ID, coupon code).
>
> ![GTM sovendus order data parameters](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-GTM-v2/main/screens/9_order_data.png)

> [!INFO]
> **Customer Data Configuration**
> Map your customer data from the data layer to these Sovendus parameters (name, email, address fields for personalization).
>
> ![GTM sovendus customer data parameters](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-GTM-v2/main/screens/10_customer_data.png)

#### Step 7 – Create the Sovendus Display Container (if required)

> [!WARNING]
> **Container Placement**
> The position of this container doesn't affect the placement of the Sovendus sticky banner and overlay variants if you're using one.

> [!INFO]
> **When is the container required?**
> The container is only required when one of the following is true for you:
>
> - you are using an **inline/embedded** version of our banner or product list
> - you are using a **SPA** (single page app - e.g. react, angular, vue, etc.) as the existence of this container will trigger the sovendus overlay removal process

> [!WARNING]
> **Container ID Must Match**
> The div container ID must exactly match the **iframeContainerId** value in your Sovendus tag configuration. Mismatched IDs will prevent the integration from working.

##### Choose Your Container Setup Method

> [!INFO]
> **Container Placement Options**
> You have two options for adding the Sovendus container to your thank-you page. Choose the method that best fits your technical setup.

##### Option A: Direct HTML Integration

> [!EXAMPLE]
> **Manual HTML Implementation**
> Add the container directly to your thank-you page HTML. This method provides the most control over placement.
>
> **Implementation Methods:**
>
> - Edit your thank-you page template directly
> - Use your CMS or page builder's custom HTML feature
> - Add via your theme's template files
>
> - **HTML Code:**
>
>    ```html
>    <!-- Sovendus Container -->
>    <div id="sovendus-container-1">
>      <!-- the integration loads the content into this div element -->
>    </div>
>    ```
>
> **Placement Tips:**
>
> - Position after order confirmation details
> - Ensure adequate spacing from other elements
> - Consider mobile responsiveness

##### Option B: GTM Custom HTML Tag

> [!INFO]
> **GTM Container Creation**
> Create the container using Google Tag Manager's Custom HTML tag. This method is useful when you can't directly edit your thank-you page HTML.
>
>
> **Create New Tag:**
>
> - Navigate to **Tags** section in GTM
> - Click **New** button
> - Name the tag (e.g., "Sovendus Container")
>
> **Configure Custom HTML:**
>
> - Click **Tag Configuration**
> - Search for **Custom HTML** and select it
>
> ![GTM create custom html tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/14_div_tag_creation.png)
>
> **Add Container HTML:**
>
> - Paste the following HTML code into the **HTML** field
>
>    ```html
>    <!-- Sovendus Container -->
>    <div id="sovendus-container-1">
>      <!-- the integration loads the content into this div element -->
>    </div>
>    ```
>
> ![GTM html code](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild18.png)
>
> 4. **Set Tag Sequencing:**
>    - In **Tag Sequencing** section, click **Select a tag to fire before**
>    - Search for and select your Sovendus tag
>    - This ensures the container loads before the Sovendus content
>
> ![GTM html tag configuration](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild19.png)
>
> ![GTM html tag configuration select sequencing tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild20.png)

#### Step 8 – Create and Set a Trigger

If you **don’t already have** a trigger for your Thank-you page, follow these steps (You can skip this steps if you already have a thank-you page trigger and go to the assign steps below):

1\. Click on the **Triggers** tab in the left menu  
2\. Click **New** to create a new trigger

![GTM triggers tab](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild11.png)
![GTM new trigger](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild12.png)

3\. Name your trigger (e.g., **"Thank-you Page Trigger"**)  
4\. Under **Trigger Configuration**, select **Page View**  
5\. Under **This trigger fires on**, select **Some Page Views**

![GTM new trigger](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild13.png)

6\. In the **Fire this trigger on** section, specify the conditions that will cause the trigger to fire. In this case, you will want to select **Page Path** from the dropdown menu and set the **contains** operator.

Then, enter the **page path of your thank-you page** in the value field. For example, if your
thank-you page is at example.com/thank-you, you would enter **/thank-you** in the value field.

![GTM trigger configuration](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild14.png)

7\. Click **Save** to create the trigger. Now, any Google Tag Manager tags that are associated
with this trigger will fire on the thank-you page whenever the trigger conditions are met.

**Now assign this trigger to your HTML tag containing the Sovendus container:**

![GTM html tag configuration select thank you page trigger](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild21.png)
![GTM html tag configuration select thank you page trigger 2](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild22.png)

**Final Check**

After completing the steps above:

- Make sure the id of the **div container** on your Thank-you page **exactly matches** the **iframeContainerId** value in your Sovendus tag configuration.

![GTM iframeContainerId](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild16.png)

You should now have successfully integrated Sovendus into your website using Google Tag Manager.

### Test Your Integration Before Publishing

Before publishing the changes you made in Google Tag Manager, you should test the integration to ensure that the Sovendus banner is correctly displayed on your Thank-you page.

Follow these steps to test your GTM integration:

1\. In your GTM account, click on **Preview**.

![GTM preview](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild25.png)

2\. Enter your **store URL** and click **Connect**.

![GTM preview connect url](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild26.png)

3\. Now follow the steps in this guide:
[Integration Testing Procedure](https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Integration-Tester#integration-tester-installation)

### Additional Setup for Switzerland

> [!WARNING]
> **Switzerland-Specific Requirement**
> If you're operating in Switzerland, you **must** add an additional landing page script to ensure proper compliance and attribution tracking.
>
> **Why is this required?**
>
> - Provides proper attribution tracking for Swiss traffic
> - Required for all Swiss Sovendus integrations
> - Ensures optimal performance of the Sovendus integration in Switzerland

#### Swiss Landing Page Script Setup

##### Step 1: Create New Custom HTML Tag

> [!INFO]
> **Create New Custom HTML Tag**
> - Navigate to **Tags** section in GTM
> - Click **New** button
> - Name the tag "Sovendus Swiss Landing Script"
> - Click **Tag Configuration**
> - Search for and select **Custom HTML**

##### Step 2: Add Swiss Landing Script Code

> [!INFO]
> **Add Swiss Landing Script Code**
> - Copy and paste this exact code into the HTML field:
>
>    ```html
>    <script>
>      var script = document.createElement("script");
>      script.type = "text/javascript";
>      script.async = true;
>      script.src = "https://api.sovendus.com/js/landing.js";
>      document.body.appendChild(script);
>    </script>
>    ```
>
> ![GTM swiss html code](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screens/15_switzerland_tag_top.png)

##### Step 3: Configure Trigger Assignment

You have two options for configuring the landing page trigger based on your needs:

> [!INFO]
> **Option A - Universal Landing Page Setup/Trigger (Recommended)**
> This option fires the script on all pages of your website, which is the simplest and most reliable approach.
>
> ![GTM Switzerland All Pages Trigger](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-GTM-v2/main/screens/16_switzerland_all_pages_trigger.png)
>
> **Configuration Steps:**
> - Create a new trigger using the process from Step 7
> - Name it "Swiss Landing - All Pages"
> - Under **Trigger Configuration**, select **Page View**
> - Under **This trigger fires on**, select **All Page Views**
> - Click **Save** to create the trigger

> [!INFO]
> **Option B - Specific/Targeted Campaign Pages Setup/Trigger**
> Use this option if you want to limit the script to specific landing pages or campaign pages only.
>
> ![GTM Switzerland Campaign Page Trigger](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-GTM-v2/main/screens/17_switzerland_campaign_page_trigger.png)
>
> **Step 1: Create New Trigger**
> - Create a new trigger using the process from Step 7
> - Name it "Swiss Landing - Campaign Pages"
>
> **Step 2: Configure Trigger Type**
>
> - Under **Trigger Configuration**, select **Page View**
> - Under **This trigger fires on**, select **Some Page Views**
>
> **Step 3: Set Page Conditions**
>
> Set conditions for your specific pages:
>
> - **Page Path** contains `/campaign/`
> - **Page Path** contains `/landing/`
> - **Page Path** equals `/` (for homepage)
>
> **Step 4: Finalize Configuration**
>
> - Add multiple conditions as needed for your landing pages
> - Click **Save** to create the trigger

---

> [!INFO]
>
> **📞 Need Support?**
> Contact your Sovendus account manager if you encounter any issues or need assistance with the integration.
