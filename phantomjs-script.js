console.log('start phantom');
setTimeout(function() {
    console.log('Boo from phantom private test');
    phantom.exit();
}, 1000);