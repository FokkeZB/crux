exports.createTemplate = function(args) {
    return Alloy.createController(args.src).getView();
}
