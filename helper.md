npx playwright test HomePageTest.spec.js

npx playwright test tests/OrangeHRM/MyLogin.spec.js --project chromium --headed

npx playwright test tests/OrangeHRM/MyLogin.spec.js --project=chromium --headed --grep "MyInfo"

npx playwright test tests/LoginPage.spec.js --project=chromium --headed --grep '@reg' --grep-invert '@san'

npx playwright test HomePageTest.spec.js --project=chromium --headed --debug

npx playwright show-report

npx playwright show-trace

allure generate allure-results --clean

allure open allure-report

Automation Practice/
│
├── tests/
│   └── OrangeHRM/
│       ├── LoginPage.spec.js
│       └── MyLogin.spec.js
│
├── pages/
│   ├── LoginPage.js
│   └── DashboardPage.js
│
├── utils/
│   ├── testData.js
│   ├── excelUtils.js
│   ├── commonUtils.js
│   └── dateUtils.js
│
├── playwright.config.js
├── .env
└── package.json