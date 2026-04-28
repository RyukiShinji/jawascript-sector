function TraceMethod() {
    function testMethod() {
        console.trace("Trace call");
    }
    testMethod();
}
TraceMethod();
