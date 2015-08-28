## CRUX

### Why?

The idea behind **CR**oss-platform **UX** came from a need I had to have a quick way to do cross-platform code in a way that would be easier, consistent and fast for building apps. I wanted a simple way to ensure that I could lay out an app, start coding for iOS, and know when I launched in Android it word work without messing around with it. I also wanted to reduce the amount of code that was creating new views, handling the closing of views etc.

### Features

CRUX consists of a number of commonJS libraries (which I'll be releasing in time) -- the first one of which to be released is called "Templates". Others that are coming soon are:-

* crux.navigator
* crux.slideview
* crux.device
* crux.utils
* crux.templates

The first one I'm making available is *crux.templates*

#### crux.templates

Templates fixes an issue with Alloy whereby the *Require* tag doesn't propertly support child elements. OK, it does, but you if you did the following:

```
<Alloy>
	<Require src="template1">
		<Label>Hello World</Label>
	</Require>
</Alloy>
```

You would have to explicitiy loop through the children passed to *template1* and add them into your view.

This library is incredibly small (3 lines of code) and yet solves this problem. You no longer have to explicitly add the children -- it's done for you!

To use:

* use the latest Alloy 1.6.2
* add the *crux.templates.js* file to your Alloy *app/lib* folder

You can create a new view/controller for your template, e.g *template1* and configure it like you would any alloy view, with your default layout:

```
<Alloy>
    <Window title="Sand Pit" backgroundColor="white">
    	<View backgroundColor="red" height="50" top="0" />
    </Window>
</Alloy>
```

Next, go to your view where you want to use the template, in this example I'm using *index.xml*

```
<Alloy module="crux.templates">
    <Template id="main" src="template1" title="test" >
        <Label color="black">Label3</Label>
    </Template>
</Alloy>
```

Note that the module is specified in the *Alloy* tag -- this means it will be used across the whole view. You can otherwise specify the module attribute in the *template* tag itself.

Build the app and your label (Label3) will be included in the template you specified!

(You can test the exact same code using *Require* instead of *Template* and note that it doesn't work -- you have to explicitly iterate and add the child views yourself in the template).

## License

<pre>
Copyright 2015 Jason Kneen

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
