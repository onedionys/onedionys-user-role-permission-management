const { checkPermission } = require('./utils/permissionUtils');

class UserRolePermission {
  constructor(roles) {
    this.roles = roles;
  }

  // Method to check if a user has permission
  hasPermission(userRole, resource, action) {
    return checkPermission(this.roles[userRole], resource, action);
  }
}

module.exports = UserRolePermission;
