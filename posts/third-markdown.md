---
title: 'R'
metaTitle: 'R'
metaDesc: 'R related post'
socialImage: 'images/dog.jpg'
coverImageAlt: 'Example Cover Image'
author: 'Dummy'
date: '2022-11-20'
categories : ["R", "React"]
status: false
---

# The main content
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Code for fun or profit
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. See more on [here](https://apu-apac.netlify.app/)


### JavaScript

```javascript
File.indexOf = function(term){
	for(var index in File.list){
		var file = File.list[index];
		if (file.equals(term) || file.url === term || file.object === term) {
			return index;
		}
	}
	return -1;
};
```

## Other stuff

As to be expected you can do all the things that are _standard_ Markdown. So tables, blockquotes etc. And if you prefer to add custom Markdown functionality, just extend the configuration with custom [markdown-it](https://github.com/markdown-it/markdown-it) plugins.

