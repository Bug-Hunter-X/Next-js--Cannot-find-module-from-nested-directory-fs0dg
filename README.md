# Next.js: Cannot find module from nested directory

This repository demonstrates a common error encountered when working with Next.js applications: the inability to import modules from nested directories.

## Problem

When attempting to import a component from a nested directory, Next.js throws an error similar to:

```
Error: Cannot find module './components/MyComponent'
```

## Solution

The solution is to ensure that the import path is correct and that the component is located within the `pages` directory or a directory accessible from the `pages` directory.