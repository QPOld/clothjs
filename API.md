<div id="main">

# Class: cloth

<section>

<header>

## cloth

</header>

<article>

<div class="container-overview">


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

| Name | Type | Description |
| --- | --- | --- |
| `parentID` | <span class="param-type">string</span> | The name of the parent html element. |
| `elementType` | <span class="param-type">string</span> | The html element type that is appened to parent html element. |
| `attrs` | <span class="param-type">object</span> | The attribute object {@see cloth#setAttributes}. |
| `prepend` | <span class="param-type">boolean</span> | Optional flag for prepending the html element in front of any other element. |

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 40](cloth.js.html#line40)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.append('exampleDiv', 'input', attrs={ 'id' : 'exampleID', 'type' : 'submit', 'value' : 'Login'});_

</dd>

</dl>

##### Throws:

<dl>

<dt>

<div class="param-desc">If the document does not exist then the body does not exist thus nothing will be appended.</div>

</dt>

<dt>

<dl>

<dt>Type</dt>

<dd><span class="param-type">TypeError</span></dd>

</dl>

</dt>

</dl>

#### <span class="type-signature">(static)</span> focus<span class="signature">(elementID)</span><span class="type-signature"></span>

<div class="description">Changes the focus to a html element with an id of elementID.</div>

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementID` | <span class="param-type">string</span> | The name of the html element. |

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 131](cloth.js.html#line131)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.focus('exampleID');_

</dd>

</dl>

#### <span class="type-signature">(static)</span> remove<span class="signature">(elementID)</span><span class="type-signature"></span>

<div class="description">An element created with cloth.append {@see cloth#append} with an id given in the attrs object can be removed with this function. If the element does not exist then nothing happens. Any html element created with cloth.append should have an input have an 'id' in the attrs object.</div>

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementID` | <span class="param-type">string</span> | The name of the html element that will be removed. |

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 81](cloth.js.html#line81)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.remove('exampleID');_

</dd>

</dl>

#### <span class="type-signature">(static)</span> retrieve<span class="signature">(elementID)</span> <span class="type-signature">→ {number|undefined}</span>

<div class="description">Retrieve a value from an element with an id. If the value does not exist then null is returned instead of the value.</div>

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementID` | <span class="param-type">string</span> | The name of the html element. |

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 98](cloth.js.html#line98)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.retrieve('exampleID');_

</dd>

</dl>

##### Returns:

<div class="param-desc">Returns the value or undefined.</div>

<dl>

<dt>Type</dt>

<dd><span class="param-type">number</span> | <span class="param-type">undefined</span></dd>

</dl>

#### <span class="type-signature">(static)</span> setAttributes<span class="signature">(element, attrs)</span><span class="type-signature"></span>

<div class="description">Sets CSS attributes for a html element. Loops through all the keys in the attrs object and uses the method element.setAttribute. Invalid keys and attributes are ignored.</div>

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `element` | <span class="param-type">element</span> | The html element that is being created. |
| `attrs` | <span class="param-type">object</span> | The attribute object. This contains any inline parameters. I suggest containing the id parameter. |

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

#### <span class="type-signature">(static)</span> value<span class="signature">(elementID, elementValue)</span><span class="type-signature"></span>

<div class="description">Changes the value of the html element with an id of elementID</div>

##### Parameters:

| Name | Type | Description |
| --- | --- | --- |
| `elementID` | <span class="param-type">string</span> | The name of the html element. |
| `elementValue` | <span class="param-type">string</span> | The new value for the html element. |

<dl class="details">

<dt class="tag-source">Source:</dt>

<dd class="tag-source">

*   [cloth.js](cloth.js.html), [line 116](cloth.js.html#line116)

</dd>

<dt class="tag-tutorial">Tutorials:</dt>

<dd class="tag-tutorial">

*   _Tutorial: cloth.value('exampleID',42)_

</dd>

</dl>

</article>

</section>

</div>


<footer>Documentation generated by [JSDoc 3.4.3](https://github.com/jsdoc3/jsdoc) on Mon Nov 14 2016 07:11:12 GMT-0800 (Pacific Standard Time)</footer>

<script>prettyPrint();</script>