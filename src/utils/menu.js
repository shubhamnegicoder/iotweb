module.exports = [
    {
        key: 'dashboard',
        name: 'Dashboard',
        icon: 'laptop',
        clickable: true
    }, {
        key: 'users_list',
        name: 'Users',
        icon: 'team',
        clickable: true
    }, {
        key: 'asset',
        name: 'Assets',
        icon: 'team',
        clickable: false,
        child: [
            {
                key: 'assets',
                name: 'Assets'
            }
        ]
    }, {
        key: 'regions',
        name: 'Regions',
        icon: 'team',
        clickable: true
    }, {
        key: 'branch',
        name: 'Branch',
        icon: 'team',
        clickable: true
    }, {
        key: 'table',
        name: 'Table',
        icon: 'exception',
        clickable: false,
        child: [
            {
                key: 'basic',
                name: 'Basic'
            }, {
                key: 'users',
                name: 'User CRUD'
            }, {
                key: 'advancedTable',
                name: 'Advanced Table'
            }, {
                key: 'ajaxTable',
                name: 'Ajax Table'
            }, {
                key: 'table-playground',
                name: 'Table Playground'
            }
        ]
    },
    {
        key: 'pages',
        name: 'Pages',
        icon: 'pushpin-o',
        clickable: false,
        child: [
            {
                key: 'blank',
                name: 'Blank'
            }, {
                key: 'login-page',
                name: 'Login'
            }, {
                key: 'signup',
                name: 'Sign Up'
            }
        ]
    },
    {
        key: 'user',
        name: 'User',
        icon: 'team',
        clickable: false,
        child: [
            {
                key: 'user',
                name: 'user'
            }, {
                key: 'userType',
                name: 'userType'
            }
        ]
    },
    {
        key: 'region',
        name: 'Region',
        icon: 'pushpin-o',
        clickable: true,

    },
    {
        key: 'zone',
        name: 'Zone',
        icon: 'pushpin-o',
        clickable: true,

    }
]
