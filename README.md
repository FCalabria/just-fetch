# Just fetch

Are you tired of writting `result.json()`?

Would you like to call `fetch.delete(url)` instead of passing the method as an (easy to mistype) option?

Will you flip your desk the next time you spend 15 minutes debugging a fetch call that resolved with `result.ok: false` instead of f***ng rejecting?

This is your package.

## How to use it

```
import f from 'justFetch'

f.get(url)
.then(response => { // or use await, I don't care
    // response is already a json. Yay!
})
.catch(error => {
    // if result.ok is not true, it will reject transparently. My pleasure
})

```

It supports the main HTTP methods:

`f.get(resource: string, init?: {})` Same as the standard fetch syntax

`f.head(resource: string, init?: {})` Same as the standard fetch syntax, but `method: 'HEAD'` is already set

`f.delete(resource: string, init?: {})` Same as the standard fetch syntax, but `method: 'DELETE'` is already set

`f.options(resource: string, init?: {})` You get the idea, right?

`f.post(resource: string, data: {}, init?: {})` Data will be stringified and passed as the post body. It adds `'Content-Type': 'application/json'` by default in the headers, but it can be overriden by the `init` param

`f.put(resource: string, data: {}, init?: {})` Same considerations as with `post`

## Contributing

I made this because I got tired of copy-pasting the same wrapper in every personal project. It works for me.

If you find a bug I will gladly try to fix it or merge PRs. If you want to add features I expect them to be small and simple. If I wanted something big, I would be using axios.