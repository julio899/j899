"use strict";

const log = require("./lib/log");
const tag = require("./lib/tag");
const inNumeration = require("./lib/inNumeration");

module.exports = {
  log,
  inNumeration,
  tag
};

log(
	[
		{
			text: "Hey import typescript",
			otro: 1,
			value: 12324567
		},
		{ otro: "mas" },
		123
	],
	inNumeration('US',4567.2)
);
tag('test','info');
tag('uno','info','custon');
tag('dos','success');