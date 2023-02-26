# sovendus_gtm_template
Sovendus template for Google Tag Manager

With the Sovendus GTM template you are able to integrate the products Sovendus Sales and Sovendus Select into your page.
But be aware that you'll need a valid contract with Sovendus in order to obtain the required IDs for your integration.

Everything you'll need to do for a basic setup can be done from inside Google Tag Manager.

GUI:
![Sovendus_GTM_Template](https://user-images.githubusercontent.com/81681270/115350511-7dffca00-a1b5-11eb-9573-c10d2b9cbab0.png)

How to get it running:
1. Select the respective products from the first dropdown as it will change the parameter selection, e.g. Sovendus Sales for the Sales Banner.
Your contract will state the booked products.
2. Add all required information to the respective fields. Most of the fields require to be filled with a parameter from your datalayer as they revolve around an order or user.
Here you'll find a list with a description on all parameters possible but be aware that not all of them are needed depending on your product.
The teplate itself will also give you a detailed info on what we expect for what parameter.
In case you cannot supply a value and it is not required as a basic parameter supply it as an empty string and not a null value.

The Sovendus integration needs an DIV container so it knows where to load the product. You can either enter an existing DIV in the parameter iFrameContainerId and the template will include an iFrame in here of add a new DIV to your page (for example to get more options for configuration via css).

![image](https://user-images.githubusercontent.com/81681270/115351890-059a0880-a1b7-11eb-8307-5de8f7d682c2.png)

Triggers and location:
There are some requiremets for triggers and the location of the integration.
- The integration should only take placed on the page that is described on the contract. If you want to extend that please reach out to your contact at Sovendus in order to obtain the new IDs for this use case.
- In order for the Sovendus integration to show there are 2 basic requirements for the triggers, a) the DIV element required to load the content into needs to be already in place and b) the parameters from the data layer are already present.

Check: 
After adding the template, all required parameters and setting up the triggery your integration should be ready.
You can check with navigation to the respective page and see if our product is loaded into the page (e.g. compare to screenshot in contract).

IMPORTANT: 
- Do not use the same IDs on different pages; each use case has its own set of IDs.
- Contact Sovendus once you finalized the integration so we can adjust everything else from our side. 

For more information on security, functionality and other topics please reach out to your contact at Sovendus.
