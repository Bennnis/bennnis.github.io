(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{153:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state","aria-hidden":"true"}},[t._v("#")]),t._v(" State")]),t._v(" "),a("p",[a("strong",[t._v("State")]),t._v(" uses a single object to store the state tree, with an object containing all the application-level state. A single data source is more convenient for us to take snapshots of each phase of the state, and it can be more easily injected into homogeneous applications.")]),t._v(" "),a("h2",{attrs:{id:"get-state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-state","aria-hidden":"true"}},[t._v("#")]),t._v(" Get state")]),t._v(" "),a("p",[t._v("The state of getting can only be obtained in the following way. Why is it through methods instead of directly accessing properties? Because the application needs to ensure that the "),a("strong",[t._v("State")]),t._v(" is not being operated when accessing the "),a("strong",[t._v("State")]),t._v(", it is also guaranteed that the "),a("strong",[t._v("State")]),t._v(" obtained must be up to date.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("store.state\n")])])]),a("h2",{attrs:{id:"getters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getters","aria-hidden":"true"}},[t._v("#")]),t._v(" Getters")]),t._v(" "),a("p",[t._v("In order to facilitate the better "),a("strong",[t._v("State")]),t._v(" module partitioning in the application, using "),a("strong",[t._v("Getter")]),t._v(" is a good choice. Imagine getting *"),a("em",[t._v("State")]),t._v(" when the "),a("strong",[t._v("State")]),t._v(" level is deep. * What a desperate thing to do, at this point you may need to define a set of getter methods in the program to get a specific "),a("strong",[t._v("State")]),t._v(". Don't worry, here "),a("strong",[t._v("Slim")]),t._v(" has done it for you, you can quickly use "),a("strong",[t._v("Getter")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'victor'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getters "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Slim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reducers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    getters\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGetter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// victor")]),t._v("\n")])])])])}],!1,null,null,null);e.default=n.exports}}]);