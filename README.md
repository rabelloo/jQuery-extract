# jQuery-extract
Extract objects to forms.<br>
One simple **extract** call on a `$('form')` and your JavaScript object is completely extracted to its fields.<br>
Ajax and SPA with jQuery are now a breeze.<br>

Note: form fields must have the `[name]` or `#id` attributes according to the object properties.

## Usage

```javascript
$().extract(object, [extra])
```

- `object` is a Plain Javascript Object<br>
- `extra` is an optional parameter.<br>If a function is passed, **extract** will evaluate and call it before attempting other binds.<br>Useful for fields with different or unexpected behaviour.<br>**Return true to cancel other binds or false to continue with bind attempts**
