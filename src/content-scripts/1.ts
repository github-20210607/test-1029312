/**
 * description
 */
import { ChromeStorage } from "chrome-storage";
const chromeStorage = new ChromeStorage();
import { ChromeMessage } from "chrome-message";
const chromeMessage = new ChromeMessage();

const execute = async () => {
  // inject script
  const element = document.createElement("script");
  element.src = chrome.runtime.getURL("/inject-scripts/1.js");
  document.head.appendChild(element);

  // message to background
  const responseText: string = await chromeMessage.sendMessagePromise(
    "command",
    {
      name: "sample",
    }
  );
  console.log(responseText);

  // read storage
  const result = await chromeStorage.fetchPromise("config", true);
  if (!result) return;
};

(async function main() {
  // sample code of receive message from background scripts
  await new Promise(async (resolve: Function) => {
    chrome.runtime.onMessage.addListener(function (
      _request,
      _sender,
      _sendResponse
    ) {
      resolve();
    });
  });

  execute();
})();
