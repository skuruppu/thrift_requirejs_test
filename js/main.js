require.config({
    shim: {
        'thrift': {
            exports: 'Thrift'
        }
    }
});

require(["gen-js/tutorial_types"], function(TestTypes) {
    var span = document.getElementById("enum");
    var text = document.createTextNode(TestTypes.Operation.ADD.toString());
    span.innerHTML = '';
    span.appendChild(text);

    span = document.getElementById("constant");
    text = document.createTextNode(TestTypes.INT32CONSTANT.toString());
    span.innerHTML = '';
    span.appendChild(text);

    span = document.getElementById("map_constant");
    text = document.createTextNode(TestTypes.MAPCONSTANT.hello.toString());
    span.innerHTML = '';
    span.appendChild(text);
});
