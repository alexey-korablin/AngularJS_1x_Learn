app.controller('MainController', ['$scope', function($scope){
    /*
    $scope.title = 'Top Sellers in Books of this Year';
    $scope.promo = 'Before you buy, take a peek at our award-winning style!';
    */
    /*
    $scope.product = {
        name: 'The book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08')
    }
    */
    /*
    $scope.products = [
        {
            name: 'The book of Trees',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            likes: 0,
            dislikes: 0,
            cover: 'https://codecademy8707896-8000.ccterminalcloud.com/img/the-book-of-trees.jpg'
        },
        {
            name: 'Program or be programmed',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            likes: 0,
            dislikes: 0,
            cover: 'https://codecademy8707896-8000.ccterminalcloud.com/img/program-or-be-programmed.jpg'
        },
        {
            name: 'Harry Potter and the Sorcerer\'s Stone',
            price: 42,
            pubdate: new Date('2003', '08', '01'),
            likes: 0,
            dislikes: 0,
            cover: 'https://d2arxad8u2l0g7.cloudfront.net/books/1361572757l/3.jpg'
        },
        {
            name: 'Harry Potter and the Deathly Hallows',
            price: 44,
            pubdate: new Date('2007', '06', '21'),
            likes: 0,
            dislikes: 0,
            cover: 'https://d2arxad8u2l0g7.cloudfront.net/books/1370023538l/136251.jpg'
        }
    ];
    $scope.plusOne = function(index){
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };
    */
    // Part 2: Controllers

    $scope.move = {
        title: 'move',
        price: 4,
        developer: 'MOVE, Inc.',
        icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/move.jpg'
    };
    $scope.shutterbugg = {
        title: 'shutterbugg',
        price: 5,
        developer: 'Chico Dusty',
        icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/shutterbugg.jpg'
    };
    $scope.gameboard = {
        title: 'gameboard',
        price: 6,
        developer: 'Armando P.',
        icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/gameboard.jpg'
    };
    $scope.forecast = {
        title: 'forecast',
        price: 8,
        developer: 'Chris Koyer',
        icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/forecast.jpg'
    }
    $scope.apps = [
        {
            title: 'move',
            price: 4,
            developer: 'MOVE, Inc.',
            icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/move.jpg'
        },
        {
            title: 'shutterbugg',
            price: 5,
            developer: 'Chico Dusty',
            icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/shutterbugg.jpg'
        },
        {
            title: 'gameboard',
            price: 6,
            developer: 'Armando P.',
            icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/gameboard.jpg'
        },
        {
            title: 'forecast',
            price: 8,
            developer: 'Chris Koyer',
            icon: 'https://codecademy8763256-8000.ccterminalcloud.com/img/forecast.jpg'
        }
    ]
}]);
