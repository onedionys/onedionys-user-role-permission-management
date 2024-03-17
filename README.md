<h1 align="center">Welcome to One Dionys - User Role Permission Management! 👋 </h1>

<p align="center">Functions to manage rate limiting when interacting with APIs, prevent abuse and ensure service availability. 💖 </p>

<p align="center">
<img src="https://img.shields.io/github/contributors/onedionys/onedionys-user-role-permission-management?style=flat-square">
<img src="https://img.shields.io/github/issues/onedionys/onedionys-user-role-permission-management?style=flat-square">
<img src="https://img.shields.io/github/stars/onedionys/onedionys-user-role-permission-management?style=flat-square"> 
<img src="https://img.shields.io/github/forks/onedionys/onedionys-user-role-permission-management?style=flat-square">
<img src="https://img.shields.io/github/last-commit/onedionys/onedionys-user-role-permission-management.svg?style=flat-square">
<img src="https://img.shields.io/github/languages/code-size/onedionys/onedionys-user-role-permission-management?style=flat-square">
<img src="https://img.shields.io/github/license/onedionys/onedionys-user-role-permission-management?style=flat-square">
</p>

## 💾 Requirements

* `Web Browser` - Can be used as an emulator to build applications. Example [Chrome, Firefox, Safari & Opera].
* `Internet` - Because many use CDN and to make it easier to find solutions to all problems.

## 🎯 How To Use

#### Example Syntax

```javascript
const UserRolePermission = require('user-role-permission-management');

const roles = {
  admin: {
    permissions: {
      user: ['read', 'write'],
      post: ['read', 'write', 'delete']
    }
  },
  user: {
    permissions: {
      user: ['read']
    }
  }
};

const userRolePermission = new UserRolePermission(roles);

console.log(userRolePermission.hasPermission('admin', 'user', 'read')); // Output: true
console.log(userRolePermission.hasPermission('user', 'post', 'write')); // Output: false
```

#### Explanation

* This package provides a UserRolePermission class that allows you to check if a user role has permission for a specific resource and action. It takes a roles object during initialization, where each role has a set of permissions for different resources.

#### Return Value

* `hasPermission(userRole, resource, action)`: Returns true if the user role has permission for the specified resource and action, otherwise returns false.

## 📆 Release Date

* v1.0.0 : 17 March 2024

## 🧑 Author

* Facebook : <a href="https://www.facebook.com/theonedionys"> Oned Ionys</a>
* Instagram : <a href="https://www.instagram.com/onedionys/"> @onedionys</a>
* Twitter : <a href="https://twitter.com/onedionys"> @onedionys</a>
* LinkedIn :  <a href="https://www.linkedin.com/in/onedionys/"> @onedionys</a>

## 📝 License

* Copyright © 2024 One Dionys
* **One Dionys - User Role Permission Management is an open source project licensed under the MIT license**

## ☕️ Suppport & Donation

Love One Dionys - User Role Permission Management? Support this project by donating or sharing with others in need.

<a href="https://www.buymeacoffee.com/onedionys"><img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black"/> </a>

**Made with ❤️ One Dionys**
