# jQuery-extract
Extract objects to forms

## Usage

```javascript
$().extract(object, [extra])
```

- `object` is a Plain Javascript Object<br>
- `extra` is an optional parameter.<br>If a function is passed, **extract** will evaluate and call it before attempting other binds.<br>Useful for fields with different or unexpected behaviour.<br>**Return true to cancel other binds or false to continue with bind attempts**
