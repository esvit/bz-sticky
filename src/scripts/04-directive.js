app.directive('bzSticky', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element, attrs) {
            var item = {
                element: element,
                isStuck: false,
                placeholder: attrs.usePlaceholder !== undefined,
                start: element.offset().top
            };

            $rootScope._stickyElements = $rootScope._stickyElements || [];
            $rootScope._stickyElements.push(item);
        }
    };
}]);