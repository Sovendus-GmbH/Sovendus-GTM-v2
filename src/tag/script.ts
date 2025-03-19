import type {
  CountryCodes,
  ExplicitAnyType,
  OptimizeSettings,
  SovendusPageConfig,
  SovendusThankYouPageConfig,
  Versions,
  VoucherNetworkSettings,
} from "sovendus-integration-types";

import { version } from "./constants";

const PLUGIN_VERSION = `gtm-new-${version}`;

declare const data: {
  // IMPORTANT: Sync this with the tags input settings keys
  pageType: "page" | "thankyou";
  // page settings
  voucherNetworkPage: boolean | undefined;
  optimizePage: boolean | undefined;
  optimizeIdPage: ExplicitAnyType;
  checkoutProductsPage: boolean | undefined;
  // thankyou settings
  voucherNetwork: boolean | undefined;
  checkoutBenefits: boolean | undefined;
  checkoutProducts: boolean | undefined;
  optimize: boolean | undefined;
  optimizeId: ExplicitAnyType;
  trafficSourceNumber: ExplicitAnyType;
  trafficMediumNumber: ExplicitAnyType;
  orderId: ExplicitAnyType;
  netOrderValue: ExplicitAnyType;
  grossOrderValue: ExplicitAnyType;
  shippingValue: ExplicitAnyType;
  taxValue: ExplicitAnyType;
  taxPercent: ExplicitAnyType;
  orderCurrency: ExplicitAnyType;
  usedCouponCode: ExplicitAnyType;
  iframeContainerQuerySelector: ExplicitAnyType;
  integrationType: ExplicitAnyType;
  consumerSalutation: ExplicitAnyType;
  consumerFirstName: ExplicitAnyType;
  consumerLastName: ExplicitAnyType;
  consumerEmail: ExplicitAnyType;
  consumerEmailHash: ExplicitAnyType;
  consumerYearOfBirth: ExplicitAnyType;
  consumerDateOfBirth: ExplicitAnyType;
  consumerStreet: ExplicitAnyType;
  consumerStreetNumber: ExplicitAnyType;
  consumerFullStreet: ExplicitAnyType;
  consumerZipcode: ExplicitAnyType;
  consumerCity: ExplicitAnyType;
  consumerCountry: ExplicitAnyType;
  consumerLanguage: ExplicitAnyType;
  consumerPhone: ExplicitAnyType;
  gtmOnSuccess: () => void;
  gtmOnFailure: () => void;
};

declare const require: <FNType>(name: string) => FNType;

// Initialize GoogleTagManager APIs
const setInWindow = require<
  (variableName: string, value: ExplicitAnyType) => void
>("setInWindow");
const injectScript = require<
  (
    scriptUrl: string,
    onSuccess: () => void,
    onFail: () => void,
    cacheVersionKey: string,
  ) => void
>("injectScript");
const log = require<(...messages: ExplicitAnyType[]) => void>("logToConsole");
const queryPermission = require<
  (permissionName: string, ...functionParams: ExplicitAnyType[]) => boolean
>("queryPermission");
const _makeString = require<(value: ExplicitAnyType) => string>("makeString");

function makeString(value: ExplicitAnyType): string | undefined {
  const stringValue = _makeString(value);
  return stringValue === "undefined" ? Undefined : stringValue;
}

const Undefined = null as unknown as undefined;

const sovendusScripts = {
  // TODO: Update these URLs with the correct Sovendus URLs when ready
  page: "https://api.sovendus.com/gtm/page.js",
  thankyou: "https://api.sovendus.com/gtm/thankyou.js",
};

/**
 * Main function
 */
function main(): void {
  if (checkPermissions()) {
    try {
      if (data.pageType === "page") {
        landingPage();
      } else {
        thankYouPage();
      }
    } catch (error) {
      log("Sovendus Tag - Error", error);
      data.gtmOnFailure();
      return;
    }
    log("Sovendus Tag - end");
    data.gtmOnSuccess();
  } else {
    log(
      "Sovendus Tag - No permission to get/set sovReqCookie or read url path",
    );
    data.gtmOnFailure();
  }
}

/**
 * Permission check
 * Make sure all permissions are checked
 */
export function checkPermissions(): boolean {
  return (
    queryPermission("inject_script", sovendusScripts.page) &&
    queryPermission("inject_script", sovendusScripts.thankyou)
  );
}

function logger(
  pageType: "Page" | "Thankyou",
  message: string,
  messages?: ExplicitAnyType[],
): void {
  log(`Sovendus Tag [${pageType}] - ${message}`, messages || "");
}

/**
 * landing page related functions
 *
 */

function landingPage(): void {
  logger("Page", "starting...");
  setLandingPageConfig();
  injectScript(
    sovendusScripts.page,
    () => {
      /* empty */
    },
    () => {
      /* empty */
    },
    "use-cache",
  );
  logger("Page", "done");
}

function setLandingPageConfig(): void {
  const sovPageConfig: SovendusPageConfig = {
    settings: {
      voucherNetwork: {
        settingType: undefined,
        cookieTracking: data.voucherNetworkPage || false,
      },
      optimize: getOptimizeSettings(),
      checkoutProducts: data.checkoutProductsPage || false,
      version: "3" as Versions.THREE,
      employeeBenefits: {
        isEnabled: false,
        showWidgetOnDashboard: false,
        addToSidebar: false,
      },
    },
    integrationType: PLUGIN_VERSION,
    country: makeString(data.consumerCountry) as CountryCodes | undefined,
  };
  setInWindow("sovPageConfig", sovPageConfig);
}

/**
 * Thank you page related functions
 *
 */

function thankYouPage(): void {
  logger("Thankyou", "starting...");
  setThankyouPageConfig();
  injectScript(
    sovendusScripts.thankyou,
    () => {
      /* empty */
    },
    () => {
      /* empty */
    },
    "use-cache",
  );
  logger("Thankyou", "done");
}

function setThankyouPageConfig(): void {
  const sovThankyouConfig: SovendusThankYouPageConfig = {
    settings: {
      voucherNetwork: getVoucherNetworkSettings(),
      optimize: getOptimizeSettings(),
      employeeBenefits: {
        isEnabled: false,
        showWidgetOnDashboard: false,
        addToSidebar: false,
      },
      checkoutProducts: data.checkoutProducts || false,
      // use string here to avoid external dependency
      version: "3" as Versions.THREE,
    },
    sovDebugLevel: undefined,
    orderData: {
      orderId: data.orderId,
      orderValue: {
        netOrderValue: data.netOrderValue,
        grossOrderValue: data.grossOrderValue,
        taxValue: data.taxValue,
        taxPercent: data.taxPercent,
        shippingValue: data.shippingValue,
      },
      orderCurrency: data.orderCurrency,
      usedCouponCode: data.usedCouponCode,
    },
    iframeContainerQuerySelector: data.iframeContainerQuerySelector
      ? {
          selector: data.iframeContainerQuerySelector,
          where: "none",
        }
      : undefined,
    integrationType: PLUGIN_VERSION,
    customerData: {
      consumerSalutation: (data.consumerSalutation
        ? makeString(data.consumerSalutation)
        : Undefined) as "Mr." | "Mrs." | undefined,
      consumerFirstName: data.consumerFirstName
        ? makeString(data.consumerFirstName)
        : Undefined,
      consumerLastName: data.consumerLastName
        ? makeString(data.consumerLastName)
        : Undefined,
      consumerEmail: data.consumerEmail
        ? makeString(data.consumerEmail)
        : Undefined,
      consumerEmailHash: data.consumerEmailHash
        ? makeString(data.consumerEmailHash)
        : Undefined,
      consumerYearOfBirth: data.consumerYearOfBirth
        ? makeString(data.consumerYearOfBirth)
        : Undefined,
      consumerDateOfBirth: data.consumerDateOfBirth
        ? makeString(data.consumerDateOfBirth)
        : Undefined,
      consumerStreet: data.consumerStreet,
      consumerStreetNumber: data.consumerStreetNumber,
      consumerStreetWithNumber: data.consumerFullStreet,
      consumerZipcode: data.consumerZipcode
        ? makeString(data.consumerZipcode)
        : Undefined,
      consumerCity: data.consumerCity
        ? makeString(data.consumerCity)
        : Undefined,
      consumerCountry: data.consumerCountry
        ? (makeString(data.consumerCountry) as CountryCodes)
        : Undefined,
      consumerPhone: data.consumerPhone
        ? makeString(data.consumerPhone)
        : Undefined,
    },
  };
  setInWindow("sovThankyouConfig", sovThankyouConfig);
}

function getVoucherNetworkSettings(): VoucherNetworkSettings {
  const isEnabled = !!data.voucherNetwork;
  const voucherNetwork: VoucherNetworkSettings = isEnabled
    ? {
        settingType: "simple",
        simple: {
          isEnabled: true,
          trafficSourceNumber: makeString(data.trafficSourceNumber) || "",
          trafficMediumNumber: makeString(data.trafficMediumNumber) || "",
          iframeContainerQuerySelector: Undefined,
        },
        cookieTracking: data.voucherNetwork || false,
      }
    : {
        settingType: undefined,
        cookieTracking: false,
      };
  return voucherNetwork;
}

function getOptimizeSettings(): OptimizeSettings {
  const optimizeId = data.optimizeIdPage
    ? makeString(data.optimizeIdPage)
    : undefined;
  return optimizeId
    ? {
        settingsType: "simple",
        simple: {
          isEnabled: !!(data.optimizeIdPage && data.optimizeIdPage),
          optimizeId,
        },
      }
    : {
        settingsType: undefined,
      };
}

main();
