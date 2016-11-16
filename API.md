<div id="main">

# Class: cloth

<section>

<header>

## cloth

</header>

<article>

<div class="container-overview">

#### <span class="type-signature"></span>new cloth<span class="signature">()</span><span class="type-signature"></span>

<div class="description">Cloth is a html element generator. It allows html to be dynamically generated within a javascript file..</div>

<dl class="details">

<dt class="tag-author">Author:</dt>

<dd class="tag-author">

*   [Michael Parkinson](mailto:SubFiApp@gmail.com)

</dd>

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 1](cloth.js.html#line1)

</dd>

</dl>

</div>

### Methods

#### <span class="type-signature">(static)</span> append<span class="signature">(parentID, elementType, attrs, prepend)</span><span class="type-signature"></span>

<div class="description">The main function for cloth.js. cloth.append takes in the parentID html element then appends an element of type ElementID with attributes attrs. If the parent does not exist then the elementID is attached to the body. The function must be called after the document has loaded.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`parentID`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">The name of the parent html element.</td>

</tr>

<tr>

<td class="name">`elementType`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">The html element type that is appened to parent html element.</td>

</tr>

<tr>

<td class="name">`attrs`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">The attribute object {@see cloth#setAttributes}.</td>

</tr>

<tr>

<td class="name">`prepend`</td>

<td class="type"><span class="param-type">boolean</span></td>

<td class="description last">Optional flag for prepending the html element in front of any other element.</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 41](cloth.js.html#line41)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.append('exampleDiv', 'input', attrs={ 'id' : 'exampleID', 'type' : 'submit', 'value' : 'Login'});_

</dd>

</dl>

#### <span class="type-signature">(static)</span> edit<span class="signature">(element, attrs)</span><span class="type-signature"></span>

<div class="description">Sets CSS attributes for a html element. Loops through all the keys in the attrs object and uses the method element.setAttribute. Invalid keys and attributes are ignored.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`element`</td>

<td class="type"><span class="param-type">element</span></td>

<td class="description last">The html element that is being created.</td>

</tr>

<tr>

<td class="name">`attrs`</td>

<td class="type"><span class="param-type">object</span></td>

<td class="description last">The attribute object. This contains any inline parameters. I suggest containing the id parameter.</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 22](cloth.js.html#line22)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: setAttributes(elementID,{'id':'elememtID','type':'elementType'});_

</dd>

</dl>

#### <span class="type-signature">(static)</span> focus<span class="signature">(elementID, defocus)</span><span class="type-signature"></span>

<div class="description">Changes the focus to a html element with an id of elementID.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`elementID`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">The name of the html element.</td>

</tr>

<tr>

<td class="name">`defocus`</td>

<td class="type"><span class="param-type">boolean</span></td>

<td class="description last">Optional flag to defocus from an html element.</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 151](cloth.js.html#line151)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.focus('exampleID');_

</dd>

</dl>

#### <span class="type-signature">(static)</span> remove<span class="signature">(elementID)</span><span class="type-signature"></span>

<div class="description">An element created with cloth.append {@see cloth#append} with an id given in the attrs object can be removed with this function. If the element does not exist then nothing happens. Any html element created with cloth.append should have an input have an 'id' in the attrs object.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`elementID`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">The name of the html element that will be removed.</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 83](cloth.js.html#line83)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.remove('exampleID');_

</dd>

</dl>

#### <span class="type-signature">(static)</span> retrieve<span class="signature">(elementID, innerHTML)</span> <span class="type-signature">→ {number|undefined}</span>

<div class="description">Retrieve a value from an element with an id. If the value does not exist then undefined is returned instead of the value. If the element only has an innerHTML associated with it then the innerHTML flag can be set to true.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`elementID`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">The name of the html element.</td>

</tr>

<tr>

<td class="name">`innerHTML`</td>

<td class="type"><span class="param-type">boolean</span></td>

<td class="description last">Optional flag</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 100](cloth.js.html#line100)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.retrieve('exampleID',false);_

</dd>

</dl>

##### Returns:

<div class="param-desc">Returns the value or innerHTML of the html element.</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">number</span> | <span class="param-type">undefined</span></dd>

</dl>

#### <span class="type-signature">(static)</span> value<span class="signature">(elementID, elementValue, innerHTML)</span><span class="type-signature"></span>

<div class="description">Changes the value of the html element with an id of elementID. If the element only takes innerHTML then the innerHTML flag can be true. The elementValue is still used when the innerHTML flag is set true. The flag is set to false by default.</div>

##### Parameters:

<table class="params">

<thead>

<tr>

<th>Name</th>

<th>Type</th>

<th class="last">Description</th>

</tr>

</thead>

<tbody>

<tr>

<td class="name">`elementID`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">The name of the html element.</td>

</tr>

<tr>

<td class="name">`elementValue`</td>

<td class="type"><span class="param-type">string</span></td>

<td class="description last">The new value for the html element.</td>

</tr>

<tr>

<td class="name">`innerHTML`</td>

<td class="type"><span class="param-type">boolean</span></td>

<td class="description last">Optional flag for elements that have innerHTML.</td>

</tr>

</tbody>

</table>

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 125](cloth.js.html#line125)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.value('exampleID',42,false);_

</dd>

</dl>

</article>

</section>

</div>

<nav>

## [Home](index.html)

### Classes

*   [cloth](cloth.html)

</nav>

<footer>Documentation generated by [JSDoc 3.4.3](https://github.com/jsdoc3/jsdoc) on Tue Nov 15 2016 18:09:02 GMT-0800 (Pacific Standard Time)</footer>

<script>prettyPrint();</script>