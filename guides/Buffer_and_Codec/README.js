Ext.data.JsonP['Buffer_and_Codec']({"guide":"<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n<title>Buffer and Codec</title>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n<meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" />\n<link type=\"text/css\" rel=\"stylesheet\" media=\"print\" />\n</head>\n<body>\n<div class=\"container\">\n<div class=\"header\"></div>\n<div id=\"29004829\" class=\"content\"><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004829\"><span>Edit</span></a>\n<h1>Buffer and Codec</h1>\n<div class=\"section section-2 \" id=\"29004829_BufferandCodec-Contents\">\n<h2 class=\"heading \"><span>Contents</span></h2>\n<p>\n</p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Buffer_and_Codec-section-29004829_BufferandCodec-Objective\" Buffer_and_Codec.html#29004829_BufferandCodec-Objective=\"Buffer_and_Codec.html#29004829_BufferandCodec-Objective\">Objective</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Buffer_and_Codec-section-29004829_BufferandCodec-Definitions\" Buffer_and_Codec.html#29004829_BufferandCodec-Definitions=\"Buffer_and_Codec.html#29004829_BufferandCodec-Definitions\">Definitions</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Buffer_and_Codec-section-29004829_BufferandCodec-Titanium.Buffer\" Buffer_and_Codec.html#29004829_BufferandCodec-Titanium.Buffer=\"Buffer_and_Codec.html#29004829_BufferandCodec-Titanium.Buffer\">Titanium.Buffer</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Buffer_and_Codec-section-29004829_BufferandCodec-Titanium.Codec\" Buffer_and_Codec.html#29004829_BufferandCodec-Titanium.Codec=\"Buffer_and_Codec.html#29004829_BufferandCodec-Titanium.Codec\">Titanium.Codec</a> </p>\n<ul class=\"toc-indentation \"><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Buffer_and_Codec-section-29004829_BufferandCodec-NumericConversions\" Buffer_and_Codec.html#29004829_BufferandCodec-NumericConversions=\"Buffer_and_Codec.html#29004829_BufferandCodec-NumericConversions\">Numeric Conversions</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Buffer_and_Codec-section-29004829_BufferandCodec-StringConversions\" Buffer_and_Codec.html#29004829_BufferandCodec-StringConversions=\"Buffer_and_Codec.html#29004829_BufferandCodec-StringConversions\">String Conversions</a> </p>\n</li><li class=\" \"> <p>\n<a class=\"document-link \" href=\"#!/guide/Buffer_and_Codec-section-29004829_BufferandCodec-BufferCreationWithEncode\" Buffer_and_Codec.html#29004829_BufferandCodec-BufferCreationWithEncode=\"Buffer_and_Codec.html#29004829_BufferandCodec-BufferCreationWithEncode\">Buffer Creation With Encode</a> </p>\n</li></ul></li></ul> </div>\n<div class=\"section section-2 \" id=\"29004829_BufferandCodec-Objective\">\n<h2 class=\"heading \"><span>Objective</span></h2>\n<p>\nIn this section, you'll learn about using the <tt class=\" \">Buffer</tt> object and the <tt class=\" \">Codec</tt> module to interact with binary data streams.    </p>\n</div>\n<div class=\"section section-2 \" id=\"29004829_BufferandCodec-Definitions\">\n<h2 class=\"heading \"><span>Definitions</span></h2>\n<p>\nThe <a class=\"external-link external-link\" href=\"#!/api/Titanium.Buffer\">Titanium.Buffer</a> is a container for bytes. It differs from <a class=\"external-link external-link\" href=\"#!/api/Titanium.Blob\">Titanium.Blob</a> in that a `Buffer` is mutable and resizable.    </p>\n<p>\nThe <a class=\"external-link external-link\" href=\"#!/api/Titanium.Codec\">Titanium.Codec</a> provides utility methods to convert to and from binary data.    </p>\n<p>\n<tt class=\" \">Buffer</tt> and <tt class=\" \">Codec</tt> are primarily used in conjunction with <a class=\"external-link external-link\" href=\"#!/api/Titanium.IOStream\">Titanium.IOStream</a> objects, including <a class=\"external-link external-link\" href=\"#!/api/Titanium.Network.Socket.TCP\">Titanium.Network.Socket.TCP</a> and <a class=\"external-link external-link\" href=\"#!/api/Titanium.Filesystem.FileStream\">Titanium.Filesystem.FileStream</a>.    </p>\n<p>\nThe <a class=\"external-link external-link\" href=\"#!/api/Titanium.Stream\">Titanium.Stream</a> module provides additional utility methods for working with streams.    </p>\n</div>\n<div class=\"section section-2 \" id=\"29004829_BufferandCodec-Titanium.Buffer\">\n<h2 class=\"heading \"><span>Titanium.Buffer</span></h2>\n<p>\nBuffers are created from the Titanium module using <tt class=\" \">Titanium.createBuffer()</tt>. Buffers are similar to byte arrays in other programming languages but have the ability to be resized. Buffers may be grown by setting the <tt class=\" \">length</tt> property to a larger value, or when using the <tt class=\" \">insert()</tt> or <tt class=\" \">append()</tt> methods. Their length may also be reduced by setting the <tt class=\" \">length</tt> property to a smaller value or using the <tt class=\" \">release()</tt> method.    </p>\n<p>\nYou can create an empty buffer with a specified initial size, or use a string or numeric value as the initial value of a buffer. The following code excerpt show several ways to initialize a buffer.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Create a Buffer with initial length of 0</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer1 = Ti.createBuffer();</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Create a buffer with initial size of 512 bytes</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer2 = Ti.createBuffer({ length: </code><code class=\"value\">512</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"comments\">// Create a buffer, initialized with a string value.</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer3 = Ti.createBuffer({ value: </code><code class=\"string\">\"This is a string, which will form the contents of a new buffer.\"</code><code class=\"plain\">});</code></div>\n</div>\n</div> <p>\nThe following code excerpt shows some other manipulations on a buffer, including appending one buffer to another and truncating buffers.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// </code></div>\n<div class=\"line\"><code class=\"plain\">var buffer1 = Ti.createBuffer({ value: </code><code class=\"string\">\"One buffer full of data. \"</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer2 = Ti.createBuffer({ value: </code><code class=\"string\">\"Another buffer full of data.\"</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"comments\">// Append the contents of one buffer to another</code></div>\n<div class=\"line\"><code class=\"plain\">buffer1.append(buffer2);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(buffer1.toString());</code></div>\n<div class=\"line\"><code class=\"comments\">// Truncate the buffer to 32 bytes</code></div>\n<div class=\"line\"><code class=\"plain\">buffer1.length = </code><code class=\"value\">32</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(buffer1.toString());</code></div>\n<div class=\"line\"><code class=\"comments\">// Set buffers to zero length and release underlying storage.</code></div>\n<div class=\"line\"><code class=\"plain\">buffer1.release();</code></div>\n<div class=\"line\"><code class=\"plain\">buffer2.release();</code></div>\n</div>\n</div> <p>\nBuffers can also be addressed directly as if they were arrays of byte values, as shown in the following code excerpt.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var buffer = Ti.createBuffer({ length: </code><code class=\"value\">2</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">buffer[</code><code class=\"value\">0</code><code class=\"plain\">] = </code><code class=\"value\">1</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">buffer[</code><code class=\"value\">1</code><code class=\"plain\">] = </code><code class=\"value\">3</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer2 = Ti.createBuffer({ length: </code><code class=\"value\">1</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">buffer2[</code><code class=\"value\">0</code><code class=\"plain\">] = </code><code class=\"value\">2</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">buffer.insert(buffer2, </code><code class=\"value\">1</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// writes 123</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.API.info(String(buffer[</code><code class=\"value\">0</code><code class=\"plain\">]) + String(buffer[</code><code class=\"value\">1</code><code class=\"plain\">]) + String(buffer[</code><code class=\"value\">2</code><code class=\"plain\">]));</code></div>\n</div>\n</div> <p>\nThe <tt class=\" \">Buffer</tt> object's <tt class=\" \">append</tt>, <tt class=\" \">copy</tt>, and <tt class=\" \">insert</tt> methods resize the buffer as needed. However, when you access a buffer as an array, the buffer is <i class=\" \">not</i> automatically extended like a JavaScript array. For example, the following code throws an exception, because the value is being assigned to a position past the end of the buffer.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var buffer = Ti.createBuffer({ length: </code><code class=\"value\">2</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">buffer[</code><code class=\"value\">100</code><code class=\"plain\">] = </code><code class=\"value\">1</code><code class=\"plain\">;</code></div>\n</div>\n</div> <p>\nAlso note that when assigning values to the buffer this way, the values must be byte values.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Assigning a string value -- throws an exception</code></div>\n<div class=\"line\"><code class=\"plain\">buffer[</code><code class=\"value\">0</code><code class=\"plain\">] = </code><code class=\"string\">\"a\"</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"comments\">// Assigning a byte value works</code></div>\n<div class=\"line\"><code class=\"plain\">buffer[</code><code class=\"value\">0</code><code class=\"plain\">] = </code><code class=\"string\">\"a\"</code><code class=\"plain\">.charCodeAt(</code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n</div>\n</div> </div>\n<div class=\"section section-2 \" id=\"29004829_BufferandCodec-Titanium.Codec\">\n<h2 class=\"heading \"><span>Titanium.Codec</span></h2>\n<p>\nThe <tt class=\" \">Titanium.Codec</tt> module provides methods for encoding and decoding binary data from buffers into JavaScript primitives. The <tt class=\" \">Codec</tt> module supports conversion of two basic primitive types: Numbers and Strings. <tt class=\" \">Codec</tt> also handles byte order conversion.    </p>\n<p>\nThe <tt class=\" \">Codec</tt> module methods do <strong class=\" \">not</strong> resize the target buffer.    </p>\n<div class=\"section section-3 \" id=\"29004829_BufferandCodec-NumericConversions\">\n<h3 class=\"heading \"><span>Numeric Conversions</span></h3>\n<p>\nNumeric conversion is provided for the following types: <tt class=\" \">byte</tt>, <tt class=\" \">short</tt>, <tt class=\" \">int</tt>, <tt class=\" \">long</tt>, <tt class=\" \">float</tt>, and <tt class=\" \">double</tt>.    </p>\n<p>\nThe following code excerpt encodes a 4-byte integer into the buffer, starting at index 10 (the 11th byte of the integer).    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Encode a 4 byte integer into position 10 using BIG_ENDIAN encoding</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer = Ti.createBuffer({ length: </code><code class=\"value\">100</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Codec.encodeNumber({</code></div>\n<div class=\"line\"><code class=\"plain\">    source: </code><code class=\"value\">0x3456789a</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    dest: buffer,</code></div>\n<div class=\"line\"><code class=\"plain\">    position: </code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    type: Ti.Codec.TYPE_INT,</code></div>\n<div class=\"line\"><code class=\"plain\">    byteOrder: Ti.Codec.BIG_ENDIAN</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div> <p>\nThe following code excerpt <strong class=\" \">decodes</strong> the 4-byte integer written to the buffer in the previous example.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">//Decode a 4 byte integer from position 10 using BIG_ENDIAN encoding</code></div>\n<div class=\"line\"><code class=\"plain\">var value = Ti.Codec.decodeNumber({</code></div>\n<div class=\"line\"><code class=\"plain\">    source: buffer,</code></div>\n<div class=\"line\"><code class=\"plain\">    position: </code><code class=\"value\">10</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    type: Ti.Codec.TYPE_INT,</code></div>\n<div class=\"line\"><code class=\"plain\">    byteOrder: Ti.Codec.BIG_ENDIAN</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"29004829_BufferandCodec-StringConversions\">\n<h3 class=\"heading \"><span>String Conversions</span></h3>\n<p>\nString conversion is provided using the following character sets: <tt class=\" \">ISO_LATIN1</tt>, <tt class=\" \">UTF8</tt>, <tt class=\" \">UTF16</tt>, <tt class=\" \">UTF16BE</tt>, and <tt class=\" \">UTF16LE</tt>. The default is UTF-8. Titanium.Codec also suports both Big Endian and Little Endian byte ordering.    </p>\n<p>\nThe following excerpt encodes a string into a buffer, then trims the buffer to the length of the encoded string.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var buffer = Ti.createBuffer({ length: </code><code class=\"value\">1024</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">var encodedLength = Ti.Codec.encodeString({</code></div>\n<div class=\"line\"><code class=\"plain\">    source: </code><code class=\"string\">\"hello world\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    dest: buffer</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">buffer.length = encodedLength;</code></div>\n</div>\n</div> <p>\nThe following excerpt decodes a UTF-8 string from a buffer.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var string = Ti.Codec.decodeString({ source: buffer });</code></div>\n</div>\n</div> </div>\n<div class=\"section section-3 \" id=\"29004829_BufferandCodec-BufferCreationWithEncode\">\n<h3 class=\"heading \"><span>Buffer Creation With Encode</span></h3>\n<p>\n<tt class=\" \">Titanium.createBuffer()</tt> has convenience options for creating a buffer from existing data. These options are just a convenient alternative to calling `createBuffer` and `encodeString` or `encodeNumber` separately, as shown in the following excerpt.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Create a buffer and encode a string at the same time.</code></div>\n<div class=\"line\"><code class=\"comments\">// Using default encoding of Ti.Codec.CHARSET_UTF8</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer_utf8 = Ti.createBuffer({ value: </code><code class=\"string\">\"Hello World\"</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"comments\">// Create a buffer and encode a string to UTF16</code></div>\n<div class=\"line\"><code class=\"plain\">var buffer_utf16 = Ti.createBuffer({ </code></div>\n<div class=\"line\"><code class=\"plain\">    value: </code><code class=\"string\">\"Hello World\"</code><code class=\"plain\">, </code></div>\n<div class=\"line\"><code class=\"plain\">    type: Ti.Codec.CHARSET_UTF16 </code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div> </div>\n</div>\n</div>\n<div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n</div>\n</body>\n</html>\n","title":"Buffer and Codec"});