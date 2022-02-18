# No autocomplete on sub folders

This repo demonstrates the lack of auto complete, within VS Code, of sub folder when used in conjunction with `typeVersions`.

## Setup


```
cd package
npm i
npx tsc
cd ..\project
npm i
```

## Issue

We have an internal package, written in TS, transpiled to a sub folder called 'dest'. The package.json of the package looks like:

```
{
  ...
  "type": "module",
  "exports": {
    "./*": "./dest/*"
  },
  "typesVersions": {
    "*": {
      "*": [
        "dest/*"
      ]
    }
  },
  ...
}
```

We're able to consume the package in our projects, like this:

```
import { something } from 'test-package/something'; // Actual file './dest/something.js'
```

This works. Our code is transpiled correctly. We get autocomplete on the import path, and typing on the imported whatever, within VS Code.

Until, we attempt to access a sub folder within the 'dest' folder. Within a subfolder, like:

```
import { somethingElse } from 'test-package/sub-folder/something-else'; // Actual file './js/sub-folder/something-else.js'
```

In this instance, we get everything from above, except autocomplete on the import path. The file still resolves, and we get typing. Our build script still runs, the files is just invisible.

This is using Visual Studio Code 1.64.2 and TypeScript 4.5.5. Both project and package have the following tsconfig.json:

```
{
  ...
    "target": "ES2016",
    "module": "ESNext",
  ...
}
```

## Example

![Demo](https://p-4qFNYDd.t4.n0.cdn.getcloudapp.com/items/P8u6o7mW/e4ca180a-a8ad-4db3-93f6-f67e9a3ea15b.gif?source=viewer&v=d7c549522979cafb78c5f28a6309e1d6)

## Related issues

 - [Support for NodeJS 12.7+ package exports](https://github.com/microsoft/TypeScript/issues/33079#issuecomment-1043271180)
 - [typeVersions substitution occurs multiple times causing resolution to fail](https://github.com/microsoft/TypeScript/issues/41284)