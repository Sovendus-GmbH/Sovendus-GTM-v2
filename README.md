# Sovendus Google Tag Manager Template for Voucher Network and Checkout Benefits Integration

> [!WARNING]
> Google Tag Manager is often blocked by ad blockers. We strongly recommend using a plugin or direct integration instead, as 5%–10% of traffic may be lost otherwise.

This guide explains how to set up and implement Sovendus on your website using Google Tag Manager, as an alternative to direct code integration.

## 🛠️ Instructions:

- Install the Sovendus Google Tag Manager (GTM) tag on your website.
- Edit the tag to add required parameters and set the appropriate trigger.
- Add a div container to the location on your site where Sovendus offers should appear.

## 📋 Step-by-step Guide

### Step 1 – Log into Google Tag Manager

Log in to the GTM account for the site where you want to implement Sovendus.

Navigate to the **Templates** section to install the Sovendus template.

![GTM Home](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild1.png)

### Step 2 – Search for the Sovendus Template

Click on **Search Gallery**. In the search bar, type "Sovendus" and press Enter.

![GTM Import Sovendus Template](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild2.png)

You will see multiple templates. Select the one called:  
**"Sovendus Integration for Voucher Network and Checkout Benefits"**

![GTM Import Sovendus Template](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild3.png)

### Step 3 – Add the Template to Your Workspace

Click **Add to workspace**. A popup will appear — click **Add** to confirm.

![GTM Import Sovendus Template 2](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild4.png)
![GTM Import Sovendus Template 3](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild5.png)

### Step 4 – Create and Configure the Sovendus Tag

Go to the **Tags** section in GTM and click **New**.

![GTM new tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild6.png)

Click **Tag Configuration**, then use the search icon to find and select "**Sovendus**".

![GTM new tag - select Sovendus](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild7.png)

### Step 5 – Fill in Sovendus Parameters

In the Sovendus tag configuration, complete the required fields (1 to 7).
Optional: Add any desired consumer parameters.

![GTM sovendus tag parameters](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild9.png)

It is necessary to transmit certain information to Sovendus. For an extensive explanation of why and when certain information is transmitted to Sovendus, please refer to the Sovendus data protection documentation.

The following variables are needed. Please check in your Google tag manager data layer if they are already defined. If they are not, they should be added to the data layer.

[💡 Google’s guide on setting the data layer](https://developers.google.com/tag-platform/tag-manager/datalayer)

These information are treated in accordance with the privacy policy and are not disclosed to third parties:

- **trafficSourceNumber**: The Traffic Source Number is used to assign your shop in our system. You can
  find it at the very beginning of the document in the grey box.
- **trafficMediumNumber**: The Traffic Medium Number is used to assign your integration in our
  system (for example, if you have multiple integrations within one shop). You can find it at the very beginning of the document in the grey box
- **sessionID**: The customer's session ID is used to detect accidental duplicate requests. Please hash
  the session ID for security purposes before using it.
- **Timestamp**: The timestamp is used to cause requests to our system to expire after a certain
  amount of time. Please provide us with the Unix timestamp.
- **orderId**: The order ID uniquely identifies orders and helps to recognize multiple requests to our
  server system. We also need this data when it comes to billing questions.
- **orderValue**: The order value is for billing purposes, please submit it with two decimal places and a dot as the decimal separator.
- **orderCurrency**: Order currency according to ISO 4217 (http://en.wikipedia.org/wiki/ISO_4217)
- **usedCouponCode**: The code of the redeemed voucher is used to track the success rate and enables
  automated invoicing.
- **iframeContainerId**: This determines at which position on the page the generated iframe should be
  implemented.
- **consumerSalutation**: This is needed to match gender to appropriate offers and is also used to
  pre-fill the input forms.
- **consumerFirstName**, consumerLastName: This is used to pre-fill the input forms and needed to
  filter for products that are not appropriate.
- **consumerEmail**: The e-mail address is used to pre-fill input forms. It should be transmitted as plain text, Sovendus will hash the e-mail address to take possible objections to advertising into account.
- **consumerCountry**: This data is used to display matching national offers. Please transmit country
  code according to ISO 3166-1 alpha-2: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#DE
- **consumerZipcode**: This data is used to display local offers and is used to pre-fill input forms.

### Step 6 - Sovendus Div Container

To define where the Sovendus banner will be displayed, you need to create a **div** container with a **unique ID** that matches the value set in the **iframeContainerId** field in your Sovendus Google Tag Manager tag.

**Option A – Add the container directly to your Thank-you Page:**

This involves modifying the HTML of your Thank-you page by inserting the container manually. You can do this by:

- Editing the page's HTML directly
- Or using a page builder or other tool that allows you to insert custom HTML

```html
<!-- Sovendus Container -->
<div id="sovendus-container-1">
  <!-- the integration loads the content into this div element -->
</div>
```

**Option B – Add the container via Google Tag Manager**

To create the div container via GTM, follow these steps:

1\. Navigate to the **Tags** section of your GTM account.  
2\. Click the **New** button  
3\. Name the tag (e.g., **"Sovendus Container"**)  
4\. Click on **Tag Configuration**  
5\. In the sidebar, click the **search icon**, search for **Custom HTML** and select it

![GTM new tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild6.png)
![GTM create custom html tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild17.png)

6\. In the HTML field, paste the following code:

```html
<!-- Sovendus Container -->
<div id="sovendus-container-1">
  <!-- the integration loads the content into this div element -->
</div>
```

![GTM html code](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild18.png)

7\. In the **Tag Sequencing** section, click **Select a tag to fire before**, search for **Sovendus** and select the Sovendus tag you previously created.

![GTM html tag configuration](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild19.png)

![GTM html tag configuration select sequencing tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild20.png)

### Step 7 – Create and Set a Trigger

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

## Test Your Integration Before Publishing

Before publishing the changes you made in Google Tag Manager, you should test the integration to ensure that the Sovendus banner is correctly displayed on your Thank-you page.

Follow these steps to test your GTM integration:

1\. In your GTM account, click on **Preview**.

![GTM preview](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild25.png)

2\. Enter your **store URL** and click **Connect**.

![GTM preview connect url](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild26.png)

3\. Now follow the steps in this guide:
[Integration Testing Procedure](https://developer-hub.sovendus.com/Voucher-Network-Checkout-Benefits/Integration-Tester#integration-tester-installation)

## Additional Step for Switzerland 🇨🇭

If you're operating in Switzerland, you must additionally:

1\. Navigate to the **Tags** section of your Google tag manager account.

2\. Now you click on the **New** button, name the tag to e.g. **Sovendus Swiss Container**, here you click on the **Tag Configuration** section, a side bar opens with all tag types you have available, here you click on the search icon and search for **Custom HTML**.

Here you have to click on the **Custom HTML Tag**.

![GTM new tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild6.png)
![GTM create custom html tag](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild17.png)

3\. Copy and paste the following code into the HTML text area:

```html
<script>
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.async = true;
  script.src = "https://api.sovendus.com/js/landing.js";
  document.body.appendChild(script);
</script>
```

![GTM swiss html code](https://raw.githubusercontent.com//Sovendus-GmbH/Sovendus-GTM-v2/main/screenshots/Bild24.png)

4\. Assign a trigger that only fires on your **homepage or the landing page from Sovendus**. If you need to create a new trigger, just follow **Step 7**, but set your home page / the page where user will land coming from the Sovendus Voucher Network as the page path.
