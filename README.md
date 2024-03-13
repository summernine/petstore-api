# Hackerrank Test 2024

## Overview

This is a test for API Automation for petstore.

Git repo - [petstore-api](https://github.com/summernine/petstore-api)

## Setup

Using Node 16 and NPM, run:

```
npm install
```

Run node tests:

```
node test/test.spec.js
```

Run the collection tests with cli report:

```
newman run petstore.postman_collection.json -e petstore.environment.json
```

Report path:

```
newman/*.html
```
