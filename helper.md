npx playwright test HomePageTest.spec.js

npx playwright test tests/OrangeHRM/LoginPage.spec.js --project chromium --headed

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
│   ├── OrangeHRM/
│   │   ├── LoginPage.spec.js
│   │   ├── MyInfo.spec.js
│   │   └── Dashboard.spec.js
│   │
│   └── API/
│       └── LoginAPI.spec.js
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── MyInfoPage.js
│   └── AdminPage.js
│
├── utils/
│   ├── ExcelUtils.js
│   ├── TestDataUtils.js
│   ├── DateUtils.js
│   └── CommonUtils.js
│
├── fixtures/
│   ├── test-fixtures.js
│   └── auth.fixture.js
│
├── test-data/
│   ├── OrangeHRM_Login_TestData.xlsx
│   └── users.json
│
├── playwright/
│   └── .auth/
│       └── user.json
│
├── config/
│   ├── dev.env
│   ├── qa.env
│   └── prod.env
│
├── reports/
│
├── screenshots/
│
├── test-results/
│
├── playwright-report/
│
├── auth.setup.js
├── playwright.config.js
├── package.json
├── .env
├── .gitignore
└── README.md