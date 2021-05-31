# Project j899
[![Pull Request](https://github.com/julio899/j899/actions/workflows/pull_request.yml/badge.svg)](https://github.com/julio899/j899/actions/workflows/pull_request.yml)
##### Try philosophy Less is More 
shorten functionality
Utility variuos.

* step 1 Install use node : `npm i j899`
In Vanilla ES5 ES6 or common projects:
>var u = require("j899");

In TypeScript you can use:
>import * as u from "j899";


Test with JestJs
>npm run test

![image](https://user-images.githubusercontent.com/2575745/120127801-5c1f3d00-c18e-11eb-9da5-84611b7e5ebd.png)

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

u.tag('Build','success','V1.0');
u.tag('license','info','MIT');
u.tag('Test','success','passing');
u.tag('SomeText'); // color default
u.tag('SomeText','info');
u.tag('SomeText','info','custom'); // with text in side blue custom text
u.tag('SomeText','success');
u.tag('SomeText','warning');
u.tag('SomeText','danger');
u.tag('SomeText','gold');
u.tag('SomeText','gold','Good');
```
### Examples tags in log

![Tags](https://raw.githubusercontent.com/julio899/perfil/master/img/tags.png)

![npm package](https://static.npmjs.com/c75bd6b3c8bc54a3452b20674c27575b.png)

[npm package](https://www.npmjs.com/package/j899)
