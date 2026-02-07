I'm building a web application using Gammal Tech SDK v3.0.1. Help me implement the following features:

SDK Setup:
```html
<script src="https://api.gammal.tech/sdk-web.js"></script>
```

Available Methods:
- GammalTech.login() - Opens login popup, returns Promise with token
- GammalTech.logout() - Logs out user
- GammalTech.isLoggedIn() - Returns boolean
- GammalTech.getToken() - Returns stored token
- GammalTech.onAuth(onLoggedIn, onLoggedOut) - Auth state callbacks
- GammalTech.user.get() - Get user data object
- GammalTech.user.save(data) - Save user data object
- GammalTech.pay(amount, description, onDeliver) - Wallet payment (EGP)
- GammalTech.payCard(amount, currency, description, onDeliver) - Card payment
- GammalTech.ai.ask(message, options) - AI completion

Key Points:
- No API keys needed - security via domain whitelisting
- Token stored in sessionStorage automatically
- Payments require pre-approval from Gammal Tech
- User data is per-developer, stored as JSON object

Please help me with: [DESCRIBE YOUR TASK HERE]