import { ChromeMessage } from "chrome-message";
import { ChromeStorage } from "chrome-storage";
const chromeStorage = new ChromeStorage();

/**
 * short cut key
 */
chrome.commands.onCommand.addListener((command: string, tab: any) => {
  if (command === "sample") {
    chrome.tabs.sendMessage(tab["id"], { command: "execute" });
  }
});

/**
 * context menu
 */
(async () => {
  const isEnableContextMenuMode = await chromeStorage.fetchPromise(
    "isEnableContextMenuMode",
    false
  );
  if (isEnableContextMenuMode) {
    chrome.contextMenus.create(
      {
        title: "execute",
        contexts: ["all"],
        documentUrlPatterns: ["*://example.com"],
        onclick: (_info: any, tab: any) => {
          chrome.tabs.sendMessage(tab["id"], { command: "execute" });
        },
      },
      () => {
        console.log("contextmenus created");
      }
    );
  }
})();

/**
 * on installed or on updated, open page
 */
chrome.runtime.onInstalled.addListener((details: any) => {
  if (details.reason === "install") chrome.runtime.openOptionsPage();
  if (details.reason === "update")
    chrome.tabs.create({ url: "option-page/index.html#/update" });
});

/**
 * on clicked browser action , open page
 */
chrome.browserAction.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage();
});

/**
 * add message event from content-scripts
 */
new ChromeMessage().addListener("command", (_request: any) => {
  return new Promise(async (resolve: Function) => {
    console.log("command message recived");
    resolve();
  });
});
