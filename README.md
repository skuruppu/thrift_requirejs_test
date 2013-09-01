This is an example application for showing how to use the Thrift JS modules
that are compatible with Require.js.

Thrift Update
=============

To generate Require.js compatible JS modules with thrift, you must apply the
following [patch](https://gist.github.com/skuruppu/5a24615b2c579aedaf68) to
your thrift compiler with:

    patch -p1 < thrift_requirejs.patch

Then compile and install Thrift.

Note that this patch only allows Thrift to generate Require.js compatible
modules for Thrift enums and constants only.

Generating JS Modules
=====================

First clone this git repository. The thrift tutorial files are provided in the
`thrift` directory. To compile follow these steps:

    cd thrift

    make

The generated JavaScript module will be added to the `js/gen-js` directory.
Then serve the `index.html` file to see the use of the Thrift enums and
constants.
