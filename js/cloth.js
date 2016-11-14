//KEEP WORKIN ON THIS!!!!!
/**
 *	@description Cloth is a html element generator. It allows html to be
 *		dynamically generated within a javascript file..
 *	@module cloth
 *	@author Michael Parkinson <SubFiApp@gmail.com>
 */
!function () {
	/** cloth object containing the current version number.*/
	var cloth = {
		version : "1.0.0"
	},
	cloth_document = this.document;
	if (typeof define === "function" && define.amd) {
		this.cloth = cloth;
		define(cloth);
	} else if (typeof module === "object" && module.exports) {
		module.exports = cloth;
	} else {
		this.cloth = cloth;
	}

	/**
	 *	@description Sets CSS attributes for a html element. Loops through all the
	 *		keys in the attrs object and uses the method element.setAttribute.
	 *		Invalid keys and attributes are ignored.
	 *	@memberof cloth
	 *	@function setAttributes
	 *	@param {element} element The html element that is being created.
	 *	@param {object} attrs The attribute object. This contains any 
	 *		inline parameters. I suggest containing the id parameter.
	 *	@tutorial setAttributes(elementID,{'id':'elememtID','type':'elementType'});
	 */
	function setAttributes(element, attrs) {
		for (var key in attrs) {
			element.setAttribute(key, attrs[key]);
			
		}
	};
	
	/**
	 *	@description The main function for cloth.js. cloth.append takes in the parentID
	 *		html element then appends an element of type ElementID with attributes
	 *		attrs. If the parent does not exist then the elementID is attached to
	 *		the body. The function must be called after the document has loaded.
	 *	@memberof cloth
	 *	@function append
	 *	@param {string} parentID The name of the parent html element.
	 *	@param {string} elementType The html element type that is appened to parent html element.
	 *	@param {object} attrs The attribute object {@see cloth#setAttributes}.
	 *	@param {boolean} prepend Optional flag for prepending the html element in front of any other element.
	 *	@tutorial cloth.append('exampleDiv', 'input', attrs={ 'id' : 'exampleID', 'type' : 'submit', 'value' : 'Login'});
	 *	@throws {TypeError} If the document does not exist then the body does not exist thus nothing will be appended.
	 */
	cloth.append = function(parentID, elementType, attrs, prepend) {
		if (typeof prepend === 'undefined') { prepend = false; } // Prepend flag set to false if not defined.
		parentElement = cloth_document.getElementById(parentID);
		if (parentElement === undefined || parentElement === null) { // If the parentElement does not exist.
			parentElement = cloth_document.createElement(elementType);
			setAttributes(parentElement, attrs);
			try { // Catches a TypeError thrown because the document does not exist.
				if(!prepend){
					cloth_document.body.appendChild(parentElement);
				} else {
					cloth_document.body.insertBefore(parentElement, cloth_document.body.childNodes[0]);
				}
			} catch(err) {
				// The Error now produces a warning.
				console.warn('Warning: '+err.message+' \n	Check if the document loads before cloth attempts to append.')
			}
		} else { // If the parentElement does exist.
			childElement = cloth_document.createElement(elementType);
			setAttributes(childElement, attrs);
			if(!prepend) {
				parentElement.appendChild(childElement);
			} else {
				parentElement.insertBefore(childElement, parentElement.childNodes[0]);
			}
		}
	};
	
	/**
	 *	@description An element created with cloth.append {@see cloth#append} with an id 
	 *		given in the attrs object can be removed with this function. If the element 
	 *		does not exist then nothing happens. Any html element created with 
	 *		cloth.append should have an input have an 'id' in the attrs object.
	 *	@memberof cloth
	 *	@function remove
	 *	@param {string} elementID The name of the html element that will be removed.
	 *	@tutorial cloth.remove('exampleID');
	 */
	cloth.remove = function(elementID) {
		var element = cloth_document.getElementById(elementID);
		if (element !== undefined || element !== null) {
			element.parentNode.removeChild(element);
		}
	};
	
	/**
	 *	@description Retrieve a value from an element with an id. If the value does
	 *		not exist then null is returned instead of the value.
	 *	@memberof cloth
	 *	@function retrieve
	 *	@param {string} elementID The name of the html element.
	 *	@returns {number|undefined} Returns the value or undefined.
	 *	@tutorial cloth.retrieve('exampleID');
	 */
	cloth.retrieve = function(elementID) {
		var element = cloth_document.getElementById(elementID);
		if (element !== undefined || element !== null) {
			return element.value;
		} else {
			return undefined;
		}
	};
	
	/**
	 *	@description Changes the value of the html element with an id of elementID
	 *	@memberof cloth
	 *	@function value
	 *	@param {string} elementID The name of the html element.
	 *	@param {string} elementValue The new value for the html element.
	 *	@tutorial cloth.value('exampleID',42)
	 */
	cloth.value = function(elementID, elementValue) {
		var element = cloth_document.getElementById(elementID);
		if (element !== undefined || element !== null) {
			element.value = elementValue;
		}
	};
	
	/**
	 *	@description Changes the focus to a html element with an id of elementID.
	 *	@memberof cloth
	 *	@function focus
	 *	@param {string} elementID The name of the html element.
	 *	@tutorial cloth.focus('exampleID');
	 */
	cloth.focus = function(elementID){
		var element = cloth_document.getElementById(elementID);
		if (element !== undefined || element !== null) {
			element.focus()
		}
	};
}
();