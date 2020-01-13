# Project j899
##### Try philosophy Less is More 
shorten functionality
Utility variuos.

* step 1 Install use node : `npm i j899`
In Vanilla ES5 ES6 or common projects:
>var u = require("j899");

In TypeScript you can use:
>import * as u from "j899";

Examples of Use:
```javascript
import * as u from "j899";
// TEST log
u.log(
	[
		{
			text: "some import typescript",
			otro: 1,
			value: 12324567
		},
		{ otro: "mas" },
		123
	],
	u.inNumeration('US',4567.2)
);
// --- TEST inNumeration
u.log( '------[ Test Numeration US ]-------' );
u.log( '1234  - ' + u.inNumeration('US', 1234) );
u.log( '1.234 - ' + u.inNumeration('US', 1.234) );
u.log( '1234.56 - ' + u.inNumeration('US', 1234.56) );
u.log( '1000234.56 - ' + u.inNumeration('US', 1000234.56) );
u.log( '0.123 - ' + u.inNumeration('US', 0.123) );

u.log('------[ Test Numeration LA ]-------');
u.log('1234  - ' + u.inNumeration('LA', 1234));			// 1234  	-> 1.234
u.log('1.234 - ' + u.inNumeration('LA', 1.234));		// 1.234 	-> 1,234
u.log('1234.56 - ' + u.inNumeration('LA', 1234.56)); 		// 1234.56 	-> 1.234,56
u.log('1000234.56 - ' + u.inNumeration('LA', 1000234.56)); 	// 1000234.56 	-> 1.000.234,56
u.log('0.123 - ' + u.inNumeration('LA', 0.123)); 		// 0.123 	-> 0,123

// # Tags
u.tag('SomeText'); // color default
u.tag('test','info');
u.tag('uno','info','custom'); // with text in side blue custom text
u.tag('dos','success');
```
### Examples tags in log

![Tags](https://raw.githubusercontent.com/julio899/perfil/master/img/tags.png)
