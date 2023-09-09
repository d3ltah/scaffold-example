# Scaffold

Scaffold is a very simple and bare-bones builder to generate clean, customisable web pages just by changing
a few values in a file.

This is more of a project to teach myself and for a bit of fun, but if you want to use this for your own projects
you're more than welcome to do so. I don't expect any kind of credit, although I'd love to see the things people
can make of Scaffold.

Scaffold is intended for use by those who don't know a lot of HTML, CSS or JS and want a quick solution to make
small pages for small projects and personal use (like Carrd), while potentially learning things about HTML
in the process.

I'm explicitly aiming this project at newbies ~~so I don't get judged by people better than me~~ to show the things
you can do if you learn any kind of programming.

You'll spend most of your time editing `config.js`. There will be comments in that file which will tell
you what needs to go where. If you like (and know what you're doing), you can also manually edit the HTML,
CSS or JS files.

## Setting a title

To set a title for your page, all you need to do is head to the `config.js` file and edit the value of `pageTitle`
in the `CONFIG` object.

*`config.js`*

```js
const CONFIG = {
    pageTitle: "How To Make a Thermonuclear Reactor Out Of Potatoes"
}
```

For legal reasons, I won't actually be showing you how to do that.

## Adding content

Adding content is a little more complex, but still relatively simple.
To add a section to your page, create a new entry in the `section` object within `CONFIG`. Remember to add a comma
after the previous entry!

*`config.js`*

```js
const CONFIG = {
    sections: {

        "Some awesome section": `
            Type your content here - you can use HTML tags!
            <br>
            Here's a list:
            <ul>
                <li>Harder</li>
                <li>Better</li>
                <li>Faster</li>
                <li>Stronger</li>
            </ul>
        `,

        "Another awesome section": `
            D3 wuz here
        `

    }
}
```

## Getting your page on the web

What good is a web page if it's not on the web?

- Fork this repository, make the changes you want, and push them onto your fork.
  
- If your repository is for yourself, name it `your-GitHub-username.github.io` - and that's about all you need
  to do! Type that address into your browser and your page should appear.

- If this page is for a project, head to Settings at the top of your repository's page,
  then click Pages in the sidebar.
  
- Under "Source", choose "main branch".

- Click "Save", and in a few moments, your page should be ready to go at
  `your-GitHub-username.github.io/respository-name`!

Still stuck? [GitHub themselves](https://pages.github.com/) can explain it better than I can.

---

### Way forward

I plan to allow users of Scaffold to build their pages using Markdown, which is essentially a simplified way of
specifying how you'd like things to be displayed to computers - it's how this readme was written, if you have any
clue how GitHub works.

Here's a to-do list for things I plan to implement in the future (but no guarantees):

- [x] Colour editing
- [x] Twemoji support
- [x] Font Awesome support
- [ ] Markdown support
- [ ] Preset stylesheets and colour schemes
- [ ] Animation support
