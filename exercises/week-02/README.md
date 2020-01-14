### [Back](../../)

# Week 02 - Introduction to working with JS
## Embedding JavaScript

> There are a number of ways JS can be introduced into an HTML document. For the purpose of this exercise, we're going to look at a few different ways to complete the process. Sometimes JS should be in the head of an HTML document, and sometimes it should be at the bottom of the documents body. This all depends on if the JS imported is blocking the browser's UI thread which will delay content rendering on our page. How do we know if our JS does that?

## Types of Embeds

JavaScript can be embedded in the head of the document, the body or with HTML5 script tags. If you were to take a gres,, the sntax would look like this

```html
<Script>
  // we can enter JavaScript here now just as we could in an imported file
</script>
``` 