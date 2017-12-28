# node-hid vs jest problem

Before node-hid is rebuilt for use in electron, the jest tests work fine.

- run: `npm run test`

But running the electron app errors out on:

- run: `npm run start`

Exception has occurred: Error
Error: A dynamic link library (DLL) initialization routine failed.
\\?\c:\Users\marc\Documents\My_Projects\Problems\electron-hid-jest-problem\node_modules\node-hid\build\Release\HID.node
    at process.module.(anonymous function) [as dlopen] (ELECTRON_ASAR.js:173:20)
    at Object.Module._extensions..node (module.js:598:18)
    at Object.module.(anonymous function) [as .node] (ELECTRON_ASAR.js:173:20)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.require (module.js:498:17)
    at require (internal/module.js:20:19)
    at bindings (c:\Users\marc\Documents\My_Projects\Problems\electron-hid-jest-problem\node_modules\bindings\bindings.js:81:44)
    at Object.<anonymous> (c:\Users\marc\Documents\My_Projects\Problems\electron-hid-jest-problem\node_modules\node-hid\nodehid.js:5:34)

This means we need to rebuilt electron/node-hid. I have put two undescores befor the usual 'postinstall' to prevent it from triggering accidentally.

- run: `npm run __postinstall`

After node-hid is rebuilt for use in electron, jest reports an error:

- run: `npm run test`

[Jest]
● Test suite failed to run

    The specified module could not be found.
    \\?\C:\Users\marc\Documents\MyProject\node_modules\node-hid\build\Release\HID.node
      Error: The specified module could not be found.
      \\?\C:\Users\marc\Documents\MyProject\node_modules\node-hid\build\Release\HID.node
      at Runtime.requireModule (node_modules/jest-runtime/build/index.js:328:31)
      at bindings (node_modules/bindings/bindings.js:81:44)
      at Object.<anonymous> (node_modules/node-hid/nodehid.js:5:34)

- The project file path does not contain any spaces.
- The jest config can be found in the package.json
- Running vscode on Windows 10.